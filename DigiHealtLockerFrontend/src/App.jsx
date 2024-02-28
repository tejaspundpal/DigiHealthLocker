import React, { Suspense, lazy } from "react"
import Home from "./components/Home";
import { Outlet, Route, RouterProvider, createBrowserRouter,createRoutesFromElements,BrowserRouter,Routes } from "react-router-dom";
import Error from "./components/Error";
import PatientLogin from "./components/pages/patient/PatientLogin"
import PatientRegister from "./components/pages/patient/PatientRegister"

// const App = () => {
//   return (
//     <>
//       <PatientLogin/>
//     </>
//   )
// }

//  export default App

// function AppLayout() {
//   return (
//     <>
//       <Outlet/>
//     </>
//   )
// }

// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout/>,
//     errorElement:<Error/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>,
//       },
//       {
//         path:"/login",
//         children:<PatientLogin/>
//       },
//     ],
//   },
// ])

// function App({routes}) {

//   return (
//     <>
//       <RouterProvider router={appRouter}/>
//     </>
//   );
// }

// export default App;

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<PatientLogin />} />
      <Route path="/signup" element={<PatientRegister />} />

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;