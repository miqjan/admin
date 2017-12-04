import * as actionTypes from '../constants/imglist';

const initialState = {
    images: [],
    isLoading: false,
    error: {},
};

export function imagesListReduser(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_IMG:
            return Object.assign({}, state, {
                images: action.images
            });
        case actionTypes.ADD_IMG_LOADING:
            return Object.assign({}, state, {
                isLoading: action.bool
            });
        case actionTypes.IMG_HAS_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}