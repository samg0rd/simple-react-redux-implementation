import * as actionTypes from './actionTypes';

export const increment = () => {
    console.log('incHandler (actions!)');
    return {
        type: actionTypes.ADD
    }
}

export const decrement = () => {
    console.log('decHandler (actions!)');
    return {
        type: actionTypes.SUB
    }
}