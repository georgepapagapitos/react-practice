import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';


import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import Welcome from './components/Welcome/Welcome';
import FileUpload from './components/FileUpload/FileUpload';
import ComponentA from './components/ComponentA';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';


export default function App() {

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <Router>
      <Header />
      <Dashboard />
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/form" component={Form} />
        <Route path="/posts" render={(props) => (
          <Posts {...props} error={error} setError={setError} setSuccess={setSuccess} />
        )} />
        <Route path="/upload" component={FileUpload} />
        <Route path="/">
          <Welcome />
          <ComponentA />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};