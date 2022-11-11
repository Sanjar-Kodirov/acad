import { v4 as uuid } from "uuid";

export const addPersonFormTemplate = {
  title: "Add Person",
  fields: [
    {
      id: uuid(),
      name: "firstName",
      label: "Name",
      required: true,
      type: "text",
      value: "",
    },
    {
      id: uuid(),
      name: "lastName",
      label: "Email",
      required: true,
      type: "text",
      value: "",
    },
    {
      id: uuid(),
      name: "parentName",
      label: "Fathers Name",
      required: true,
      type: "text",
      value: "",
    },
    {
      id: uuid(),
      name: "phoneNumber",
      label: "Phone Number",
      required: true,
      type: "number",
      value: "",
    },
  ],
};

export const initialValues = {
  firstName: "",
  lastName: "",
  parentName: "",
  phoneNumber: "",
};
