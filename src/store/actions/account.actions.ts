export const LOG_IN: string = "LOG_IN";
export const LOG_OUT: string = "LOG_OUT";

export function login(email: string): logInActionType {
    return { type: LOG_IN, email: email };
}

export function logout(): logOutActionType {
    return { type: LOG_OUT};
}


export type logInActionType = { type: string, email: string };
export type logOutActionType = { type: string };
