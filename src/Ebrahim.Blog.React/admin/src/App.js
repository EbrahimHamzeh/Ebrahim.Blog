import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './components/identity/login';
import LoginLayout from './components/layout/LoginLayout';
import PanelLayout from './components/layout/PanelLayout';
import Dashboard from './components/panel/Dashboard';
import Register from './components/identity/register';
import ForgotPassword from './components/identity/forgot-password';
import NotFound from './components/errors/notFound';
import Users from './components/panel/User/Users';
import ProtectedRoute from './components/commen/protectedRoute';

function App() {
  return (
    <Switch>
      <Route path={["/auth/login", "/auth/register", "/auth/forgot-password"]}>
        <LoginLayout>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/forgot-password" component={ForgotPassword} />
        </LoginLayout>
      </Route>
      <Route exact path={["/admin", "/admin/dashboard", "/admin/users"]}>
        <PanelLayout>
          <ProtectedRoute exact path={["/admin", "/admin/dashboard"]} component={Dashboard} />
          <ProtectedRoute path={"/admin/users"} component={Users} />
        </PanelLayout>
      </Route>

      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default App;
