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

//** get user data from local storage
const storageKey = "logedinUser";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index
        element={
          <ProtectedRoutes
            isAllowed={userData}
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
            isAllowed={userData}
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
            isAllowed={!userData}
            redirectPath="/"
            data={userData}
          >
            <Login />
          </ProtectedRoutes>
        }
      />
      <Route
        path="register"
        element={
          <ProtectedRoutes
            isAllowed={!userData}
            redirectPath="/"
            data={userData}
          >
            <SignUp />
          </ProtectedRoutes>
        }
      />
    </Route>
  )
);

export default router;
