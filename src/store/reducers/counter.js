import * as actionTypes from '../actions/actionTypes';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                count: state.count+1
            };
        case actionTypes.SUB:
            return {
                ...state,
                count: state.count-1
            };
    
        default:
            return state;
    }
}

export default reducer;