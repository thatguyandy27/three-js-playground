'use strict';

import THREE from 'three/three.js';

class CustomTriangleAnimation {
    constructor(containerId, actions = {},  options, height = 700, width = 1050,
        doc = document, win = window){

        this.containerId = containerId;
        this.height = height;
        this.width = width;
        this.actions = actions;
        this.document = doc
        this.window = win;
        this.options = options;
        this.isUp = true;
    }

    init(){

        let container = this.document.getElementById(this.containerId);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        container.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
        this.light = new THREE.AmbientLight(0xffffff);
        this.scene.add(this.light);

        this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 1, 1000);
        this.camera.position.z = 10;
        this.scene.add(this.camera);

        this.triangles = [];
        this.options.triangles.forEach(triangle => {
            let threeTriangle = this.createTriangle(triangle);
            this.triangles.push(threeTriangle);
            this.scene.add(threeTriangle);
        });

        window.scene = this.scene;
        this.render();

    }

    pulsateColor(n, nToAdd){
        if (this.isUp){
            n += nToAdd;
            if (n >= 1){
                n = 1;
                this.isUp = false;
            } 
        }
        else {
            n -= nToAdd;
            if (n <= 0){
                n = 0;
                this.isUp = true;
            } 
        }

        return n;
    }

    convertColorToHex(r,g,b){

        let rFloor = Math.floor(r),
            gFloor = Math.floor(g),
            bFloor = Math.floor(b),
            rEven = r % 2 === 0,
            gEven = g % 2 === 0,
            bEven = b % 2 === 0,
            rActual = r - rFloor,
            gActual = g - gFloor,
            bActual = b - bFloor;

        if(rEven){
            rActual = 1 - (1- rFloor);
        }

        if(gActual){
            gActual = 1 - gFloor;
        }

        if(bActual){
            bActual = 1 - gFloor;
        }

        return [rActual, gActual, bActual];

    }

    render(){
        let face = this.triangles[0].geometry.faces[0];
        let newColor = this.pulsateColor(face.vertexColors[0].r, .01);
        face.vertexColors[0].setRGB(newColor, 
            face.vertexColors[0].g, 
            face.vertexColors[0].b);

        face.vertexColors[1].setRGB(face.vertexColors[1].r, 
            newColor, 
            face.vertexColors[1].b);

        face.vertexColors[2].setRGB(face.vertexColors[2].r, 
            face.vertexColors[2].g, 
            newColor);

        this.triangles[0].geometry.colorsNeedUpdate = true;
  

        this.renderer.render(this.scene, this.camera);
        this.animationFrameCallback = requestAnimationFrame(this.render.bind(this));
    }

    updateProps(){

    }

    createTriangle(triangle){
        let material = new THREE.MeshBasicMaterial({
                vertexColors: THREE.VertexColors,
                side: THREE.DoubleSide
            }),
            customTriangle = new THREE.Geometry();


        triangle.vertices.forEach(vertex => {
            customTriangle.vertices.push(new THREE.Vector3(vertex.x, vertex.y, vertex.z));
        });

        triangle.faces.forEach((face) => {
            customTriangle.faces.push(new THREE.Face3(...face.vertices));
            let threeFace = customTriangle.faces[customTriangle.faces.length -1];
            face.vertexColors.forEach((color, index) => {
                threeFace.vertexColors[index] = new THREE.Color(color);
            });
        });

        return new THREE.Mesh(customTriangle, material)
    }

     destruct(){
        cancelAnimationFrame(this.animationFrameCallback);
        window.scene = null;
        this.actions = null;
        this.document = null;
        this.window = null;
        this.options = null;
    }
}


export default CustomTriangleAnimation;
