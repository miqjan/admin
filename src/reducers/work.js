import * as actionTypes from '../constants/work';

const initialState = {
    work: [],
    error: {},
};

export function workReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.WORK_GET_SUCCESS:
            return Object.assign({}, state, {
                work: action.work
            });
        case actionTypes.WORK_HAS_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}