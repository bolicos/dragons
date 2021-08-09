import React, { useState } from "react";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import Create from "@/components/Create";
import { DefaultState } from "@/models/default";
import { DragonsAPI } from "@/services/dragons";
import { DragonModel } from "@/models/dragons";
import { GenericModel } from "@/models/props";

interface State extends DefaultState {
  title: string;
  dragon: DragonModel;
}

export const CreateDragon: React.FC = () => {
  const [state, setState] = useState<State>({
    pending: false,
    title: "Create dragon",
    dragon: {} as DragonModel,
  });

  const columns: GenericModel[] = [
    { title: "Name", function: "name" },
    { title: "Type", function: "type" },
    { title: "Created At", function: "createdAt" },
    { title: "Histories", function: "histories" },
  ];

  async function createDragon(body: DragonModel) {
    DragonsAPI.create(body)
      .then(() => setState((old) => ({ ...old })))
      .catch((exception) => console.log("API error: ", exception))
      .finally(() => setState((old) => ({ ...old, pending: false })));
  }

  return state.pending === true ? (
    <Loader />
  ) : (
    <>
      <Title name={state.title} />
      <Create content={state.dragon} columns={columns} onConfirmCreateDragon={createDragon} />
    </>
  );
};

export default CreateDragon;
