import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './components/identity/login';
import LoginLayout from './components/layout/LoginLayout';
import PanelLayout from './components/layout/PanelLayout';
import Dashboard from './components/panel/Dashboard';

function App() {
  return (
    <Switch>
      <Route exact path={["/auth/login"]}>
        <LoginLayout>
          <Route path="/auth/login" component={Login} />
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
