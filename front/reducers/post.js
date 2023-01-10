export const initialState = {
    mainPost: [{
        img: 'https://web-resource.gentlemonster.com/assets/stories/bold_collection/img/common/open_graph.jpg',
        content: '첫 번째 게시글',
        user: {
            id: 1,
            name: 'ChoiEG',
        }
    },],
    imagePath: [],
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