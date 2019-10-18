export interface IProduct {
    id: number;
    name: string;
    category: string;
    description: string;
    amount: number;
    price: number;
    hasExpiryDate: boolean;
}

export enum ProductModificationStatus {
    None = 0,
    Create = 1,
    Edit = 2
}