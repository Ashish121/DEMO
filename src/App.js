import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import store from './store';
import { Provider } from 'react-redux';
import './firebase';
import LoginComponent from './Components/Login';
import DashboardComponent from './Components/Dashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      
        <Switch>
          <Route path="/" exact component={LoginComponent}></Route>
          <Route path="/dashboard" component={DashboardComponent}></Route>
        </Switch>
     </Provider>
  
  );
}


export default App;
