import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import PublicRoutes from "@/helpers/routes/public.routes";
import PrivateRoutes from "@/helpers/routes/private.routes";
import { ROUTES } from "@/helpers/system";
import LocalStorage from "@/helpers/storage";
import { UserPrincipal } from "@/models/user";
import { useEffect } from "react";

const AuthProvider: React.FC = () => {
  const history = useHistory();
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [userPrincipal, setUserPrincipal] = useState<UserPrincipal>({
    isAuthenticated: false,
    name: "",
    roles: [],
    token: "",
  });

  function handleSignIn() {
    history.push(ROUTES.DRAGONS_LIST());
  }

  useEffect(() => {
    LocalStorage.SAVE("jwt", userPrincipal.token);
    if (isSignIn) {
      handleSignIn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignIn]);

  return userPrincipal.isAuthenticated ? (
    <>
      <PrivateRoutes user={userPrincipal} setUser={setUserPrincipal} setIsSignIn={setIsSignIn} />
    </>
  ) : (
    <>
      <PublicRoutes user={userPrincipal} setUser={setUserPrincipal} setIsSignIn={setIsSignIn} />
      <Redirect to={ROUTES.HOME()} />
    </>
  );
};

export default AuthProvider;
