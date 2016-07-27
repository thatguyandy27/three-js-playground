'use strict';

import helloWorldConstants from '../constants/helloWorldConstants.js';

const initialState = { boxProperties: {rotation: {x: 0, y: 0, z: 0}}};

function handleUpdateBox(oldState, newState){

    let boxProperties = {};

    if (newState.rotation){
        boxProperties.rotation = {
            x: newState.rotation.x || oldState.x,
            y: newState.rotation.y || oldState.y,
            z: newState.rotation.z || oldState.z
        };
    }

    return Object.assign({}, oldState, boxProperties)
}

export default function(state = initialState, action){
    switch(action.type){
        case helloWorldConstants.ACTIONS.UPDATE_BOX:
            let newState =  Object.assign({}, state, 
                {boxProperties: handleUpdateBox(state.boxProperties, action.boxProperties)});
            return newState;
        default:
            return state;
    }
};