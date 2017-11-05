import { USER_HAS_ERROR, GET_USER_START, GET_USER_END, USER_GET_SUCCESS , USER_SIGNIN_SUCCESS } from '../constants';
import axios from 'axios';
import config from '../../config/index.json';


axios.defaults.baseURL = config.api_url;
axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');


export function getUserHasError(error) {
  return {
    type: USER_HAS_ERROR,
    error,
  };
}

export function getUserStart() {
  return {
    type: GET_USER_START,
  };
}

export function getUserEnd() {
  return {
    type: GET_USER_END,
  };
}

export function getUserSuccess(user) {
  return {
    type: USER_GET_SUCCESS,
    user,
  };
}
export function gerSigninSuccess(token)
{
    console.log(token);
    window.localStorage.setItem('token', token.token);
    return{
        type: USER_SIGNIN_SUCCESS,
        token: token.token
    };
}

export function userFetchData(url) {
  return async (dispatch) => {
    dispatch(getUserStart());
    try {
      let res = await axios.get(url);
      dispatch(getUserSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(getUserHasError({
            status_text: error.response.statusText,
            data: error.response.data.error,
            status: error.response.status,
        }));
    } finally {
      dispatch(getUserEnd());
    }
  };
}

export function UserLoginFetchData(url,email,password) {
  return async (dispatch) => {
    try {
      dispatch(getUserStart());
      let res = await axios.post(url, {email: email,password: password});
      console.log(res);
      dispatch(gerSigninSuccess(res.data));
      
      
    } catch (error) {
      dispatch(getUserHasError({
        status_text: error.response.statusText,
        data: error.response.data.error,
        status: error.response.status
      }));
    }finally{
      dispatch(getUserEnd());
    }
  };
}
