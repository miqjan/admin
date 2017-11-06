import {USER_HAS_ERROR, 
        GET_USER_START,
        GET_USER_END, 
        USER_GET_SUCCESS , 
        USER_SIGNIN_SUCCESS,
        LOGIN_USER_START,
        LOGIN_USER_END } from '../constants';
import axios from 'axios';
import config from '../../config/index.json';

import { push } from 'react-router-redux';


axios.defaults.baseURL = config.api_url;



export function getUserHasError(error) {
  return {
    type: USER_HAS_ERROR,
    error,
  };
}

export function getUserStartLogin() {
  return {
    type: LOGIN_USER_START,
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
export function getUserEndLogin() {
    return {
      type: LOGIN_USER_END,
    };
  }
export function getUserSuccess(user) {
    window.localStorage.setItem('role',getRoleNamebyType(user.type))
    return {
        type: USER_GET_SUCCESS,
        user,
    };
}
export function gerSigninSuccess(token)
{
    window.localStorage.setItem('token', token.token);
    return (dispatch) => {
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            token: token.token
        });

        dispatch(push('/gallery'));
    };
}

export function userFetchData(url) {
    return async (dispatch) => {
        dispatch(getUserStart());
        try {
            let res = await axios.get(url,{headers: {'Authorization': window.localStorage.getItem('token')}});
            dispatch(getUserSuccess(res.data));
        } catch (error) {
        
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
      dispatch(getUserStartLogin());
      let res = await axios.post(url, {email: email,password: password},{headers: {'Authorization': window.localStorage.getItem('token')}});
      dispatch(gerSigninSuccess(res.data));
    } catch (error) {
      dispatch(getUserHasError({
        status_text: error.response.statusText,
        data: error.response.data.error,
        status: error.response.status
      }));
    }finally{
      dispatch(getUserEndLogin());
    }
  };
}
const getRoleNamebyType = (type = 0) =>{
    switch (type) {
        case 0:
            return 'user';
        case 1:
            return 'superadmin';
        default:
            return 'user';
    }
}
