import React from "react";
import {connect} from "react-redux";
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../actions/filters";
import { DateRangePicker } from "react-dates";


export class ExpenseListFilter extends React.Component{
    state={
        focused: null
    };
    onDatesChange = ({startDate, endDate}) =>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (focused) =>{
        this.setState(() => ({ focused}));
    }
    onTextChange = (e) =>{
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) =>{
        if(e.target.value === "date"){
            this.props.sortByDate();
        }
        else if(e.target.value === "amount"){
            this.props.sortByAmount();
        }
    }
    render(){
        return (
            <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input type="text" value={this.props.filters.text} onChange={this.onTextChange} className="text-input" placeholder="Search Expenses"/>
                </div>

                <div className="input-group__item">
                    <select value={this.props.filters.sortBy} onChange={this.onSortChange} className="select">
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>

                <div className="input-group__item">
                    <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    />
                </div>
            </div>
            </div>
        );
    }
}



const mapStateToProps = (state) =>{
    return{
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);