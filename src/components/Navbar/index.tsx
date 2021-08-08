import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@/helpers/system/constants-variables";
import { NavbarProps } from "#/src/models/attributes-props";
import { FaAlignRight } from "react-icons/fa";
import stylesheet from "./stylesheet.module.scss";

export const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);
  const pages = new Map<string, string>();

  pages.set(ROUTES.HOME(), "Home");
  pages.set(ROUTES.DRAGONS(), "Dragons");
  pages.set(ROUTES.SIGN_IN(), "SignIn");

  return (
    <nav className={stylesheet["nav"]}>
      <button onClick={() => setOpen(!open)}>
        <FaAlignRight />
      </button>
      {Array.from(pages.keys()).map((key) => {
        return (
          <NavLink
            to={{
              pathname: key,
              state: { fromDashboard: true },
            }}
            className={stylesheet["nav-link"]}
          >
            {pages.get(key)}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;

/* <NavLink
to={{
  pathname: ROUTES.HOME(),
  state: { fromDashboard: true },
}}
className={stylesheet["nav-link"]}
>
Home
</NavLink>

<NavLink
to={{
  pathname: ROUTES.DRAGONS(),
  state: { fromDashboard: true },
}}
className={stylesheet["nav-link"]}
>
Dragons
</NavLink>

<NavLink
to={{
  pathname: ROUTES.SIGN_IN(),
  state: { fromDashboard: true },
}}
className={stylesheet["nav-link"]}
>
SignIn
</NavLink> */

/* const links = () => {

  Array.from(pages.keys()).map(key => {
    return (
<NavLink
        to={{
          pathname: key,
          state: { fromDashboard: true },
        }}
        className={stylesheet["nav-link"]}
      >
        {pages.get(key)}
      </NavLink>
    );
  });

  pages.entries().((title: string, route: string) => {
    return (
      <NavLink
        to={{
          pathname: route,
          state: { fromDashboard: true },
        }}
        className={stylesheet["nav-link"]}
      >
        {title}
      </NavLink>
    );
  })

} */
