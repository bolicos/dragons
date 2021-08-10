import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "@/helpers/system";
import { UserProps } from "@/models/user";

import HomePage from "@/pages/Home";
import SignInPage from "@/pages/SignIn";

const PrivateRoutes: React.FC<UserProps> = ({ user, setUser, setIsSignIn }) => (
  <>
    <Route
      exact
      path={ROUTES.SIGN_IN()}
      render={() => <SignInPage setUser={setUser} user={user} setIsSignIn={setIsSignIn} />}
    />
    <Route exact path={ROUTES.HOME()} component={HomePage} />
    <Route exact path={ROUTES.NOT_FOUND()} component={HomePage} />
    <Route exact path={ROUTES.ERROR()} component={HomePage} />
  </>
);

export default PrivateRoutes;
