import React from 'react';
// import Button from './components/Button';
// import Input from './components/Input';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../views/Login';
// import Header from "./components/Header";
import Home from '../views/Home';
// import Footer from "./components/Footer";
import Dashboard from '../views/Dashboard';
import PrivteRoute from './Private';
import Header from '../components/Header';

export default props => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivteRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};