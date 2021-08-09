import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
import { DefaultState } from "@/models/default";
import { DragonsAPI } from "@/services/dragons";
import { DragonModel } from "@/models/dragons";
import { GenericModel } from "@/models/props";
import Details from "@/components/Details";

interface State extends DefaultState {
  title: string;
  dragon: DragonModel;
}

export const DetailsDragon: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [state, setState] = useState<State>({
    pending: true,
    title: "Details dragon",
    dragon: {} as DragonModel,
  });

  const columns: GenericModel[] = [
    { title: "Name", function: "name" },
    { title: "Type", function: "type" },
    { title: "Created At", function: "createdAt" },
    { title: "Histories", function: "histories" },
  ];

  const detailsDragon = useCallback(() => {
    DragonsAPI.details(id)
      .then((response) => {
        const dragon: DragonModel = response.data;
        setState((old) => ({ ...old, dragon: dragon }));
      })
      .catch((exception) => console.log("API error: ", exception))
      .finally(() => setState((old) => ({ ...old, pending: false })));
  }, [id]);

  useEffect(() => {
    detailsDragon();
  }, [detailsDragon]);

  return state.pending === true ? (
    <Loader />
  ) : (
    <>
      <Title name={state.title} />
      <Details content={state.dragon} columns={columns} />
    </>
  );
};

export default DetailsDragon;
