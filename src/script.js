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

