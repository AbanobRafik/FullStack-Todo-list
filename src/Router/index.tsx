import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../pages/Login";
import Root from "../pages/Root";
import SignUp from "../pages/SignUp";
import WelcomePage from "../pages/WelcomePage";
import About from "../pages/About";
import ProtectedRoutes from "../components/auth/ProtectedRoutes";

const isLoggedIn = false;
const userData = isLoggedIn ? { email: "abanob@ex.com" } : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index
        element={
          <ProtectedRoutes
            isAllowed={isLoggedIn}
            redirectPath="/login"
            data={userData}
          >
            <WelcomePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="about"
        element={
          <ProtectedRoutes
            isAllowed={isLoggedIn}
            redirectPath="/login"
            data={userData}
          >
            <About />
          </ProtectedRoutes>
        }
      />
      <Route
        path="login"
        element={
          <ProtectedRoutes
            isAllowed={!isLoggedIn}
            redirectPath="/"
            data={userData}
          >
            <Login />
          </ProtectedRoutes>
        }
      />
      <Route path="register" element={<SignUp />} />
    </Route>
  )
);

export default router;
