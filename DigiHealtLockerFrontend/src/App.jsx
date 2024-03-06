import React from "react"
import Home from "./components/Home";
import { Route, BrowserRouter, Routes, } from "react-router-dom";

import Error from "./components/Error";
import PatientLogin from "./components/pages/patient/PatientLogin"
import PatientRegister from "./components/pages/patient/PatientRegister"
import MainComponet from "./components/MainComponet";
import DoctorLogin from "./components/pages/doctor/DoctorLogin";
import DoctorRegister from "./components/pages/doctor/DoctorRegister";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<MainComponet />} >
          <Route index element={<Home />} />
          <Route path="/patient/login" element={<PatientLogin />} />
          <Route path="/doctor/login" element={<DoctorLogin/>} />
          <Route path="/patient/register" element={<PatientRegister />} />
          <Route path="/doctor/register" element={<DoctorRegister/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;