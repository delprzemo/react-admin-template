export const ADD_NOTIFICATION: string = "ADD_NOTIFICATION";
export const REMOVE_NOTIFICATION: string = "REMOVE_NOTIFICATION";

export function addNotification(title: string, text: string): addNotificationActionType {
    return { type: ADD_NOTIFICATION, text: text, title: title };
}

export function removeNotification(id: number): removeNotificationActionType {
    return { type: REMOVE_NOTIFICATION, id: id };
}


export type addNotificationActionType = { type: string, text: string, title: string };
export type removeNotificationActionType = { type: string, id: number };
