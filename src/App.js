import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import "./App.css";
import FormPage from "./Pages/FormPage";
import ProfilePage from "./Pages/ProfilePage";
import ForgotPage from './Pages/ForgotPage';
import ExpensePage from "./Pages/ExpensePage";
import { useContext } from "react";
import ExpenseContext from "./Stores/Expense-context";

function App() {
  const expCtx = useContext(ExpenseContext);
  const isLoggedIn = expCtx.isLoggedIn;
  return (
    <Layout>
      <Switch>
        {isLoggedIn && (
        <Route path="/home">
          <HomePage />
        </Route>
        )}
        <Route path="/login" exact>
          <FormPage />
        </Route>
        <Route path="/add-exp" exact>
        {isLoggedIn && <ExpensePage />}
          {!isLoggedIn && <Redirect to ="/home" />}
          
        </Route>
        <Route path='/profile'>
          {isLoggedIn && <ProfilePage />}
          {!isLoggedIn && <Redirect to ="/home" />}
          
        </Route>
        <Route path = '/forgot' >
        {!isLoggedIn && <ForgotPage />}
          {isLoggedIn && <Redirect to ="/home" />}
          
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
