export const UPDATE_CURRENT_PATH: string = "UPDATE_CURRENT_PATH";

export function updateCurrentPath(area: string, subArea: string): updateCurrentPathActionType {
    return { type: UPDATE_CURRENT_PATH, area: area, subArea: subArea };
}


export type updateCurrentPathActionType = { type: string, area: string, subArea: string };