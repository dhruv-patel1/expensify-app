import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import expenses from "../tests/fixtures/expenses";
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import { Link } from "react-router-dom";

export const ExpenseSummary = ({ expenseCount, expensesTotal}) =>{
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formattedExpenses = numeral(expensesTotal/100).format("$0,0.00");
    return(
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenses}</span></h1>
            <div className="page-header__actions">  
                <Link to="/create" className="button">Add Expense</Link>
            </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) =>{
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return{
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };

}

export default connect(mapStateToProps)(ExpenseSummary);