import PAGE_CONSTANTS from '../constants/pageConstants.js';

export function selectPage(selected){
    return {
        type: PAGE_CONSTANTS.ACTIONS.SELECT_PAGE,
        selected
    };
}