import {LoginPage }from "../../components/LoginPage";
import React from "react";
import { shallow } from "enzyme";

test("Should correctly render Login Page", () =>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test("Should call startLogin on button click", () =>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find("button").simulate("click");
    expect(startLogin).toHaveBeenCalled();
});