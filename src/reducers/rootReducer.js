import { combineReducers } from 'redux';
import page from './pageReducer.js';
import helloWorld from './helloWorldReducer.js';
import geometryData from './geometryDataReducer.js';
import customTriangle from './customTriangleReducer.js';
import wave from './waveReducer.js';

const rootReducer = combineReducers({
    page,
    helloWorld, 
    geometryData,
    customTriangle,
    wave
});

export default rootReducer;
