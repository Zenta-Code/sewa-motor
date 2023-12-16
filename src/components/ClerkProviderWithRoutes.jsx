import { useNavigate, Routes, Route } from "react-router-dom";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
} from "@clerk/clerk-react";
import { OrderContextProvider } from "../contexts/OrderContext";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import OrderPage from "../pages/OrderPage";
import MotorcycleManagementPage from "../pages/MotorcycleManagementPage";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkProviderWithRoutes = () => {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            publishableKey={clerkPubKey}
            navigate={(to) => navigate(to)}
        >
            <OrderContextProvider>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/detail/:id"
                        element={
                            <>
                                <SignedIn>
                                    <DetailPage />
                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn />
                                </SignedOut>
                            </>
                        }
                    />
                    <Route
                        path="/order"
                        element={
                            <>
                                <SignedIn>
                                    <OrderPage />
                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn />
                                </SignedOut>
                            </>
                        }
                    />
                    <Route
                        path="/motor-manage"
                        element={
                            <>
                                <SignedIn>
                                    <MotorcycleManagementPage />
                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn />
                                </SignedOut>
                            </>
                        }
                    />
                </Routes>
                <Footer />
            </OrderContextProvider>
        </ClerkProvider>
    );
};

export default ClerkProviderWithRoutes;
