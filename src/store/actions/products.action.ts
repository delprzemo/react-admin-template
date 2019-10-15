export const ADD_PRODUCT: string = "ADD_PRODUCT";

export function addProduct(area: string): addProductActionType {
    return { type: ADD_PRODUCT };
}


export type addProductActionType = { type: string };