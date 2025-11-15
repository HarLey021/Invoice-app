import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout.tsx";
import Home from "./pages/Home.tsx";
import InvoiceDetails from "./pages/InvoiceDetails.tsx";
import ContextProvider from "./ContextProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <InvoiceDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
