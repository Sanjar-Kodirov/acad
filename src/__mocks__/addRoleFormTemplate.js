import { v4 as uuid } from "uuid";

export const addRoleFormTemplate = {
  title: "Add Person",
  fields: [
    {
      id: uuid(),
      name: "name",
      label: "Name",
      required: true,
      type: "text",
      value: "",
    },
    {
      id: uuid(),
      name: "password",
      label: "Password",
      required: true,
      type: "password",
      value: "",
    },
  ],
};
export const initialValues = {
  name: "",
  number: "",
};
