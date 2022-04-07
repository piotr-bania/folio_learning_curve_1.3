import '/src/style/style.css'
import * as THREE from 'three'
import gsap from "gsap"
import {
    OrbitControls
} from '/node_modules/three/examples/jsm/controls/OrbitControls.js'
import {
    color,
    GUI
} from '../node_modules/dat.gui/build/dat.gui.module.js'
import {
    RGBELoader
} from '/node_modules/three/examples/jsm/loaders/RGBELoader.js'
import {
    GLTFLoader
} from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js'

// ----------------- Canvas -----------------

const canvas_1 = document.querySelector('canvas.canvas-1')

// ----------------- Scene -----------------

const scene = new THREE.Scene()






// ----------------- Sizes -----------------

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// ----------------- Camera -----------------

const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 0.1, 1000)
camera.position.x = -1
camera.position.y = 0
camera.position.z = 6

// ----------------- Lights -----------------

// const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4)
// scene.add(hemiLight)

// const spotLight = new THREE.SpotLight(0xffffff, 4)
// spotLight.position.set(-50, 50, 50)
// spotLight.castShadow = true
// spotLight.shadow.bias = -0.0001
// spotLight.shadow.mapSize.width = 1024 * 4
// spotLight.shadow.mapSize.height = 1024 * 4
// scene.add(spotLight)

