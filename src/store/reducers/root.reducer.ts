import { combineReducers, Reducer, AnyAction } from "redux";
import { UPDATE_CURRENT_PATH, updateCurrentPathActionType } from "../actions/root.actions";
import { IRootStateType, IActionBase } from "../models/root.interfaces";
import productsReducer from "./products.reducer";
import notificationReducer from "./notification.reducer";


const initialState: IRootStateType = {
    page: {area: "home", subArea: ""}
};

function rootReducer(state: IRootStateType = initialState, action: IActionBase): IRootStateType {
    switch (action.type) {
        case UPDATE_CURRENT_PATH:
            return { ...state, page: {area: action.area, subArea: action.subArea}};
        default:
            return state;
    }
}

const rootReducers: any = combineReducers({root: rootReducer, 
    products: productsReducer, 
    notifications: notificationReducer});



export default rootReducers;