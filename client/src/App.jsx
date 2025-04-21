import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
