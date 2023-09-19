import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import swr from "swr";
import { Service } from "../service";
import { Product } from "../dtos";
import { productsStorage, stepStorage } from "../config/storages";

type ProductsContextsProps = {
    loading: boolean;
    products: Product[] | undefined;
    getProducts: () => void;
    step: "home" | "recharge" | "consultor";
    navigateStep: (step?: "recharge" | "home" | "consultor") => void;
};

const ProductContext = createContext<ProductsContextsProps>(
    {} as ProductsContextsProps
);

type ProductsProvidersProps = {
    children?: ReactNode;
};

export function ProductsProviders({ children }: ProductsProvidersProps) {
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState<string | null>(null);
    const [step, setStep] = useState(() => stepStorage.get("home"));

    const { data } = swr(
        key,
        async () => {
            try {
                setLoading(true);
                const { data } = await Service.products();
                return data?.data;
            } finally {
                setLoading(false);
            }
        },
        {
            revalidateOnFocus: false,
        }
    );

    const navigateStep = useCallback(
        (s: "home" | "recharge" | "consultor" = "home") => {
            setStep(() => {
                stepStorage.set(s);
                return s;
            });
        },
        []
    );

    const getProducts = useCallback(() => {
        setKey("recarga_pix_products");
    }, []);

    const products = useMemo(() => {
        return data ?? productsStorage.get([]);
    }, [data]);

    return (
        <ProductContext.Provider
            value={{
                loading,
                products,
                getProducts,
                step,
                navigateStep,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductContext);

    if (!context)
        throw new Error("useProducts missing called inside ProductsProvider");

    return context;
}
