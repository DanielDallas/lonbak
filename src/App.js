import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import CreateAccount from './components/CreateAccount';
import Dashboard from './components/Dashboard';
import AddLoans from './components/AddLoans';
import LoanList from './components/LoanList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserLogin} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add-loan" component={AddLoans} />
        <Route path="/loan-list" component={LoanLists} />
      </Switch>
    </Router>
  );
};

export default App;
