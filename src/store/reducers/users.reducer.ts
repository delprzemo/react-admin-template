import { IUserState } from "../models/root.interfaces";
import { ADD_ADMIN, REMOVE_ADMIN, addAdminActionType } from "../actions/users.action";

const initialState: IUserState = {
    users: [
        { id: 1, firstName: "John", lastName: "Smith", email: "jsmith@em.pl", },
        { id: 2, firstName: "Jannice", lastName: "Bing", email: "ohmy@fr.pl" }
    ],
    admins: [
        { id: 3, firstName: "Jannet", lastName: "Crock", email: "jcrock@em.pl" },
    ]
};

function userReducer(state: IUserState = initialState, action: addAdminActionType): IUserState {
    switch (action.type) {
        case ADD_ADMIN: {
            return { ...state, users: state.users.filter(x=>x.id !== action.user.id), admins: [...state.admins, action.user]};
        }
        case REMOVE_ADMIN: {
            return { ...state, admins: state.admins.filter(x=>x.id !== action.user.id), users: [...state.users, action.user]};
        }
        default:
            return state;
    }
}


export default userReducer;