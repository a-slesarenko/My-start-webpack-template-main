import ReactDOM from "react-dom/client";
import App from "@/components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/page1",
        element: <h1>page1</h1>,
      },
      {
        path: "/page2",
        element: <h1>page2</h1>,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router} />);
