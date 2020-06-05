//install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import { Provider} from "react-redux";
import AppRouter from "./routers/AppRouter"
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

//add expense -> water bill

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));



//Switch goes through the routes to see if a match is found
//If found, it will display
//Else, the pageNotFound Component will be loaded

