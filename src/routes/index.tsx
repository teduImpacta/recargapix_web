import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Layout } from "../components";
import { HomePage, RechargePage } from "../pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recharge" element={<RechargePage />} />
        </Route>
    )
);

export function Router() {
    return <RouterProvider router={router} />;
}
