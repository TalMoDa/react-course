import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {

    const expensesList = props.expenses


    if (expensesList.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return <ul className='expenses-list'>
        {expensesList.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)}
    </ul>
}
export default ExpensesList;
