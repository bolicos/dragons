import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import { DefaultState } from "@/models/default";
import Table from "@/components/Table";
import { DragonsAPI } from "@/services/dragons";
import { DragonModel } from "@/models/dragons";
import { GenericModel } from "@/models/props";
import stylesheet from "./stylesheet.module.scss";

interface State extends DefaultState {
  title: string;
  dragons: DragonModel[];
}

export const Dragons: React.FC = () => {
  const [state, setState] = useState<State>({
    pending: true,
    title: "Dragons",
    dragons: [],
  });

  const columns: GenericModel[] = [
    { title: "Name", function: "name" },
    { title: "Created At", function: "createdAt" },
    { title: "Histories", function: "histories" },
  ];

  const dragonsList = useCallback(() => {
    DragonsAPI.list()
      .then((response) => {
        const dragons: DragonModel[] = response.data;
        setState((old) => ({ ...old, dragons: dragons }));
      })
      .catch((exception) => console.log("API error: ", exception))
      .finally(() => setState((old) => ({ ...old, pending: false })));
  }, []);

  useEffect(() => {
    dragonsList();
  }, [dragonsList]);

  function deleteDragon(id: string) {
    DragonsAPI.delete(id)
      .then(() => setState((old) => ({ ...old })))
      .catch((exception) => console.log("API error: ", exception))
      .finally(() => {
        setState((old) => ({ ...old, pending: false }));
        window.location.reload();
      });
  }

  return state.pending === true ? (
    <Loader />
  ) : (
    <>
      <Title name={state.title} />
      <Table
        contents={state.dragons}
        columns={columns}
        className={clsx(stylesheet["dragons"])}
        onConfirmDeleteDragon={deleteDragon}
      />
    </>
  );
};

export default Dragons;
