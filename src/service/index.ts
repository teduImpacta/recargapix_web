import { Product } from "../dtos";
import { api } from "./api";

export class Service {
    static async products() {
        return await api.get<{ data: Product[] }>("/products");
    }
}
