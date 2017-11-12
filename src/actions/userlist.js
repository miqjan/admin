import {
    ADD_ALL_USERS,
    ADD_USER,
    EDIT_USER,
    REMOVE_USER,
    USERS_LOADED,
    HAS_ERROR
} from '../constants/userlist';
import axios from 'axios';
import config from '../../config/index.json';
import { push } from 'react-router-redux';
axios.defaults.baseURL = config.api_url;

export function addAllUsers(users) {
    return {
        type: ADD_ALL_USERS,
        users
    };
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user
    };
}
export function EditUser(user) {
    return {
        type: EDIT_USER,
        user
    };
}
export function reMoveUser(user) {
    return {
        type: REMOVE_USER,
        user
    };
}
export function allUserLoaded(bool) {
    return {
        type: USERS_LOADED,
        bool
    };
}

export function somFatchHasError(error) {
    return {
        type: HAS_ERROR,
        error
    };
}

export function allUserFetchGet() {
    return async(dispatch) => {
        dispatch(allUserLoaded(false));
        try {
            const res = await axios.get('user/all/any', {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(addAllUsers(res.data));
        } catch (error) {

            dispatch(somFatchHasError(error));
        } finally {
            dispatch(allUserLoaded(true));
        }
    };
}
export function addUserFetch(user) {
    return async(dispatch) => {
        try {
            const res = await axios.post('/user/insert', user, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            //user._id = res.data._id
            dispatch(addUser(res.data));
        } catch (error) {
            dispatch(somFatchHasError(error));
        } 
    };
}
export function UserEditFetch(url, email, password) {
    return async(dispatch) => {
        try {
            dispatch(getUserStartLogin());
            let res = await axios.post(url, {
                email: email,
                password: password
            }, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(gerSigninSuccess(res.data));
        } catch (error) {
            dispatch(getUserHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } finally {
            dispatch(getUserEndLogin());
        }
    };
}
