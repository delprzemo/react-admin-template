import { IUser } from "../models/user.interface";

export const ADD_ADMIN: string = "ADD_ADMIN";
export const REMOVE_ADMIN: string = "REMOVE_ADMIN";

export function addAdmin(user: IUser): addAdminActionType {
    return { type: ADD_ADMIN, user: user };
}

export function removeAdmin(user: IUser): removeAdminActionType {
    return { type: REMOVE_ADMIN, user: user };
}


export type addAdminActionType = { type: string, user: IUser };
export type removeAdminActionType = { type: string, user: IUser };
