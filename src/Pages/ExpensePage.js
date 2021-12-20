import React, {  Fragment } from "react";
import AddExpense from "../components/AddExpense/AddExpense";
import ExpenseList from "../components/AddExpense/ExpenseList";

const ExpensePage = () => {
  
  return (
    <Fragment>
      <AddExpense  />
      <ExpenseList  />
    </Fragment>
  );
};

export default ExpensePage;


