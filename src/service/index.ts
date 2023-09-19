import { Carrier, Consultor, Product } from "../dtos";
import { api } from "./api";

export class Service {
    static async products() {
        return await api.get<{ data: Product[] }>("/products");
    }

    static async carriersDdd(ddd: string) {
        return await api.get<{ data: Carrier[] }>("/carriers", {
            params: {
                ddd,
            },
        });
    }

    static async createConsultor(payload: Consultor) {
        return await api.post("/consultor", payload);
    }
}
