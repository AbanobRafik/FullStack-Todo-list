import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main>
      <RouterProvider router={router} />
      <Toaster />;
    </main>
  );
}

export default App;
