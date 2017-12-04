import {
    GALLERY_HAS_ERROR,
    GALLERY_GET_SUCCESS,
} from '../constants/gallery';
import axios from 'axios';
import config from '../../config/index.json';

axios.defaults.baseURL = config.api_url;

export function getgalleryHasError(error) {
    return {
        type: GALLERY_HAS_ERROR,
        error
    };
}



export function getgallerySuccess(gallery) {
    return {
        type: GALLERY_GET_SUCCESS,
        gallery
    };
}


export function galleryFetchData(url) {
    return async(dispatch) => {
        try {
            let res = await axios.get(url, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getgallerySuccess(res.data));
        } catch (error) {

            dispatch(getgalleryHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
export function galleryAddData(url,data) {
    
    return async(dispatch) => {
        try {
            
            delete data._id;
            
            let res = await axios.post(url,  data,{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getgallerySuccess(res.data));
        } catch (error) {
            
            dispatch(getgalleryHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
export function galleryEditData(url,data) {
    
    return async(dispatch) => {
        try {
            let res = await axios.post(url, data,{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getgallerySuccess(res.data));
        } catch (error) {

            dispatch(getgalleryHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
export function galleryDelateDatas(url,data_arr) {
    
    return async(dispatch) => {
        try {
            let res = await axios.post(url,{row_arr: data_arr},{
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(getgallerySuccess(res.data));
        } catch (error) {

            dispatch(getgalleryHasError({
                status_text: error.response.statusText,
                data: error.response.data.error,
                status: error.response.status
            }));
        } 
    };
}
