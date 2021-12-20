import React, { useContext, useRef } from "react";
import { useState } from "react";
import classes from "./Form.module.css";
import axios from "axios";
import { useHistory } from "react-router";
import ExpenseContext from "../../Stores/Expense-context";
import { Link } from "react-router-dom";

const Form = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const expCtx = useContext(ExpenseContext);

  const [isLogin, setIsLogin] = useState(true);

  const switchModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1BTMA7z79Hl-kprnDA2dYOj0ZeIHyiEs";
      axios
        .post(url, {
          email: enteredEmail,
          password: enteredPassword,

          returnSecureToken: true,
        })
        .then((data) => {
          console.log(data.data);
          expCtx.login(data.data.idToken, data.data.email);
          history.replace("/home");
        })
        .catch((err) => {
          alert("Authentical failed");
        });
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1BTMA7z79Hl-kprnDA2dYOj0ZeIHyiEs";
      axios
        .post(url, {
          email: enteredEmail,
          password: enteredPassword,

          returnSecureToken: true,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          axios
            .post(
              "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD1BTMA7z79Hl-kprnDA2dYOj0ZeIHyiEs",
              {
                enteredEmail,
                requestType: "VERIFY_EMAIL",
                idToken: res.data.idToken,
              }
            )
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              alert(err.message);
            });
        });
    }
  };
  return (
    <section className={classes.contain}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            required
            ref={emailInputRef}
            placeholder="email"
          />
        </div>
        <br></br>
        <div className={classes.control}>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            placeholder="password"
          />
        </div>
        <br></br>

        <div className={classes.toggle}>
          {!isLogin ? '' :  <p><Link to="/forgot">Forgot</Link></p> }
        
          {<button>{isLogin ? "Login" : "Create Account"}</button>}

          <button
            type="button"
            className={classes.actions}
            onClick={switchModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
