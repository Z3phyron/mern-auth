import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "@fontsource/montserrat";
import Page404 from "./pages/404";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, reset } from "./features/auth/AuthSlice";
import GeneralSpinner from "./GeneralSpinner";
import Home from "./pages/home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/forgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyMail from "./pages/auth/verifyMail";
import DashBoard from "./pages/dashboard";
import { ProtectedRoute } from "./ProtectedRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // load our user everytime we render
    dispatch(loadUser());
    dispatch(reset());
  }, [dispatch]);

  const { isLoading } = useSelector((state) => state.auth);

  // this method to control 404 not found page

  return (
    <>
      {isLoading ? (
        <GeneralSpinner />
      ) : (
        <Routes>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verifyMail" element={<VerifyMail />} />
          <Route path="*" element={<Page404 />} />

          <Route
            path="dash"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
