import axios from "axios";
import React, { useRef } from "react";
import classes from './Forgot.module.css';

const Forgot = () => {
    const emailInputRef = useRef();

    const submitHandler = (e) => {
      e.preventDefault();
      const enteredEmail = emailInputRef.current.value;

    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD1BTMA7z79Hl-kprnDA2dYOj0ZeIHyiEs', {
        email: enteredEmail,
        requestType: "PASSWORD_RESET"
    }).then(data => {
        console.log(data)
    })
    }
    return (
        <section className={classes.contain}>
       
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
          <div className={classes.toggle}>
          <button >Submit</button>
          </div>
          </form>
          </section>
    )
};

export default Forgot;
