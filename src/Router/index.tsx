import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../pages/Login";
import Root from "../pages/Root";
import SignUp from "../pages/SignUp";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
    </>
  )
);

export default router;
