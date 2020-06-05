import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../../actions/filters";
import moment from "moment";

test("Should generate set start date action obj", () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate: moment(0)
    })
})

test("Should generate set end date action obj", () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate: moment(0)
    })
})

test("Should generate set text filter action obj", () =>{
    const someText = "jobs"
    const action = setTextFilter(someText);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: someText
    })
})

test("Should generate set text filter action obj for default", () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text: ""
    })
})

test("Should generate sort by date action obj", () =>{
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})

test("Should generate sort by amount action obj", () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})