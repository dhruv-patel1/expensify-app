import {startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import expensesReducer from "../../reducers/expenses";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) =>{
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) =>{
        expensesData[id] = { description, note, amount, createdAt};
    })
    database.ref('expenses').set(expensesData).then(() => done());
});

test("Should setup remove expense action obj", () =>{
    const action = removeExpense({id: "123abc"});
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id: "123abc"
    });
})

test("Should setup edit expense action obj", () =>{
    const action = editExpense(123, {amount: 200});
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id: 123,
        updates:{
            amount:200
        }
    })
})

test("Should setup add expense action obj", () =>{
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense:expenses[2]
    })
});

test("Should add expense to database and store", (done) =>{
    const store = createMockStore({});
    const expenseData = {
        description: "Mouse",
        amount: 3000,
        note: "This one is better",
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
        }).then((snapshot) =>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
    });
});

test("Should add expense with default to database and store", (done) =>{
    const store = createMockStore({});
    const expenseDefault = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once("value");
        }).then((snapshot) =>{
            expect(snapshot.val()).toEqual(expenseDefault);
            done();
    });
})

test("Should set up expense action object with data", () =>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:"SET_EXPENSES",
        expenses
    });
});

test("Should set expense", () =>{
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});

test("Should fetch the expenses from firebase", (done) =>{
    const store = createMockStore({});
        store.dispatch(startSetExpenses()).then(() =>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "SET_EXPENSES",
                expenses
            });
            done();
        });
});