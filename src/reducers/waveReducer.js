'use strict';

import WAVE_CONSTANTS from  '../constants/waveConstants.js';

const initialState = {
    position: 0
};

export default function(state = initialState, action){

    switch (action.type){
        case WAVE_CONSTANTS.ACTIONS.UPDATE_POSITION:
            return Object.assign({}, state, {position: action.position});
        default:
            return state;
    }

}