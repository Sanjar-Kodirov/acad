import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

import * as Yup from "yup";

import { useFormik } from "formik";

export const SingleForm = (props) => {
  const { template } = props;
  const { fields } = template;

  // const tet = template.fields.map((field) => {
  //   return field.name;
  // });

  const formik = useFormik({
    initialValues: props.initialValues,
    // validationSchema: Yup.object({
    //   email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    //   password: Yup.string().max(255).required("Password is required"),
    // }),
    onSubmit: () => {
      Router.push("/").catch(console.error);
    },
  });
  console.log(props.initialValues);

  console.log(formik.values);

  const renderField = (fields) => {
    return fields.map((field) => {
      const { type, label, placeholder, required, name } = field;
      return (
        <Box key={name} sx={{ mb: 3 }}>
          <TextField
            fullWidth
            onChange={formik.handleChange}
            label={label}
            name={name}
            placeholder={placeholder}
            required={required}
            type={type}
            variant="outlined"
          />
        </Box>
      );
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {renderField(fields)}
      <Button color="primary" variant="contained">
        Add Customers
      </Button>
    </Box>
  );
};
