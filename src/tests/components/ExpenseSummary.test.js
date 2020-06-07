import React from "react";
import {shallow} from "enzyme";
import {ExpenseSummary} from "../../components/ExpenseSummary";
import expenses from "../fixtures/expenses";

test("Should render a singular expense", () =>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
})

test("Should render multiple expenses", () =>{
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={23454323434}/>);
    expect(wrapper).toMatchSnapshot();
})