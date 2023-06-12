import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { RecipePage } from "../components/RecipePage/RecipePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "recipe/:id",
    element: <RecipePage />,
  },
]);