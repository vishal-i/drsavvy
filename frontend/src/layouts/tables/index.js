// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// import usersTableData from "layouts/tables/data/usersTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
// import patientTableData from "layouts/tables/data/patientTableData";

import { useEffect, useState } from "react";
import { getAllUsers, clearErrors } from "Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import Test from "Component/Test/test";
import MDButton from "components/MDButton";

function Tables() {
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  // const { columns: tCol, rows:tRow } = patientTableData();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, users } = useSelector((state) => state.allUsers);
  const hospitalID = useSelector((state) => state.user.user.hospitalID);

  function Data() {
    const Author = ({ name, email }) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        {/* <MDAvatar src={image} name={name} size="sm" /> */}
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {name}
          </MDTypography>
          <MDTypography variant="caption">{email}</MDTypography>
        </MDBox>
      </MDBox>
    );

    const Job = ({ title, description }) => (
      <MDBox lineHeight={1} textAlign="left">
        <MDTypography
          display="block"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {title}
        </MDTypography>
        <MDTypography variant="caption">{description}</MDTypography>
      </MDBox>
    );

    return {
      columns: [
        { Header: "user", accessor: "user", width: "35%", align: "left" },
        { Header: "designation", accessor: "role", align: "left" },
        { Header: "Mobile no.", accessor: "mobile", align: "center" },
        { Header: "status", accessor: "status", align: "center" },
        { Header: "view", accessor: "view", align: "center" },
        { Header: "edit", accessor: "edit", align: "center" },
      ],

      rows: users.map((u) => {
        return {
          user: <Author name={u.name} email={u.email} />,
          role: <Job title={u.role} />,
          mobile: <Job title={u.phone} />,
          status: (
            <MDBox ml={-1}>
              {u.isActive ? (
                <MDBadge
                  badgeContent="active"
                  color="success"
                  variant="gradient"
                  size="sm"
                />
              ) : (
                <MDBadge
                  badgeContent="inactive"
                  color="error"
                  variant="gradient"
                  size="sm"
                />
              )}
            </MDBox>
          ),
          view: (
            <MDButton onClick={() => navigate("/allusers/" + u._id)}>
              View
            </MDButton>
          ),
          edit: (
            <MDButton
              onClick={() => navigate("/allusers/" + u._id + "/update")}
            >
              Edit
            </MDButton>
          ),
        };
      }),
    };
  }

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch(clearErrors());
    }

    dispatch(getAllUsers(hospitalID));
  }, [dispatch, error]);

  if (users) {
    const { columns, rows } = Data();
    // console.log(users);

    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                  display="flex"
                  justifyContent="space-between"
                >
                  <MDTypography variant="h6" color="white">
                    Users
                  </MDTypography>

                  <MDButton onClick={() => navigate("/allusers/createuser")}>
                    Create user
                  </MDButton>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={true}
                    showTotalEntries={false}
                    noEndBorder={true}
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
    );
  } else {
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <h1>Loading</h1>
      </DashboardLayout>
    );
  }
}

export default Tables;
