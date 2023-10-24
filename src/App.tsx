import { ProductsProviders } from "./providers";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Router } from "./routes";
import { Global } from "./styles";

function App() {
    return (
        <ThemeProvider>
            <ProductsProviders>
                <Global />
                <Router />
            </ProductsProviders>
        </ThemeProvider>
    );
}

export default App;
