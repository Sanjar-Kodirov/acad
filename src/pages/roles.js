import { DashboardLayout } from "../components/dashboard-layout";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { RolesListResult } from "../components/roles/roles-list-result";
import { roles } from "../__mocks__/roles";
import Head from "next/head";
import { Box, Container } from "@mui/material";
// modal
import { addRoleFormTemplate, initialValues } from "../__mocks__/addRoleFormTemplate";
const Page = () => {
  return (
    <>
      <Head>
        <title>Roles</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar
            formData={addRoleFormTemplate}
            initialValues={initialValues}
            componentName="Managers"
            btnTitle="Add person"
          />
          <Box sx={{ mt: 3 }}>
            <RolesListResult customers={roles} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
