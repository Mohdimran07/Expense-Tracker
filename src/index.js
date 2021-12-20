
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import  { ExpenseContextProvider } from "./Stores/Expense-context";

ReactDOM.render(
  <ExpenseContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ExpenseContextProvider>,
  document.getElementById("root")
);
