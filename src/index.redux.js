

const ADD_COUNT = 'addition';
const SUB_COUNT = 'subtraction';

// reducer
export function counter( state=10 , action) {
    switch (action.type){
        case 'addition':
            return {num:state + 1,...action.payload};
        case 'subtraction':
            return {num:state - 1,...action.payload};
        default:
            return state;
    }
}

// action creator
export function addCount(data) {
    return {type: ADD_COUNT, payload:data}
}

export function subCount(data) {
    return {type: SUB_COUNT, payload:data}
}

export function addCountAsync(data) {
    return dispatch => {
        setTimeout( () => {
            dispatch(addCount(data))
        },2000)
    }
}