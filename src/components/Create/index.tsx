import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Button from "@/components/Button";
import { CreateProps } from "@/models/props";
import { ROUTES } from "@/helpers/system";
import { DragonModel } from "#/src/models/dragons";

export const Create: React.FC<CreateProps> = ({ content, columns, onConfirmCreateDragon, ...props }) => {
  const history = useHistory();

  const { handleBlur, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      createdAt: content.createdAt,
      histories: content.histories,
      name: content.name,
      type: content.type,
      id: content.id,
    },
    onSubmit: (dragon: DragonModel) => {
      onConfirmCreateDragon(dragon);
    },
  });

  function redirect(route: string) {
    history.push(route);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="createdAt">CreatedAt</label>
      <input
        required
        id="createdAt"
        name="createdAt"
        value={values.createdAt}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label htmlFor="histories">Histories</label>
      <input required id="histories" name="histories" value={values.histories} onChange={handleChange} />
      <label htmlFor="name">Name</label>
      <input required id="name" name="name" value={values.name} onChange={handleChange} />
      <label htmlFor="type">Type</label>
      <input required id="type" name="type" value={values.type} onChange={handleChange} />
      <Button onClick={() => redirect(ROUTES.DRAGONS_LIST())}>Back</Button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;
