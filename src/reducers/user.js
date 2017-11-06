import * as actionTypes from '../constants';

const initialState = {
    token: window.localStorage.getItem('token'),
    loading: false,
    isLogin: false,
    loading_:false,
    user: {},
    error: {},
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER_START:
      return Object.assign({}, state, { loading: false });
    case actionTypes.LOGIN_USER_END:
      return Object.assign({}, state, { loading: true });
    case actionTypes.GET_USER_START:
      return Object.assign({}, state, { loading_: false });
    case actionTypes.GET_USER_END:
      return Object.assign({}, state, { loading_: true });
    case actionTypes.USER_GET_SUCCESS:
      return Object.assign({}, state, { user: action.user, isLogin: true });
    case actionTypes.USER_SIGNIN_SUCCESS:
      return Object.assign({}, state, { token: action.token});
    case actionTypes.USER_HAS_ERROR:
      return Object.assign({}, state, { error:action.error, isLogin: false });
    default:
      return state;
  }
}
