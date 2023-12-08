import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import A from "./Page/A";
import B from "./Page/B";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/A",
        element: <A />,
    },
    {
        path: "/B",
        element: <B />,
    },
]);

export default router;
