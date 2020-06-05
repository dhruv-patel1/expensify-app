import NotFoundPage from "../../components/NotFoundPage";
import {shallow} from "enzyme";
import React from "react";

test("Should render the Not Found Page", () =>{
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
})