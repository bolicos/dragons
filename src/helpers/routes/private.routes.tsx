import React from "react";
import { Route, useHistory } from "react-router-dom";
import { ROUTES } from "@/helpers/system";
import PublicRoutes from "@/helpers/routes/public.routes";
import { UserProps, Roles } from "@/models/user";

import DragonsListPage from "@/pages/DragonsList";
import DetailsDragonPage from "@/pages/DetailsDragon";
import EditDragonPage from "@/pages/EditDragon";
import CreateDragonPage from "@/pages/CreateDragon";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

interface RoutesProps extends React.ComponentProps<typeof Route> {
  roles: Array<Roles>;
}

const PrivateRoutes: React.FC<UserProps> = ({ user, setUser, setIsSignIn }) => {
  const [unauthorized, setUnauthorized] = useState(false);
  const history = useHistory();

  function FactoryRoute(props: RoutesProps) {
    if (props.path === history.location.pathname && !hasRoles(props.roles)) {
      setUnauthorized(true);
    }
    return <Route {...props} />;
  }

  function hasRoles(roles: Array<Roles>) {
    return roles.map((role) => user.roles.includes(role)).includes(false) ? false : true;
  }

  const Unauthorized = useCallback(() => {
    if (unauthorized) {
      history.push(ROUTES.DRAGONS_LIST());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unauthorized]);

  useEffect(() => {
    Unauthorized();
  }, [Unauthorized]);

  return (
    <>
      <PublicRoutes setUser={setUser} user={user} setIsSignIn={setIsSignIn} />
      <FactoryRoute exact path={ROUTES.DRAGONS_LIST()} component={DragonsListPage} roles={[Roles.VIEW, Roles.DELETE]} />
      <FactoryRoute exact path={ROUTES.DETAILS_DRAGON(":id")} component={DetailsDragonPage} roles={[Roles.VIEW]} />
      <FactoryRoute exact path={ROUTES.EDIT_DRAGON(":id")} component={EditDragonPage} roles={[Roles.EDIT]} />
      <FactoryRoute exact path={ROUTES.CREATE_DRAGON()} component={CreateDragonPage} roles={[Roles.NEW]} />
    </>
  );
};

export default PrivateRoutes;
