import {
    ADD_ALL_USERS,
    ADD_USER,
    EDIT_USER,
    REMOVE_USER,
    USERS_LOADED,
    HAS_ERROR
} from '../constants/userlist';

const initialState = {
    users: [],
    error: {},
    isloaded: false
};

export function userlistReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ALL_USERS:
            return Object.assign({}, state, {
                users: action.users
            });
        case ADD_USER:
            return Object.assign({}, state, {
                users: action.user
            });
        case HAS_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        case USERS_LOADED:
            return Object.assign({}, state, {
                isloaded: action.bool
            });
        default:
            return state;
    }
}
