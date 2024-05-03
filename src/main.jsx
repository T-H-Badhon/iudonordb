import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import RegistrationForm from "./pages/RegistrationForm";
import Login from "./pages/Login";
import AddBloodRequest from "./pages/AddBloodRequest";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import WhoCanDonate from "./pages/WhoCanDonate";
import AboutUs from "./pages/AboutUs";
import BeAwareOfFraud from "./pages/BeAwareOfFraud";
import FindDonor from "./pages/FindDonor";
import Blogs from "./pages/Blogs";
import AllBloodRequest from "./pages/AllBloodRequest";
import AuthProvider from "./providers/AuthProvider";
import AdminRegistration from "./pages/AdminRegistration";
import ChangePassword from "./pages/ChangePassword";
import ForgetPassword from "./pages/ForgetPassword";
import AllDonors from "./pages/AllDonors";
import AdminRoutes from "./routes/AdminRoutes";
import SuperAdminRoutes from "./routes/SuperAdminRoutes";
import Contact from "./pages/contact";
import PrivateRoutes from "./routes/privateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "registration",
        element: <RegistrationForm></RegistrationForm>,
      },
      {
        path: "adminRegistration",
        element: (
          <SuperAdminRoutes>
            <AdminRegistration></AdminRegistration>
          </SuperAdminRoutes>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "addBloodRequest",
        element: (
          <PrivateRoutes>
            <AddBloodRequest></AddBloodRequest>
          </PrivateRoutes>
        ),
      },
      {
        path: "allBloodRequest",
        element: (
          <PrivateRoutes>
            <AllBloodRequest></AllBloodRequest>
          </PrivateRoutes>
        ),
      },
      {
        path: "findDonor",
        element: <FindDonor></FindDonor>,
      },
      {
        path: "allDonors",
        element: (
          <AdminRoutes>
            <AllDonors></AllDonors>
          </AdminRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "update",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "changePassword",
        element: (
          <PrivateRoutes>
            <ChangePassword></ChangePassword>
          </PrivateRoutes>
        ),
      },
      {
        path: "forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "whocandonate",
        element: <WhoCanDonate></WhoCanDonate>,
      },
      {
        path: "beAwareOfFraud",
        element: <BeAwareOfFraud></BeAwareOfFraud>,
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "blogs",
        element: (
          <PrivateRoutes>
            <Blogs></Blogs>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
