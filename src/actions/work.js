import {
    WORK_HAS_ERROR,
    WORK_GET_SUCCESS,
} from '../constants/work';
import axios from 'axios';
import config from '../../config/index.json';

axios.defaults.baseURL = config.api_url;

export function getworkHasError(error) {
    return {
        type: WORK_HAS_ERROR,
        error
    };
}



export function getworkSuccess(work) {
    return {
        type: WORK_GET_SUCCESS,
        work
    };
}


export function workFetchData(url) {
    return async(dispatch) => {
        try {
            let res = await axios.get(url, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getworkSuccess(res.data));
        } catch (error) {

            dispatch(getworkHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
export function workAddData(url,data) {
    
    return async(dispatch) => {
        try {
            delete data._id;
            let res = await axios.post(url, data,{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getworkSuccess(res.data));
        } catch (error) {

            dispatch(getworkHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
export function workEditData(url,data) {
    
    return async(dispatch) => {
        try {
            let res = await axios.post(url, data,{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getworkSuccess(res.data));
        } catch (error) {

            dispatch(getworkHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
export function workDelateDatas(url,data_arr) {
    
    return async(dispatch) => {
        try {
            let res = await axios.post(url,{row_arr: data_arr},{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getworkSuccess(res.data));
        } catch (error) {

            dispatch(getworkHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
