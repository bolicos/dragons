import React, { useState } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { TableProps } from "@/models/props";
import { Order } from "@/models/default";
import { ROUTES } from "@/helpers/system";
import Button from "@/components/Button";
import stylesheet from "./stylesheet.module.scss";

export const Table: React.FC<TableProps> = ({
  contents,
  columns,
  onConfirmDeleteDragon,
  ...props
}) => {
  const history = useHistory();
  const [order, setOrder] = useState<Order>(Order.ASCENDING);

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
            <Button
              onClick={() => redirect(ROUTES.DRAGONS_DETAILS(element.id))}
            >
              Ver detalhes
            </Button>
          </td>
          <td>
            <Button onClick={() => onConfirmDeleteDragon(element.id)}>
              Remover dragão
            </Button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
