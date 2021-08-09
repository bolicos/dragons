import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import Button from "@/components/Button";
import { DetailsProps } from "@/models/props";
import stylesheet from "./stylesheet.module.scss";
import { ROUTES } from "@/helpers/system";


export const Details: React.FC<DetailsProps> = ({
  content,
  details,
  ...props
}) => {
  const history = useHistory();

  function redirect(route: string) {
    history.push(route);
  }

  return (
    <div className={clsx(stylesheet["div"])}>
      <tr>
        {details.map((detail) => (
          <th>{detail.title}</th>
        ))}
      </tr>
      <tr>
        <td>{content.name}</td>
        <td>{content.type}</td>
        <td>{content.createdAt}</td>
        <td>{content.histories}</td>
      </tr>
      <Button onClick={() => redirect(ROUTES.DRAGONS())}>Voltar</Button>
    </div>
  );
};

export default Details;
