import { Product } from "../dtos";
import { createStorage } from "../utils";

export const productsStorage = createStorage<Product[]>("products");
export const stepStorage = createStorage<"home" | "recharge" | "consultor">(
    "step"
);
