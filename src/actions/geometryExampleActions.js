import GEOMETRY_EXAMPLE_CONSTANTS from '../constants/geometryExampleConstants.js';

export function updateSphere(sphereProps){
    return {
        type: GEOMETRY_EXAMPLE_CONSTANTS.ACTIONS.UPDATE_SPHERE,
        sphereProps
    };
}