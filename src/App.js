import "./App.css";
import React, { useState, Component } from 'react'
import HomePage from "./containers/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import Dashboard from "./components/dashboard/Dashboard";
import axios from 'axios'

class App extends Component {

  state = {}


  componentDidMount = () => {
       
      axios.get('user').then(
          res => {
              user: this.setState(res.data)
          },
          err => {
              console.log(err)
          }
      )
  }

render() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/customer/access/:action"
            exact component={CustomerAccessPage}
          />
          <Route path="/components/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
