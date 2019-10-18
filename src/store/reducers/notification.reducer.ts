import { IActionBase, INotificationState } from "../models/root.interfaces";
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../actions/notifications.action";
import { INotification } from "../models/notification.interface";



const initialState: INotificationState = {
    notifications: [{id: 1, date: new Date(), text: "Hello new user", title: "Welcome"}]
};

function notificationReducer(state: INotificationState = initialState, action: IActionBase): INotificationState {
    switch (action.type) {
        case ADD_NOTIFICATION: {
            let notifications = state.notifications;
            let maxId = Math.max.apply(Math, state.notifications.map(function(o) { return o.id; }));
            if(maxId === -Infinity) maxId = 0;
            notifications.push({
                id: maxId + 1,
                date: new Date(),
                title: action.title,
                text: action.text
            });
            return {...state, notifications: [...notifications]};
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