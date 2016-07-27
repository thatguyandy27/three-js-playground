'use strict';

import geometryExampleConstants from '../constants/geometryExampleConstants.js';

const initialState = {
    sphereProps: {
        color: '#ff0000',
        rotation: {
            x: 0,
            y: 0, 
            z: 0
        }
    }
};

function handleUpdateSphere(oldState, updates){

    let objectProps = {};

    if (updates.rotation){
        objectProps.rotation = {
            x: updates.rotation.x || oldState.rotation.x,
            y: updates.rotation.y || oldState.rotation.y,
            z: updates.rotation.z || oldState.rotation.z
        };
    }
    if (updates.color){
        objectProps.color = updates.color;
    }

    return Object.assign({}, oldState, objectProps)
}

export default function(state = initialState, action){

    switch (action.type){
        case geometryExampleConstants.ACTIONS.UPDATE_SPHERE:
            return Object.assign({}, state, 
                {sphereProps: handleUpdateSphere(state.sphereProps, action.sphereProps)});
        default:
            return state;
    }
    
}