import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import expenses from "../tests/fixtures/expenses";
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpenseSummary = ({ expenseCount, expensesTotal}) =>{
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formattedExpenses = numeral(expensesTotal/100).format("$0,0.00");
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenses}</h1>
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