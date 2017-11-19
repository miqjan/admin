import * as actionTypes from '../constants/team';

const initialState = {
    teams: [],
    error: {},
};

export function teamReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TEAM_GET_SUCCESS:
            return Object.assign({}, state, {
                teams: action.teams
            });
        case actionTypes.TEAM_HAS_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}