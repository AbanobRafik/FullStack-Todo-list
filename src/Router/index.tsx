import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../pages/Login";
import Root from "../pages/Root";
import SignUp from "../pages/SignUp";
import WelcomePage from "../components/WelcomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Root />
          </>
        }
      >
        <Route index element={<WelcomePage />} />
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
    </>
  )
);

export default router;