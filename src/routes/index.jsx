import { createBrowserRouter } from "react-router-dom";
import Introduce from "../pages/introduce";
import Quiz from "../pages/quiz";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Introduce />,
  },
  {
    path: "/quiz/:difficulty/:amount",
    element: <Quiz />,
  },
]);

export default routes;
