import { Product } from "../dtos";
import { ProductTypes } from "../providers";
import { createStorage } from "../utils";

export const productsStorage = createStorage<Product[]>("products");
export const stepStorage = createStorage<ProductTypes>(
    "step"
);
