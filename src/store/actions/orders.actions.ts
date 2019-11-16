import { IOrder } from "../models/order.interface";

export const ADD_ORDER: string = "ADD_ORDER";

export function addOrder(order: IOrder): IAddOrderActionType {
    return { type: ADD_ORDER, order: order };
}

interface IAddOrderActionType { type: string, order: IOrder };
