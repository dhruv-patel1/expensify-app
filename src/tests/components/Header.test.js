//react-test-renderer
import { shallow } from "enzyme";
import React from "react";
import {Header} from "../../components/Header";


test("should render header correctly", () =>{
    /* const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot(); */
    const wrapper = shallow(<Header startLogOut={() =>{ }}/>);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find("h1").text()).toBe('Expensify');
})

test("should call startLogOut on button click", () =>{
    const startLogOut = jest.fn();
    const wrapper = shallow(<Header  startLogOut={startLogOut}/>);
    wrapper.find("button").simulate("click");
    expect(startLogOut).toHaveBeenCalled();
});