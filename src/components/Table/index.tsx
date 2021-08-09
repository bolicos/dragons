import React, { useState, useCallback, useEffect } from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { FiEdit, FiTrash2, FiArrowRightCircle } from "react-icons/fi";
import { ImSortAlphaAsc, ImSortAlphaDesc } from "react-icons/im";
import Button from "@/components/Button";
import { TableProps } from "@/models/props";
import { Order } from "@/models/default";
import { ROUTES } from "@/helpers/system";
import { orderListByProperty } from "@/helpers/order";
import stylesheet from "./stylesheet.module.scss";

export const Table: React.FC<TableProps> = ({ contents, columns, onConfirmDeleteDragon, ...props }) => {
  const history = useHistory();
  const [order, setOrder] = useState<Order>(Order.ASCENDING);
  const [orderedContents, setOrderedContents] = useState<Array<any>>(contents);

  function redirect(route: string) {
    history.push(route);
  }

  function handleOrder() {
    order === Order.ASCENDING ? setOrder(Order.DECREASING) : setOrder(Order.ASCENDING);
  }

  const orderedContent = useCallback(() => {
    const ordered =
      order === Order.ASCENDING ? orderListByProperty(orderedContents, "name") : orderedContents.reverse();
    setOrderedContents(ordered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  useEffect(() => {
    orderedContent();
  }, [orderedContent]);

  return (
    <>
      <table className={clsx(stylesheet["table table-action"])}>
        <thead>
          <tr>
            {columns.map((column) =>
              column.title.toUpperCase() === "name".toUpperCase() ? (
                <th key={column.title}>
                  {order === Order.ASCENDING
                    ? [column.title, <ImSortAlphaDesc onClick={() => handleOrder()} />]
                    : [column.title, <ImSortAlphaAsc onClick={() => handleOrder()} />]}
                </th>
              ) : (
                <th>{column.title}</th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {orderedContents.map((element) => (
            <tr key={element.id}>
              <td>{element.name}</td>
              <td>{element.type}</td>
              <td>{element.createdAt}</td>
              <td>{element.histories}</td>
              <td>
                <FiTrash2 className={clsx(stylesheet["icon"])} onClick={() => onConfirmDeleteDragon(element.id)}>
                  Remover dragão
                </FiTrash2>
              </td>
              <td>
                <FiEdit className={clsx(stylesheet["icon"])} onClick={() => redirect(ROUTES.EDIT_DRAGON(element.id))}>
                  Editar dragão
                </FiEdit>
              </td>
              <td>
                <FiArrowRightCircle
                  className={clsx(stylesheet["icon"])}
                  onClick={() => redirect(ROUTES.DETAILS_DRAGON(element.id))}
                >
                  Ver detalhes
                </FiArrowRightCircle>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Button onClick={() => redirect(ROUTES.CREATE_DRAGON())}>Criar dragão</Button>
      </div>
    </>
  );
};

export default Table;
