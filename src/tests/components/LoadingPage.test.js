import LoadingPage from "../../components/LoadingPage";
import React from "react";
import { shallow } from "enzyme";

test("Should correctly render the loading image", () =>{
    const wrapper = shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
});