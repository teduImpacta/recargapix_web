import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Layout } from "../components";
import { ConsultorPage, GiftCardPage, HomePage, RechargePage } from "../pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recharge" element={<RechargePage />} />
            <Route path="/consultor" element={<ConsultorPage />} />
            <Route path="/giftcard" element={<GiftCardPage />} />
        </Route>
    )
);

export function Router() {
    return <RouterProvider router={router} />;
}
