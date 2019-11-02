export const UPDATE_CURRENT_PATH: string = "UPDATE_CURRENT_PATH";

export function updateCurrentPath(area: string, subArea: string): IUpdateCurrentPathActionType {
    return { type: UPDATE_CURRENT_PATH, area: area, subArea: subArea };
}


interface IUpdateCurrentPathActionType { type: string, area: string, subArea: string };