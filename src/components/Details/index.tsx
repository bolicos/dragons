import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import Button from "@/components/Button";
import { DetailsProps } from "@/models/props";
import stylesheet from "./stylesheet.module.scss";
import { ROUTES } from "@/helpers/system";

export const Details: React.FC<DetailsProps> = ({ content, columns, ...props }) => {
  const history = useHistory();

  function redirect(route: string) {
    history.push(route);
  }

  return (
    <div className={clsx(stylesheet["div"])}>
      <tr>
        {columns.map((column) => (
          <th>{column.title}</th>
        ))}
      </tr>
      <tr>
        <td>{content.name}</td>
        <td>{content.type}</td>
        <td>{content.createdAt}</td>
        <td>{content.histories}</td>
      </tr>
      <Button onClick={() => redirect(ROUTES.DRAGONS_LIST())}>Back</Button>
    </div>
  );
};

export default Details;
