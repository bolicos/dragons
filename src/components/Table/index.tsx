import React, { useState, useCallback, useEffect } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { ImSortAlphaAsc, ImSortAlphaDesc } from "react-icons/im";
import { TableProps } from "@/models/props";
import { Order } from "@/models/default";
import { ROUTES } from "@/helpers/system";
import { orderListByProperty } from "@/helpers/order";
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

  function handleOrder() {
    order === Order.ASCENDING
      ? setOrder(Order.DECREASING)
      : setOrder(Order.ASCENDING);
  }

  const orderedContent = useCallback(() => {
    order === Order.ASCENDING
      ? orderListByProperty(contents, "name")
      : contents.reverse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  useEffect(() => {
    orderListByProperty(contents, "name");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    orderedContent();
  }, [orderedContent]);

  return (
    <table className={clsx(stylesheet["table table-action"])}>
      <tr>
        {columns.map((column) =>
          column.title.toUpperCase() === "name".toUpperCase() ? (
            <th>
              {order === Order.ASCENDING
                ? [
                    column.title,
                    <ImSortAlphaDesc onClick={() => handleOrder()} />,
                  ]
                : [
                    column.title,
                    <ImSortAlphaAsc onClick={() => handleOrder()} />,
                  ]}
            </th>
          ) : (
            <th>{column.title}</th>
          )
        )}
      </tr>

      {contents.map((element) => (
        <tr>
          <td>{element.name}</td>
          <td>{element.type}</td>
          <td>{element.createdAt}</td>
          <td>{element.histories}</td>
          <td>
            <Button onClick={() => redirect(ROUTES.DETAILS_DRAGON(element.id))}>
              Ver detalhes
            </Button>
          </td>
          <td>
            <Button onClick={() => onConfirmDeleteDragon(element.id)}>
              Remover dragão
            </Button>
          </td>
          <td>
            <Button onClick={() => redirect(ROUTES.EDIT_DRAGON(element.id))}>
              Editar dragão
            </Button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
