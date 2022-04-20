// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/user_profiles/components/Header";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetails, clearErrors } from "Actions/userActions";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.userDetails);
  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch(clearErrors());
    }

    if (user) {
      console.log(user);
    }

    dispatch(getUserDetails(id));
  }, [dispatch, error]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Header>
          <MDBox mt={5} mb={3}>
            <Grid container spacing={1}>
              {/* <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid> */}
              <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
                <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
                <ProfileInfoCard
                  title="profile information"
                  info={{
                    "Reg. No": user.regNo,
                    fullName: user.name,
                    mobile:
                      user.phone + "  &  " + (user.phone2 ? user.phone2 : " "),
                    primaryEmail: user.email,
                    secondaryEmail: user.email2 ? user.email2 : "NA",
                    Address: user.address,
                    Role: user.role,
                    Age: user.age,
                    Gender: user.gender,
                    "Adhar no.": user.adhar,
                    "Pan no.": user.pan,
                  }}
                  action={{
                    route: "/allusers/" + user._id + "/update",
                    tooltip: "Edit Profile",
                  }}
                  shadow={false}
                />
                {/* <Divider orientation="vertical" sx={{ mx: 0 }} /> */}
              </Grid>
            </Grid>
          </MDBox>
        </Header>
      )}

      <Footer />
    </DashboardLayout>
  );
}

export default UserDetails;
