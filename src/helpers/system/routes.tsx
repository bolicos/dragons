import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES, WEB_APP } from "./constants-variables";

// Components to Routes
import HomePage from "@/pages/Home";
import SignInPage from "@/pages/SignIn";

export const Routes: React.FC = () => (
  <BrowserRouter basename={WEB_APP.BASE_URL}>
    <Switch>
      <Route exact path={ROUTES.HOME()} component={HomePage} />
      <Route exact path={ROUTES.SIGN_IN()} component={SignInPage} />
      <Route exact path={ROUTES.NOT_FOUND()} component={HomePage} />
      <Route exact path={ROUTES.ERROR()} component={HomePage} />
      <Route path={ROUTES.ALL()} component={HomePage} />
    </Switch>
  </BrowserRouter>
);
