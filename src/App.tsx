import { ProductsProviders } from "./providers";
import { Router } from "./routes";
import { Global } from "./styles";

function App() {
    return (
        <ProductsProviders>
            <Global />
            <Router />
        </ProductsProviders>
    );
}

export default App;
