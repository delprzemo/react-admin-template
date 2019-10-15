import { combineReducers, Reducer, AnyAction } from "redux";
import { UPDATE_CURRENT_PATH, updateCurrentPathActionType } from "../actions/root.actions";
import { IRootStateType } from "../models/root.interfaces";


const initialState: IRootStateType = {
    page: {area: "home", subArea: ""}
};

function rootReducer(state: IRootStateType = initialState, action: updateCurrentPathActionType): IRootStateType {
    switch (action.type) {
        case UPDATE_CURRENT_PATH:
            return { ...state, page: {area: action.area, subArea: action.subArea}};
        default:
            return state;
    }
}

const rootReducers: any = combineReducers({root: rootReducer});



export default rootReducers;