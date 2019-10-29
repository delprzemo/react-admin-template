import { IProduct } from "./product.interface";

export interface IOrder {
    id: number;
    name: string;
    product: IProduct;
    amount: number;
    totalPrice: number;
}