import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses(props){
   const expenseList = props.expenses;

   const [filterYear, setFilterYear] = useState('2020');
   const [expenses, setExpenses] = useState(expenseList);

    const filterDate = (filterDate) => {
        setFilterYear(filterDate);
        setExpenses(expenseList.filter(expense => expense.date.getFullYear().toString() === filterDate));

    };



    return (<div className="expenses">
        <div>
            <ExpensesFilter selected={filterYear} onDateFilterChanged={filterDate}/>
            <ExpensesChart expenses={expenses}/>
            <ExpensesList expenses={expenses}/>
        </div>
    </div>);

}
export default Expenses;
