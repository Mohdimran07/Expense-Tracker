import classes from './StartingPageContent.module.css';
import { useContext } from "react";
import ExpenseContext from "../../Stores/Expense-context";

const StartingPageContent = () => {
  const expCtx = useContext(ExpenseContext);
  const isLoggedIn = expCtx.isLoggedIn;
  return (
    
    <section className={classes.starting}>
      {isLoggedIn && (
      <h1>Welcome to Expense Tracker</h1>
      )}
    </section>
   
  );
};

export default StartingPageContent;