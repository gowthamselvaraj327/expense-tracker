import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/new_expense/NewExpenses';
import { useState } from 'react';
const DUMMY_DATA = [
  
];
function App() {

  const [expenseList, setExpenseList] = useState(DUMMY_DATA);
  const onAddExpense=(new_expense={})=>{
    setExpenseList((previous_expense_list)=>{
         return [new_expense,...previous_expense_list];
    })
  }
  return (
     
     <div >
     
        <NewExpenses onAddExpenses={onAddExpense}/>,
        <Expenses expenses = {expenseList}/> 

    </div>

    
  );
}

export default App;