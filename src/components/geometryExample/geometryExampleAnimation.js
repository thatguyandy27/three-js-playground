'use strict';

import THREE from 'three/three.js';


class GeometryExampleAnimation{
    constructor(containerId, actions = {},  sphereProps={color: 0xff0000 }, height = 700, width = 1050,
        doc = document, win = window){

        this.containerId = containerId;
        this.height = height;
        this.width = width;
        this.actions = actions;
        this.document = doc
        this.window = win;
        this.sphereProps = sphereProps;
    }


    init(){

        console.log('Geometry Example - Init');
        let container = this.document.getElementById(this.containerId);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        container.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
        this.light = new THREE.AmbientLight(0xffffff);
        this.scene.add(this.light);

        this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 1, 1000);
        this.camera.position.z = 80;
        this.scene.add(this.camera);

        this.sphere = new THREE.Mesh(
            new THREE.SphereGeometry(15, 30, 30),
            new THREE.MeshBasicMaterial({color: this.sphereProps.color, wireframe: true}));
        this.sphere.name = "sphere";
        this.scene.add(this.sphere);

        window.scene = this.scene;
        this.render();
    }

    render(){
        console.log('geometry Example render');
        this.actions.updateSphere( {rotation: {y: this.sphere.rotation.y + .01, z: this.sphere.rotation.z + .02}})
        this.renderer.render(this.scene, this.camera);
        this.animationFrameCallback = requestAnimationFrame(this.render.bind(this));
    }

    updateProps(geometryData){
        if (geometryData.sphereProps){
             this.sphereProps = geometryData.sphereProps;
             this.sphere.rotation.y = this.sphereProps.rotation.y;
             this.sphere.rotation.z = this.sphereProps.rotation.z;
             this.sphere.rotation.x = this.sphereProps.rotation.x;
             this.sphere.material.color =  new THREE.Color(this.sphereProps.color);
        }

    }

    destruct(){
        cancelAnimationFrame(this.animationFrameCallback);
        window.scene = null;
        this.actions = null;
        this.document = null;
        this.window = null;
        this.sphereProps = null;
    }
}

export default GeometryExampleAnimation;