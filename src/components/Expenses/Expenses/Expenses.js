import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css'

function Expenses(props){
   const expenseList = props.expenses;

    return (<div className="expenses">
        <div>
            {expenseList.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)}
        </div>
    </div>);

}
export default Expenses;
