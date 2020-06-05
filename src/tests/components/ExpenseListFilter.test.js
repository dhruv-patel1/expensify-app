import React from "react";
import {shallow} from "enzyme";
import moment from "moment";
import {ExpenseListFilter} from "../../components/ExpenseListFilter";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() =>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate= jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilter
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />);
});

test("Should render Expense list filters correctly", () =>{
    expect(wrapper).toMatchSnapshot();
})

test("Should handle text change", () =>{
    const value="rent"
    wrapper.find("input").simulate("change", {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test("Should sort by date", () =>{
    const value = "date";
    wrapper.find("select").simulate("change",{
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled();
})

test("Should sort by amount", () =>{
    const value = "amount";
    wrapper.find("select").simulate("change",{
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled();
})

test("Should handle date changes", () =>{
    const startDate = moment(0).add(4, "years");
    const endDate = moment(0).add(8, "years");
    wrapper.find("DateRangePicker").prop("onDatesChange")({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test("Should handle date focus changes", () =>{
    const focused = "startDate";
    wrapper.find("DateRangePicker").prop("onFocusChange")(focused);
    expect(wrapper.state("focused")).toBe(focused);
})
