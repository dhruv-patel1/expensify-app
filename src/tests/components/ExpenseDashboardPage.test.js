import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";
import {shallow} from "enzyme";
import React from "react";

test("Should render the Expense Dashboard Page", () =>{
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
})