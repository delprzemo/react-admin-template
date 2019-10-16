import { IProduct } from "./product.interface";

export interface IRootPageStateType {
    area: string;
    subArea: string;
}

export interface IRootStateType {
    page: IRootPageStateType;
}
export interface IStateType {
    root: IRootStateType;
    products: IProductState;
}

export interface IProductState {
    products: IProduct[];
    editProduct: IProduct | null;
}

export interface IActionBase {
    type: string;
    [prop: string]: any;
}