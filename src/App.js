import React, { useEffect } from "react";
import Header from "./components/Header";
import Mangement from "./components/Mangement";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Add from "./Add";
import { fetchMangement } from "./components/services/Actions/managementAction";
import { useDispatch } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMangement());
  }, []);

  return (
    <div className="bg-cover">
      <HashRouter>
        <Header />
        <Switch>
          {/* <Route path="/" exact component={Mangement} />
          <Route path="/add" component={Add} /> */}
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" exact>
            <Protected Cmp={Mangement} />
          </Route>
          <Route path="/add" exact>
            <Protected Cmp={Add} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
