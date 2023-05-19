import { AxiosResponse } from "axios";
import { useCallback, useState } from "react";

type Request<D> = (...args: any[]) => Promise<AxiosResponse<D>>;

export function useFetch() {
    const [loading, setLoading] = useState(false);

    const request = useCallback(async <D>(req: Request<D>) => {
        try {
            setLoading(true);
            const { data } = await req();
            return data;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        request,
    };
}
