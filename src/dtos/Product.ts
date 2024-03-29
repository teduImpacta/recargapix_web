import { GiftCardCategory, ProductTypes } from "../enums";

export type Product = {
    id: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    name: string;
    type: ProductTypes;
};

export type Carrier = {
    id: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    name: string;
    ddd: string;
    logo: string;
    values: CarrierValue[];
};

export type CarrierValue = {
    id: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    value: number;
};

export type Consultor = {
    phone: string;
    number: string;
    postalCode: string;
};

export type GiftCard = {
    name: string;
    logo: string;
    category: GiftCardCategory;
    id: string;
};

export type GiftCardValue = {
    id: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    value: number;
    description: string;
};
