import { USER_HAS_ERROR, GET_USER_START, GET_USER_END, USER_GET_SUCCESS } from '../constants';
let suerinfo_init = {
    token: window.localStorage.getItem('token')
}
export function userReducer(state = suerinfo_init, action) {
    switch (action.type) {
        case GET_USER_START:
            return Object.assign({},state,{loading:false});
        case GET_USER_END:
            return Object.assign({},state,{loading:true});
        case USER_GET_SUCCESS:
            return Object.assign({},state,{user:action.user,isLogin:true});
        case USER_HAS_ERROR:
            return Object.assign({},state,{error:action.error,isLogin:false});
        default:
            return state;
    }
}

