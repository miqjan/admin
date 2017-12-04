import * as actionTypes from '../constants/gallery';

const initialState = {
    gallery: [],
    error: {},
};

export function galleryReducer(state = initialState, action) {
    switch (action.type) {
        
        case actionTypes.GALLERY_GET_SUCCESS:
            return Object.assign({}, state, {
                gallery: action.gallery
            });
        case actionTypes.GALLERY_HAS_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}