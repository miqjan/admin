import {
    SERVICE_HAS_ERROR,
    SERVICE_GET_SUCCESS,
} from '../constants/service';
import axios from 'axios';
import config from '../../config/index.json';

axios.defaults.baseURL = config.api_url;

export function getserviceHasError(error) {
    return {
        type: SERVICE_HAS_ERROR,
        error
    };
}



export function getserviceSuccess(service) {
    return {
        type: SERVICE_GET_SUCCESS,
        service
    };
}


export function serviceFetchData(url) {
    return async(dispatch) => {
        try {
            let res = await axios.get(url, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getserviceSuccess(res.data));
        } catch (error) {
            dispatch(getserviceHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
export function serviceAddData(url,data) {
    
    return async(dispatch) => {
        try {
            delete data._id;
            let res = await axios.post(url, data,{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getserviceSuccess(res.data));
        } catch (error) {

            dispatch(getserviceHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
export function serviceEditData(url,data) {
    
    return async(dispatch) => {
        try {
            let res = await axios.post(url, data,{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getserviceSuccess(res.data));
        } catch (error) {

            dispatch(getserviceHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
export function serviceDelateDatas(url,data_arr) {
    
    return async(dispatch) => {
        try {
            let res = await axios.post(url,{row_arr: data_arr},{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getserviceSuccess(res.data));
        } catch (error) {

            dispatch(getserviceHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
