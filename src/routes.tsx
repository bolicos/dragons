import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "@/helpers/system";

import HomePage from "@/pages/Home";
import SignInPage from "@/pages/SignIn";
import DragonsPage from "@/pages/Dragons";
import DetailsDragonPage from "@/pages/DetailsDragon";
import EditDragonPage from "@/pages/EditDragon";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.HOME()} component={HomePage} />
      <Route exact path={ROUTES.DRAGONS()} component={DragonsPage} />
      <Route exact path={ROUTES.DETAILS_DRAGON(":id")} component={DetailsDragonPage} />
      <Route exact path={ROUTES.EDIT_DRAGON(":id")} component={EditDragonPage} />
      <Route exact path={ROUTES.SIGN_IN()} component={SignInPage} />
      <Route exact path={ROUTES.NOT_FOUND()} component={HomePage} />
      <Route exact path={ROUTES.ERROR()} component={HomePage} />
      <Route path={ROUTES.ALL()} component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
