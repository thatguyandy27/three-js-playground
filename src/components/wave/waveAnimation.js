'use strict';

import THREE from 'three/three.js';

const COUNT = 20;


class WaveAnimation{
    constructor(containerId, actions = {}, waveProps, height = 700, width = 1050,
        doc = document, win = window){

        this.containerId = containerId;
        this.height = height;
        this.width = width;
        this.actions = actions;
        this.document = doc
        this.window = win;
        this.waveProps = waveProps;
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
        this.camera.position.z = 80;
        this.camera.position.x = 10;
        this.camera.position.y = 10;
        this.scene.add(this.camera);

        this.plane = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 20, COUNT, COUNT),
            new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true}));

        this.plane.position.x = 10;
        this.plane.position.y = 10;
        this.scene.add(this.plane);
        window.scene = this.scene;
        this.render();
    }
    render(){
        let newPosition = this.waveProps.position + 1;
        if (newPosition === COUNT){
            newPosition = 0;
        }
        this.actions.updatePosition(newPosition);

        //this.actions.updatePosition( {rotation: {y: this.sphere.rotation.y + .01, z: this.sphere.rotation.z + .02}})
        this.renderer.render(this.scene, this.camera);
        this.animationFrameCallback = requestAnimationFrame(this.render.bind(this));
    }

    updateProps(waveProps){
        this.waveProps = waveProps;
        for(let row = 0; row < COUNT; row++){
            let height = row === waveProps.position ? 5 : 0;
            for (let column = 0; column < COUNT; column++){
                this.plane.geometry.vertices[row*20 + column].z = height;
             
            }
        }
        this.plane.geometry.verticesNeedUpdate = true;
    }

    destruct(){
        cancelAnimationFrame(this.animationFrameCallback);
        window.scene = null;
        this.actions = null;
        this.document = null;
        this.window = null;
        this.waveProps = null;
    }
}

export default WaveAnimation;