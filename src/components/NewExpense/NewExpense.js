import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const onExpenseFormSubmitHandler = (submitedExpense) => {
        const expense = {
            ...submitedExpense, id: Math.random().toString()
        };
        props.onAddExpense(expense);
    };
    return <div className="new-expense">
        <ExpenseForm onExpenseFormSubmit={onExpenseFormSubmitHandler}/>
    </div>
};
export default NewExpense;
