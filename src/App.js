import React, { useEffect } from "react";
import Header from "./components/Header";
import Mangement from "./components/Mangement";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Modification from "./Modification";
import Add from "./Add";
import { fetchMangement } from "./components/services/Actions/managementAction";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMangement());
  }, []);

  return (
    <div className="bg-cover">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" exact>
            <Protected Cmp={Mangement} />
          </Route>
          <Route path="/add" exact>
            <Protected Cmp={Add} />
          </Route>
          <Route path="/modification" exact>
            <Protected Cmp={Modification} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
