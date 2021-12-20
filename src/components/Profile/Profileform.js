import React, { useContext, useRef,} from "react";
import classes from "./Profileform.module.css";
import ExpenseContext from "../../Stores/Expense-context";
import axios from "axios";


const Profileform = () => {
  const nameRef = useRef();
  const profileRef = useRef();
  const expCtx = useContext(ExpenseContext);
  

  const submitHandler = (e) => {
    e.preventDefault();

    const Name = nameRef.current.value;
    const Profile = profileRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD1BTMA7z79Hl-kprnDA2dYOj0ZeIHyiEs",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: expCtx.token,
          displayName: Name,
          photoUrl: Profile,
          deleteAttribute: "Display_Name",
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
      axios.get('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD1BTMA7z79Hl-kprnDA2dYOj0ZeIHyiEs',{
       idToken: res.data.idToken,
      }).then(data => {
          console.log(data)
      })
      
    }).catch(err => {
        console.log(err);
    })

   

};
  return (
    <section className={classes.contain}>
      <header>
        <div>
          <h1>Contact Details</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label>Name:</label>
            <br></br>
            <input type="text" required ref={nameRef}></input>
          </div>
          <div className={classes.control}>
            <label>Profile Photo URL:</label>
            <br></br>
            <input type="text" required ref={profileRef}></input>
          </div>
          <div className={classes.action}>
            <button>Update</button>
          </div>
        </form>
      </header>
    </section>
  );
};

export default Profileform;
