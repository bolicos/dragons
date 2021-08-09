import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { TableProps } from "@/models/props";
import { ROUTES } from "@/helpers/system";
import Button from "@/components/Button";
import stylesheet from "./stylesheet.module.scss";


export const Table: React.FC<TableProps> = ({
  contents,
  columns,
  ...props
}) => {
  const history = useHistory();
  //const matriz: () => new Map<number, T>

  function redirect(route: string) {
    history.push(route);
  }

  return (
    <table className={clsx(stylesheet["table table-action"])}>
    <tr>
      {columns.map((column) => (
        <th>{column.title}</th>
      ))}
    </tr>

    {contents.map((element) => (
      <tr>
        <td>{element.name}</td>
        <td>{element.type}</td>
        <td>{element.createdAt}</td>
        <td>{element.histories}</td>
        <td>
          <Button onClick={() => redirect(ROUTES.DRAGONS_DETAILS(element.id))}>Ver detalhes</Button>
        </td>
      </tr>
    ))}
  </table>

/*     <table className={clsx(stylesheet["table"])}>
      <thead>
        <tr>
          {columns.map((column) => (
            <td>{column.title}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {contents.map((element) => (
          <tr>
            <td>{element.name}</td>
            <td>{element.createdAt}</td>
            <td>{element.histories}</td>
          </tr>
        ))}
      </tbody>
    </table> */
  );
};

export default Table;
