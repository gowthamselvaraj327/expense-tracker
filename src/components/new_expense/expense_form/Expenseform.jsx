import React,{useState} from "react";
import './Expenseform.css';
const Expenseform = (props)=>{
    const[enteredTitle,setEnteredTitle] =useState('');
    const[enteredAmount,setEnteredAmount] =useState('');
    const[enteredDate,setEnteredDate] =useState('');

    const onTitleChange =(event)=>setEnteredTitle(event.target.value);
    const onAmountChange =(event)=>setEnteredAmount(event.target.value);
    const onDateChange =(event)=>setEnteredDate(event.target.value);


    const onSubmit =(event)=>{ 
    event.preventDefault();
    const new_expense={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }
    props.onFormSubmit(new_expense);
      setEnteredAmount(" ");
      setEnteredDate("");
      setEnteredTitle("");


    }
    return(
        <form action="" onSubmit={onSubmit}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" name="expense_title" value={enteredTitle} id="title" onChange={onTitleChange} />
         </div>
        <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input type="number" name="expense_amount" value={enteredAmount} id="amount" min="0" onChange={onAmountChange}/>
        </div>
        <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input type="date" name="expense_date" value={enteredDate} id="date" onChange={onDateChange} />
        </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">AddExpense</button>
        </div>
        </form>
    );

}

export default Expenseform;