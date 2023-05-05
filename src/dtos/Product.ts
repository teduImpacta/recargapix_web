import { ProductTypes } from "../enums";

export type Product = {
    id: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    name: string;
    type: ProductTypes;
};
