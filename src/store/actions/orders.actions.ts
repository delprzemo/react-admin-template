import { IOrder } from "../models/order.interfaces";

export const ADD_ORDER: string = "ADD_ORDER";

export function addOrder(order: IOrder): addOrderActionType {
    return { type: ADD_ORDER, order: order };
}


export type addOrderActionType = { type: string, order: IOrder };
