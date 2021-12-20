import React from "react";
import Card from "../AddExpense/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./ExpenseList.module.css";

const ExpenseList = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let String = localStorage.getItem("UserId");

    let email = String.replace(/[&,+()$~%@.'":*?<>{}]/g, "");

    axios
      .get(
        `https://crudcrud.com/api/7aaa0f97325844ba9440ac9f956638bb/ExpenseData${email}`
      )
      .then((response) => {
        console.log(response);
        setCartItems(response.data);
      });
  }, []);

  return (
    <Card className={classes.users}>
      <ul>
        {Object.keys(cartItems).map((key) => (
          <li key={cartItems[key].id}>
            {cartItems[key]["Money"]} {"->"} {cartItems[key].Descript}
            {" -> "}
            {cartItems[key].Category}{" "}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ExpenseList;
