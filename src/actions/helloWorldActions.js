import HELLO_WORLD_CONSTANTS from '../constants/helloWorldConstants.js';

export function updateBox(boxProperties){
    return {
        type: HELLO_WORLD_CONSTANTS.ACTIONS.UPDATE_BOX,
        boxProperties
    };
}