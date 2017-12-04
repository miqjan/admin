import * as actionTypes from '../constants/partner';

const initialState = {
    partner: [],
    error: {},
    isLoading: false,
};

export function partnerimagesListReduser(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_PARTNER_IMG:
            return Object.assign({}, state, {
                partner: action.images
            });
        case actionTypes.ADD_PARTNER_IMG_LOADING:
            return Object.assign({}, state, {
                isLoading: action.bool
            });
        case actionTypes.IMG_PARTNER_HAS_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}