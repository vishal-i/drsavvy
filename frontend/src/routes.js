import Dashboard from "./layouts/dashboard";
import Tables from "./layouts/tables";
import Patients from "./layouts/patients";
import Profile from "./layouts/profile";
import Hospitals from "layouts/Hospitals/hospital";
import UserDetails from "layouts/user_profiles";
import PatientDetails from "layouts/patient_profiles";
import Signup from "layouts/create_user/create_user";
import CreateHospitals from "layouts/create_hospital/create_hospital";
import UpdateUser from "layouts/update_user/updateUser";
import UpdateAdmin from "layouts/update_admin_profile/updateAdmin";
import UpdateHospital from "layouts/update_hospital/updateHospital";
import PatientsAppointments from "layouts/appointments_patient/patients_appointments";
import UpdatePatients from "layouts/update_patients/update_patient";

// @mui icons
import Icon from "@mui/material/Icon";
import HospitalDetails from "layouts/Hospital_Details/hospital_details";
import Patientsform from "layouts/create_patients/createPatients";
import Appointment from "layouts/appointments/appointment";
import All_appointmets from "layouts/all_appointments/all_appointments";
import AppointmentDetails from "layouts/AppointmentView/apppointmentView";
import AppointmentUpdate from "layouts/AppointmentEdit/appointmentEdit";
import Prescription from "layouts/Prescription/prescription";
import Pdf from "layouts/Prescription/prescriptionpdf";
import Support from "Pages/Support/support";

export const routesSuperAdmin = [
  {
    type: "collapse",
    name: "Hospitals",
    key: "Hospitals",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/hospitals",
    component: <Hospitals />,
  },
  {
    name: "Hospital details",
    key: "hospital_details",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/hospitals/:id",
    component: <HospitalDetails />,
  },
  {
    name: "Hospital details",
    key: "hospital_details",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/hospitals/:id/update",
    component: <UpdateHospital />,
  },
  {
    name: "Create Hospital",
    key: "create_hospital",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/hospitals/create",
    component: <CreateHospitals />,
  },

  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },

  {
    name: "suppport",
    key: "update_user",
    route: "/support",
    icon: <Icon fontSize="small">table_view</Icon>,
    component: <Support />,
  },
];

export const routesAdmin = [
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile/update",
    component: <UpdateAdmin />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Users",
    key: "allusers",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/allusers",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Patients",
    key: "patients",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/patients",
    component: <Patients />,
  },
  {
    name: "Patients",
    key: "patients",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/patients/create",
    component: <Patientsform />,
  },
  {
    name: "user details",
    key: "user_details",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/allusers/:id",
    component: <UserDetails />,
  },
  {
    name: "patient details",
    key: "patient_details",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id",
    component: <PatientDetails />,
  },
  {
    name: "appointments",
    key: "appointments",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment",
    component: <Appointment />,
  },
  {
    name: "Appointment History",
    key: "appointment_history",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment_details",
    component: <PatientsAppointments />,
  },
  {
    name: "Appointment",
    key: "appointment",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment_details/:appointmentid",
    component: <AppointmentDetails />,
  },
  {
    name: "Appointment update",
    key: "appointment_update",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment_details/:appointmentid/update",
    component: <AppointmentUpdate />,
  },
  {
    name: "Prescription",
    key: "prescription",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment_details/:appointmentid/prescription",
    component: <Prescription />,
  },
  {
    name: "Prescription pdf",
    key: "prescription_pdf",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment_details/:appointmentid/pdf",
    component: <Pdf />,
  },
  {
    name: "Update Patients",
    key: "update",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/update",
    component: <UpdatePatients />,
  },
  {
    name: "create user",
    key: "create_user",
    route: "allusers/createuser",
    icon: <Icon fontSize="small">table_view</Icon>,
    component: <Signup />,
  },
  {
    name: "update user",
    key: "update_user",
    route: "allusers/:id/update",
    icon: <Icon fontSize="small">table_view</Icon>,
    component: <UpdateUser />,
  },
  {
    type: "collapse",
    name: "Appointments",
    key: "all_appointments",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/all_appointments",
    component: <All_appointmets />,
  },

  {
    name: "suppport",
    key: "update_user",
    route: "/support",
    icon: <Icon fontSize="small">table_view</Icon>,
    component: <Support />,
  },
];

export const receptionistRoutes = [
  {
    name: "suppport",
    key: "update_user",
    route: "/support",
    icon: <Icon fontSize="small">table_view</Icon>,
    component: <Support />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Appointments",
    key: "all_appointments",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/all_appointments",
    component: <All_appointmets />,
  },
  {
    name: "appointments",
    key: "appointments",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment",
    component: <Appointment />,
  },
  {
    name: "Appointment History",
    key: "appointment_history",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment_details",
    component: <PatientsAppointments />,
  },
  {
    name: "Appointment",
    key: "appointment",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment_details/:appointmentid",
    component: <AppointmentDetails />,
  },
  {
    name: "Appointment update",
    key: "appointment_update",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment_details/:appointmentid/update",
    component: <AppointmentUpdate />,
  },
  {
    name: "Prescription pdf",
    key: "prescription_pdf",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/appointment_details/:appointmentid/pdf",
    component: <Pdf />,
  },

  {
    type: "collapse",
    name: "Patients",
    key: "patients",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/patients",
    component: <Patients />,
  },
  {
    name: "Patients",
    key: "patients",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/patients/create",
    component: <Patientsform />,
  },
  {
    name: "patient details",
    key: "patient_details",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id",
    component: <PatientDetails />,
  },
  {
    name: "Update Patients",
    key: "update",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients/:id/update",
    component: <UpdatePatients />,
  },
];
