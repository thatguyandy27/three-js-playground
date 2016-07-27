import WAVE_CONSTANTS from '../constants/waveConstants.js';

export function updatePosition(position){
    return {
        type: WAVE_CONSTANTS.ACTIONS.UPDATE_POSITION,
        position
    };
}