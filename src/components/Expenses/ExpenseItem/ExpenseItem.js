import ExpenseDate from '../ExpenseDate/ExpenseDate';
import  './ExpenseItem.css'
import {useState} from "react";
function ExpenseItem(props) {

    const expense = props.expense

    const [title, setTitle] = useState(expense.title);

    let click ;

    const  changeTitle = () => {
        click = !click
        click? setTitle('Updated!'): setTitle(expense.title);
    }

    return (
        <div className="expense-item">
        <ExpenseDate date={expense.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className = "expense-item__price">${expense.amount}</div>
        </div>
        <button onClick={changeTitle}>change title</button>
    </div>);

}

export default ExpenseItem;
