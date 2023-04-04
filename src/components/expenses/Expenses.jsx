import React from "react";
import Expenseitem from "./expense_item/Expenseitem";
import './Expenses.css';
const Expenses= (props)=>{
    const {expenses} = props;
    return(
        <div className="expenses">
            {
            expenses.map((each_expense)=>{
                return(
                    <Expenseitem 
                    key={each_expense.id}
                    title={each_expense.title}
                    amount={each_expense.amount}
                    date={each_expense.date} 
                    />
                )
            })
            }

    </div>
    );

} 
export default Expenses;