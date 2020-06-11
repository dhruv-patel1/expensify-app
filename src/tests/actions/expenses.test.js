import {startAddExpense, addExpense, editExpense, removeExpense} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

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
/* test("Should setup add expense action obj with defaults", () =>{
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense:{
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    })
}) */