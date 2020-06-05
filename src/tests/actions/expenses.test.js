import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

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
    const expenseData = {
        description: "rent",
        amount: 109500,
        createdAt: 1000,
        note: "This was last months rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("Should setup add expense action obj with defaults", () =>{
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
})