import * as actionTypes from '../constants/service';

const initialState = {
    service: [],
    error: {},
};

export function serviceReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SERVICE_GET_SUCCESS: 
            return Object.assign({}, state, {
                service: action.service
            });
        case actionTypes.SERVICE_HAS_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}