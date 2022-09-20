import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import {
  Login,
  Dashboard,
  Notification,
  Customer,
  Project,
  Branch,
  Department,
  JobPosition,
  Employee,
  MyProfile,
  Setting,
  HelpCenter,
  Hrd,
  Company,
  Role,
} from "./pages";

const RequiredAuth = ({ isLoggedIn, redirectPath = "/login", children }) => {
  const access_token = localStorage.getItem("access_token");

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  if (access_token == null) {
    window.location.reload("/login");
  }

  return children ? children : <Outlet />;
};

export default function MainRoutes({ authUser }) {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route
        path="/"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Navigate replace to="dashboard" />
          </RequiredAuth>
        }
      />

      <Route
        path="/dashboard"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Dashboard />
          </RequiredAuth>
        }
      />

      <Route
        path="/notification"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Notification />
          </RequiredAuth>
        }
      />

      <Route
        path="/customer"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Customer />
          </RequiredAuth>
        }
      />
      <Route
        path="/project"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Project />
          </RequiredAuth>
        }
      />
      <Route
        path="/branch"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Branch />
          </RequiredAuth>
        }
      />
      <Route
        path="/department"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Department />
          </RequiredAuth>
        }
      />
      <Route
        path="/job-position"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <JobPosition />
          </RequiredAuth>
        }
      />
      <Route
        path="/employee"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Employee />
          </RequiredAuth>
        }
      />
      <Route
        path="/help-center"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <HelpCenter />
          </RequiredAuth>
        }
      />
      <Route
        path="/hrd"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Hrd />
          </RequiredAuth>
        }
      />
      <Route
        path="/settings"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Setting />
          </RequiredAuth>
        }
      />
      <Route
        path="/company"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Company />
          </RequiredAuth>
        }
      />
      <Route
        path="/role"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <Role />
          </RequiredAuth>
        }
      />
      <Route
        path="/my-profile"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <MyProfile />
          </RequiredAuth>
        }
      />
      <Route
        path="*"
        element={
          <RequiredAuth isLoggedIn={!!authUser._isLoggedIn}>
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          </RequiredAuth>
        }
      />
    </Routes>
  );
}
