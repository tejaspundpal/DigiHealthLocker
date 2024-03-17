import React, { Suspense, lazy } from "react";
import Home from "./components/Home";
import { Route, BrowserRouter, Routes, } from "react-router-dom";

import Error from "./components/Error";
// import PatientLogin from "./components/pages/patient/PatientLogin"
import PatientRegister from "./components/pages/patient/PatientRegister"
import MainComponet from "./components/MainComponet";
import DoctorLogin from "./components/pages/doctor/DoctorLogin";
import DoctorRegister from "./components/pages/doctor/DoctorRegister";
import PatientDashboard from "./components/pages/patient/PatientDashboard";
import PatientProfile from "./components/pages/patient/PatientProfile";
import PatientAppointments from "./components/pages/patient/PatientAppointments";
import PatientInsurance from "./components/pages/patient/PatientInsurance";
import Loader from "./components/Loader";
const PatientLogin = lazy(() => import("./components/pages/patient/PatientLogin"));

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<MainComponet />} >
          <Route index element={<Home />} />
          <Route path="/patient/login" element={<Suspense fallback={<Loader/>}><PatientLogin/></Suspense>} />
          <Route path="/doctor/login" element={<DoctorLogin/>} />
          <Route path="/patient/register" element={<PatientRegister />} />
          <Route path="/doctor/register" element={<DoctorRegister/>} />
          <Route path="/patient/dashboard" element={<PatientDashboard/>} />
          <Route path="/patient/profile" element={<PatientProfile/>} />
          <Route path="/patient/appointments" element={<PatientAppointments/>} />
          <Route path="/patient/insurance" element={<PatientInsurance/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;