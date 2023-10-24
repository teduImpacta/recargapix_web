import { Carrier, Consultor, GiftCard, GiftCardValue, Product } from "../dtos";
import { api } from "./api";

type Res<D> = {data: D}
export class Service {
    static async products() {
        return await api.get<Res<Product[]>>("/products");
    }

    static async carriersDdd(ddd: string) {
        return await api.get<Res<Carrier[]>>("/carriers", {
            params: {
                ddd,
            },
        });
    }

    static async createConsultor(payload: Consultor) {
        return await api.post("/consultor", payload);
    }

    static async getGiftCards() {
        return api.get<Res<GiftCard[]>>('/giftcards')
    }

    static async getGiftCardValue(id: string) {
        return api.get<Res<GiftCardValue[]>>(`/giftcards/${id}`)
    }
}
