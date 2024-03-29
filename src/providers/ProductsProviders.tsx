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
import { GiftCard, Product } from "../dtos";
import { productsStorage, stepStorage } from "../config/storages";

type Contact = {
    name: string;
    value: string;
};

export type ProductTypes =
    | "home"
    | "recharge"
    | "consultor"
    | "giftcard"
    | "store"
    | "payment"
    | "statement";

type ProductsContextsProps = {
    loading: boolean;
    products: Product[] | undefined;
    getProducts: () => void;
    step: ProductTypes;
    navigateStep: (step?: ProductTypes) => void;
    giftcard: GF;
    handleGiftcard: (giftcard: GF) => void;
    contact: Contact;
    handleContact: (contact: Contact) => void;
};

const ProductContext = createContext<ProductsContextsProps>(
    {} as ProductsContextsProps
);

type ProductsProvidersProps = {
    children?: ReactNode;
};

type GF = GiftCard & {
    value: string | number;
};

export function ProductsProviders({ children }: ProductsProvidersProps) {
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState<string | null>(null);
    const [step, setStep] = useState(() => stepStorage.get("home"));
    const [giftcard, setGiftcard] = useState({} as GF);
    const [contact, setContact] = useState({} as Contact);

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

    const navigateStep = useCallback((s: ProductTypes = "home") => {
        setStep(() => {
            stepStorage.set(s);
            return s;
        });
    }, []);

    const getProducts = useCallback(() => {
        setKey("recarga_pix_products");
    }, []);

    const products = useMemo(() => {
        return data ?? productsStorage.get([]);
    }, [data]);

    const handleGiftcard = useCallback((gf: GF) => {
        setGiftcard(gf);
    }, []);

    return (
        <ProductContext.Provider
            value={{
                loading,
                products,
                getProducts,
                step,
                navigateStep,
                giftcard,
                handleGiftcard,
                contact,
                handleContact: setContact,
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
