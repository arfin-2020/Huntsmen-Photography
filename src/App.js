import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddReview from './components/AddReview/AddReview';
import AddService from './components/AddService/AddService';
import Buy from './components/Buy/Buy';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import PaymentGateway from './components/Payment/PaymentGateway';
import Shipment from './components/Shipment/Shipment';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
            <Switch>
               <Route exact path="/">
                <Home/>
               </Route>
               <Route exact path="/login">
                <Login/>
               </Route>
               <PrivateRoute path="/order">
                  <Dashboard/>
              </PrivateRoute>
               <Route exact path="/review">
                <AddReview/>
               </Route>
            <PrivateRoute path="/book/:id">
              <Buy/>
            </PrivateRoute>
               <Route exact path="/addService">
                <AddService/>
               </Route>
               <Route exact path="/payment">
                <PaymentGateway/>
               </Route>
               <Route exact path="/shipment">
                <Shipment/>
               </Route>
            </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
