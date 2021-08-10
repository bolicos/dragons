import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import AuthProvider from "@/helpers/routes";

const ManageRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider />
      </Switch>
    </BrowserRouter>
  );
};

export default ManageRoutes;
