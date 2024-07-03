import "./App.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "./Components/User/SignupService/SignUp";
import Employee from "./Components/Employee/Employee";
import MainLayout from "./Components/Layout/MainLayout";
import { AuthLayout,Dashboard,Login } from "./Components/Pages";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
