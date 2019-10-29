import { IProduct, ProductModificationStatus } from "../models/product.interface";
export const ADD_PRODUCT: string = "ADD_PRODUCT";
export const EDIT_PRODUCT: string = "EDIT_PRODUCT";
export const REMOVE_PRODUCT: string = "REMOVE_PRODUCT";
export const CHANGE_PRODUCT_AMOUNT: string = "CHANGE_PRODUCT_AMOUNT";
export const CHANGE_PRODUCT_PENDING_EDIT: string = "CHANGE_PRODUCT_PENDING_EDIT";
export const CLEAR_PRODUCT_PENDING_EDIT: string = "CLEAR_PRODUCT_PENDING_EDIT";
export const SET_MODIFICATION_STATE: string = "SET_MODIFICATION_STATE";

export function addProduct(product: IProduct): addProductActionType {
    return { type: ADD_PRODUCT, product: product };
}

export function editProduct(product: IProduct): editProductActionType {
    return { type: EDIT_PRODUCT, product: product };
}

export function removeProduct(id: number): removeProductActionType {
    return { type: REMOVE_PRODUCT, id: id };
}

export function changeProductAmount(id: number, amount: number): changeProductAmountType {
    return { type: CHANGE_PRODUCT_AMOUNT, id: id, amount: amount };
}

export function changeSelectedProduct(product: IProduct): changeSelectedProductActionType {
    return { type: CHANGE_PRODUCT_PENDING_EDIT, product: product };
}

export function clearSelectedProduct(): clearSelectedProductActionType {
    return { type: CLEAR_PRODUCT_PENDING_EDIT };
}

export function setModificationState(value: ProductModificationStatus): setModificationStateActionType {
    return { type: SET_MODIFICATION_STATE, value: value };
}

export type addProductActionType = { type: string, product: IProduct };
export type editProductActionType = { type: string, product: IProduct };
export type removeProductActionType = { type: string, id: number };
export type changeSelectedProductActionType = { type: string, product: IProduct };
export type clearSelectedProductActionType = { type: string };
export type setModificationStateActionType = { type: string, value:  ProductModificationStatus};
export type changeProductAmountType = {type: string, id: number, amount: number};