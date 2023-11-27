import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Layout } from "../components";
import {
    ConsultorPage,
    GiftCardPage,
    HomePage,
    PaymentPage,
    RechargePage,
    StatementPage,
} from "../pages";
import { StorePage } from "../pages/store";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recharge" element={<RechargePage />} />
            <Route path="/consultor" element={<ConsultorPage />} />
            <Route path="/giftcard" element={<GiftCardPage />} />
            <Route path="/store/:id" element={<StorePage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/statement" element={<StatementPage />} />
        </Route>
    )
);

export function Router() {
    return <RouterProvider router={router} />;
}
