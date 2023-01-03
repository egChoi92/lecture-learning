export const initialState = {
    mainPost: [],
}

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPostAction = {
    type: ADD_POST,
};
const addDummyAction = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            name: 'ChoiEG',
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            return {
                ...state, 
            }
        case ADD_DUMMY: 
            return {
                ...state,
                mainPost: [action.data, ...state.mainPost],
            }
        default:
            return {
                ...state
            }
        
    }
}

export default reducer;