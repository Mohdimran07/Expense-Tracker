import axios from "axios";
import React from "react";
import { useRef } from "react";

import classes from "./AddExpense.module.css";
import Card from "./Card";

const AddExpense = (props) => {
  const MoneyInputRef = useRef();
  const DesInputRef = useRef();
  const CatInputRef = useRef();

  const addListHandler = (event) => {
    event.preventDefault();
    const MoneyVal = MoneyInputRef.current.value;
    const Descrpt = DesInputRef.current.value;
    const Items = CatInputRef.current.value;

    let String = localStorage.getItem("UserId");
    console.log(String);
    let email = String.replace(/[&,+()$~%@.'":*?<>{}]/g, "");

    axios
      .post(
        `https://crudcrud.com/api/7aaa0f97325844ba9440ac9f956638bb/ExpenseData${email}`,
        {
          Money: MoneyVal,
          Descript: Descrpt,
          Category: Items,
        }
      )
      .then((res) => {
        console.log(res);
      });

    MoneyInputRef.current.value = "";
    DesInputRef.current.value = "";
    CatInputRef.current.value = "";
  };

  return (
    <Card className={classes.input}>
      <div className={classes.ExpContainer}>
        <div>
          <h1>Add Expenses</h1>
        </div>
      </div>
      <form onSubmit={addListHandler}>
        <label>Money:</label>
        <input type="number" ref={MoneyInputRef} required></input>
        <label>Description:</label>
        <input type="text" ref={DesInputRef} required></input>
        <label>Category:</label>
        <input type="text" ref={CatInputRef} required />

        <div className={classes.actions}>
          <button>submit</button>
        </div>
      </form>
    </Card>
  );
};

export default AddExpense;
