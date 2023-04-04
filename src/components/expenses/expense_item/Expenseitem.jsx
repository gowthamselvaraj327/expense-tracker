import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/Expensedate";
const Expenseitem = (props)=>{
    // const date=new Date().toISOString();
    // const amount =10;
    // const title="Book shop";

    //default value
    let{
      title='',
      amount=0,
      date=new Date()
    }=props;
    // const [title,setTitle]=useState(props.title)
    // const buttonclick=() =>{
    //   setTitle("Updated");
    //   console.log(title);

    // }
   return(
     <div className="expense-item">
      <ExpenseDate date={date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>

            <div className="expense-item__price">${amount}</div>

        </div>
        {/* <button onClick={buttonclick}>Click me</button> */}
     </div>
   );
};

export default Expenseitem;