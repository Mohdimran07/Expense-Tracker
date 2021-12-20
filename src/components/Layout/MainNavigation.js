import { useContext } from "react";
import { Link } from "react-router-dom";
import ExpenseContext from "../../Stores/Expense-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const expCtx = useContext(ExpenseContext);
  const isLoggedIn = expCtx.isLoggedIn;
  const logoutHandler = () => {
    expCtx.logout();
  }
  return (
    <header className={classes.header}>
      <Link to="/home">
        <div className={classes.logo}>Expense Tracker</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
             <li>
               <button>
             <Link to="/login">Login</Link>
             </button>
           </li>
          )}
          {isLoggedIn && (
            <li>
              <button>
                <Link to="/add-exp">Add Expense</Link>
              </button>
            </li>
          )}
         
          {isLoggedIn && (
            <li>
              <button>
            <Link to="/profile">Update Profile</Link>
            </button>
          </li>
          )}
          
           {isLoggedIn && (
            <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
           )} 
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
