import {
    ADD_PARTNER_IMG, 
    IMG_PARTNER_DELATE,
    IMG_PARTNER_HAS_ERROR,
    ADD_PARTNER_IMG_LOADING,
} from '../constants/partner';
import axios from 'axios';
import config from '../../config/index.json';
axios.defaults.baseURL = config.api_url;


export function addImageScusses(images) {
    return {
        type: ADD_PARTNER_IMG,
        images
    };
}
export function addImageLoading(bool) {
    return {
        type: ADD_PARTNER_IMG_LOADING,
        bool
    };
}
export function addImageHasError(error) {
    return {
        type: IMG_PARTNER_HAS_ERROR,
        error
    };
}

export function addimg(name,data) {
    return async(dispatch) => {
        try {
            dispatch(addImageLoading(true));
            let res = await axios.post('/partner', {
                name: name,
                data: data
            }, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            //user._id = res.data._id
            dispatch(addImageScusses(res.data));
        } catch (error) {
            dispatch(addImageHasError(error));
        } finally {
            dispatch(addImageLoading(false));
        }
    };
}

export function getimages() {
    return async(dispatch) => {
        try {
            let res = await axios.get('/partner');
            dispatch(addImageScusses(res.data));
        } catch (error) {
            dispatch(addImageHasError(error));
        } 
    };
}
export function delateImage(name){
    return async(dispatch) => {
        try {
            let res = await axios.post('/partner/delate' ,{
                name: name,
              
            }, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            });
            dispatch(addImageScusses(res.data));
        } catch (error) {
            dispatch(addImageHasError(error));
        } 
    };
}
