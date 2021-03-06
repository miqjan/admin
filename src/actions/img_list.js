import {
    ADD_IMG,
    IMG_DELATE,
    IMG_HAS_ERROR,
    ADD_IMG_LOADING
} from '../constants/imglist';
import axios from 'axios';
import config from '../../config/index.json';
axios.defaults.baseURL = config.api_url;


export function addImageScusses(images) {
    return {
        type: ADD_IMG,
        images
    };
}
export function addImageLoading(bool) {
    return {
        type: ADD_IMG_LOADING,
        bool
    };
}
export function addImageHasError(error) {
    return {
        type: IMG_HAS_ERROR,
        error
    };
}

export function addimg(name,data) {
    return async(dispatch) => {
        try {
            dispatch(addImageLoading(true));
            let res = await axios.post('/images', {
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
            let res = await axios.get('/images');
            dispatch(addImageScusses(res.data));
        } catch (error) {
            dispatch(addImageHasError(error));
        } 
    };
}

export function delateImage(name){
    return async(dispatch) => {
        try {

            let res = await axios.post('/images/delate' ,{
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
