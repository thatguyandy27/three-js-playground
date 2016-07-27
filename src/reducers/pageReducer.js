import PAGE_CONSTANTS from '../constants/pageConstants.js';

const initialState = {
    selected: PAGE_CONSTANTS.PAGES.HELLO_WORLD
};

export default function(state = initialState, action){
    switch(action.type){
        case PAGE_CONSTANTS.ACTIONS.SELECT_PAGE:
            return Object.assign({}, state, { selected: action.selected });
        default:
            return state;
    }
};