import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import { DefaultState } from "@/models/default";
import Table from "@/components/Table";
import Container from "@/components/Container";
import { DragonsAPI } from "@/services/dragons";
import { DragonsType } from "@/models/dragons";
import stylesheet from "./stylesheet.module.scss";
import { TableColumn } from "@/models/props";

interface State extends DefaultState {
  title: string;
  dragons: DragonsType[];
}

export const Dragons: React.FC = () => {
  const [state, setState] = useState<State>({
    pending: true,
    title: "Dragons",
    dragons: [],
  });

  const columns: TableColumn[] = [
    { title: "Name", function: "name" },
    { title: "Created At", function: "createdAt" },
    { title: "Histories", function: "histories" },
  ];

  const dragonsList = useCallback(() => {
    DragonsAPI.list()
      .then((response) => {
        const dragons: DragonsType[] = response.data;
        setState((old) => ({ ...old, dragons: dragons }));
      })
      .catch((exception) => console.log("API error: ", exception))
      .finally(() => setState((old) => ({ ...old, pending: false })));
  }, []);

  useEffect(() => {
    dragonsList();
  }, [dragonsList]);

  return state.pending === true ? (
    <Loader />
  ) : (
    <Container>
      <Title name={state.title} />
      <Table contents={state.dragons} columns={columns} className={clsx(stylesheet["dragons"])} />
    </Container>
  );
};

export default Dragons;
