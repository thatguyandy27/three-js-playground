'use strict';

import THREE from 'three/three.js';


class HelloWorldAnimation{
    constructor(containerId, height = 700, width = 1050, boxColor=0xFF0000, doc = document, win = window){
        this.containerId = containerId;
        this.height = height;
        this.width = width;
        this.boxColor = boxColor;
        this.document = doc
        this.window = win;
    }

    init(actions){

        console.log('Hello World - Init');
        this.actions = actions;

        let container = this.document.getElementById(this.containerId);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        container.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
        this.light = new THREE.AmbientLight(0xffffff);
        this.scene.add(this.light);

        this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 1, 1000);
        this.camera.position.z = 100;
        this.scene.add(this.camera);

        this.box = new THREE.Mesh(
            new THREE.BoxGeometry(20,20,20),
            new THREE.MeshBasicMaterial({color: this.boxColor}));
        this.box.name = "box";
        this.scene.add(this.box);

        this.render();
    }

    render(){
        console.log('hello world render');
        this.actions.updateBox( {rotation: {y: this.box.rotation.y + .01, z: this.box.rotation.z + .02}})
        this.renderer.render(this.scene, this.camera);
        this.animationFrameCallback = requestAnimationFrame(this.render.bind(this));
    }

    updateProps(props){
        if(props.boxProperties){
            this.box.rotation.y = props.boxProperties.rotation.y;
            this.box.rotation.z = props.boxProperties.rotation.z;
        }

    }

    destruct(){
        cancelAnimationFrame(this.animationFrameCallback);
    }
}

export default HelloWorldAnimation;