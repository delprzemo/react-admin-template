import { IActionBase, INotificationState } from "../models/root.interface";
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../actions/notifications.action";

const initialState: INotificationState = {
    notifications: [{id: 1, date: new Date(), text: "Hello new user", title: "Welcome"}]
};

function notificationReducer(state: INotificationState = initialState, action: IActionBase): INotificationState {
    switch (action.type) {
        case ADD_NOTIFICATION: {
            let maxId: number= Math.max.apply(Math, state.notifications.map(o =>  o.id));
            if(maxId === -Infinity) { maxId = 0; }
            let newItem = {
                id: maxId + 1,
                date: new Date(),
                title: action.title,
                text: action.text
            };
            return {...state, notifications: [...state.notifications, newItem]};
        }
        case REMOVE_NOTIFICATION: {
            return {...state, notifications: state.notifications
                .filter(Notification => Notification.id !== action.id)};
        }
        default:
            return state;
    }
}


export default notificationReducer;