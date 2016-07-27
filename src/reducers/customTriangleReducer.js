'use strict';

const initialState = {
    triangles: [{
        id:0,
        vertices: [
            {x: 0, y: .5, z: 0},
            {x: -.5, y: -.5, z: 0},
            {x: .5, y: -.5, z: 0}
        ],
        faces: [
            {
                vertices: [0,1,2],
                vertexColors: ['#ff0000', '#00ff00', '#0000ff']
            }
        ]        
    },{
        id:1,
        vertices: [
            {x: 1, y: 1.5, z: 0},
            {x: .5, y: .5, z: 0},
            {x: 1.5, y: .5, z: 0}
        ],
        faces: [
            {
                vertices: [0,1,2],
                vertexColors: ['#ffff00', '#00ffff', '#ff00ff']
            }
        ]
    },{ 
        id:2,
        vertices: [
            {x: -1, y: -.5, z: 0},
            {x: -1.5, y: -1.5, z: 0},
            {x: -.5, y: -1.5, z: 0}
        ],
        faces: [
            {
                vertices: [0,1,2],
                vertexColors: ['#88ff00', '#0088ff', '#ff0088']
            }
        ]
    }]
};

export default function(state = initialState, action){
    switch (action.type){
        default: 
            return state;
    }
    
}