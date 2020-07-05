import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './components/identity/login';
import LoginLayout from './components/layout/LoginLayout';
import PanelLayout from './components/layout/PanelLayout';
import Dashboard from './components/panel/Dashboard';
import Register from './components/identity/register';
import ForgotPassword from './components/identity/forgot-password';

function App() {
  return (
    <Switch>
      <Route exact path={["/auth/login", "/auth/register", "/auth/forgot-password"]}>
        <LoginLayout>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/forgot-password" component={ForgotPassword} />
        </LoginLayout>
      </Route>
       <Route path={["/panel/dashboard"]}>
        <PanelLayout>
          <Route path="/panel/dashboard" component={Dashboard} />
        </PanelLayout>
      </Route>
    </Switch>
  );
}

export default App;
