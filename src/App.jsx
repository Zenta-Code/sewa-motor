import { BrowserRouter } from "react-router-dom";
import ClerkProviderWithRoutes from "./components/ClerkProviderWithRoutes";

const App = () => {
    return (
        <BrowserRouter>
            <ClerkProviderWithRoutes />
        </BrowserRouter>
    );
};

export default App;
