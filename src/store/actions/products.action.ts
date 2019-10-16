import { IProduct } from "../models/product.interface";
export const ADD_PRODUCT: string = "ADD_PRODUCT";
export const EDIT_PRODUCT: string = "EDIT_PRODUCT";
export const REMOVE_PRODUCT: string = "REMOVE_PRODUCT";
export const CHANGE_PRODUCT_PENDING_EDIT: string = "CHANGE_PRODUCT_PENDING_EDIT";
export const CLEAR_PRODUCT_PENDING_EDIT: string = "CLEAR_PRODUCT_PENDING_EDIT";

export function addProduct(product: IProduct): addProductActionType {
    return { type: ADD_PRODUCT, product: product };
}

export function editProduct(product: IProduct): editProductActionType {
    return { type: EDIT_PRODUCT, product: product };
}

export function removeProduct(id: number): removeProductActionType {
    return { type: REMOVE_PRODUCT, id: id };
}

export function changeProductPendingEdit(product: IProduct): changeProductPendingEditActionType {
    return { type: CHANGE_PRODUCT_PENDING_EDIT, product: product };
}

export function clearProductPendingEdit(): clearProductPendingEditActionType {
    return { type: CLEAR_PRODUCT_PENDING_EDIT };
}

export type addProductActionType = { type: string, product: IProduct };
export type editProductActionType = { type: string, product: IProduct };
export type removeProductActionType = { type: string, id: number };
export type changeProductPendingEditActionType = { type: string, product: IProduct };
export type clearProductPendingEditActionType = { type: string };