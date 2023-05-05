import { useEffect } from "react";
import { Icon } from "../../components";
import { useProducts } from "../../providers";

export function HomePage() {
    const { getProducts } = useProducts();

    useEffect(() => {
        getProducts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Icon name="cellphones" />;
}
