import React from "react";
import clsx from "clsx";
import { TableProps } from "@/models/props";
import stylesheet from "./stylesheet.module.scss";


export const Table: React.FC<TableProps> = ({
  contents,
  columns,
  ...props
}) => {

  //const matriz: () => new Map<number, T>

  return (
    <table className={clsx(stylesheet["table"])}>
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
    </table>
  );
};

export default Table;
