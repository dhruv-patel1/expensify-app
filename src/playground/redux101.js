import { createStore } from "redux";

//in order to use redux, we import createStore from redux
//the store tracks the changing data
//The store takes a function parameter
//default state value is used


//Action-generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) =>({type: "INCREMENT", incrementBy});

const decrementCount = ({decrementBy = 1} = {}) =>({type:"DECREMENT", decrementBy});

const setCount = ({ count }) =>({
    type:"SET",
    count
})

const resetCount = () =>({
    type:"RESET"
});

//THis function is a reducer
//The reducer decides what to do based on the action

//Reducers
//1. Reducers are pure functions (The output is only determined by the inpput)
//2. Never change state or action
const countReducer = (state = { count: 0}, action)=>{
    switch(action.type){
        case "INCREMENT":
             return{
                count: state.count+action.incrementBy
            }
        case "DECREMENT":
            return{
                count:state.count-action.decrementBy
            }
        case "RESET":
            return{
                count:0
            }
        case "SET":
            return{
                count: action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

//subscribe() helps us visualize the state as it changes
const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});
//.getState() returns the state object

//How do we increment the state value count
//Using actions - an object that gets sent to the store
//increment, decrement, reset
/* store.dispatch({
    type: "INCREMENT",
    incrementBy: 5
}); */
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({ count:101}));
