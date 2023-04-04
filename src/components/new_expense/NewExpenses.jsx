import React from "react";
import Expenseform from "./expense_form/Expenseform";
import './NewExpenses.css';

const NewExpenses =( props)=>{
    const onSave=(new_expense={})=>{
        const expense={
            ...new_expense,
            id:Math.random.toString(),

        }
        props.onAddExpenses(expense);
      }


    return(
        <div className="new-expense">

             <Expenseform onFormSubmit={onSave}/>
        </div>
    );
}


export default NewExpenses;