import React from "react"
import Home from "./components/Home";
import { Route, BrowserRouter, Routes, } from "react-router-dom";

import Error from "./components/Error";
import PatientLogin from "./components/pages/patient/PatientLogin"
import PatientRegister from "./components/pages/patient/PatientRegister"
import MainComponet from "./components/MainComponet";

function App() {

  return (

    <>


      <Routes>
        <Route path="/" exact element={<MainComponet />} >
          <Route index element={<Home />} />
          <Route path="/login" element={<PatientLogin />} />
          <Route path="/signup" element={<PatientRegister />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes >







    </>



  );
}

export default App;