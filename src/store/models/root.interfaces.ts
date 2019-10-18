import { IProduct } from "./product.interface";
import { INotification } from "./notification.interface";

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
    notifications: INotificationState;
}

export interface IProductState {
    products: IProduct[];
    editProduct: IProduct | null;
}

export interface IActionBase {
    type: string;
    [prop: string]: any;
}

export interface INotificationState {
    notifications: INotification[];
}