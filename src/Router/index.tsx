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
import Todos from "../pages/Todos";
import ErrorPage from "../components/errors/ErrorPage";

//** get user data from local storage
const storageKey = "logedinUser";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
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
        path="todos"
        element={
          <ProtectedRoutes
            isAllowed={userData}
            redirectPath="/login"
            data={userData}
          >
            <Todos />
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
      <Route
        path="profile"
        element={
          <ProtectedRoutes
            isAllowed={userData}
            redirectPath="/"
            data={userData}
          >
            <p>profile</p>
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ),
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

export default router;
