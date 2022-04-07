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

// ----------------- Particles -----------------

const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('/src/assets/particles/twirl_03.png')

// Geometry
const particlesGeometry = new THREE.BufferGeometry()
const count = 20000

const positions = new Float32Array(count * 3)
for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100
}

particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
)

// Material
const particlesMaterial = new THREE.PointsMaterial()
particlesMaterial.size = 0.25
particlesMaterial.sizeAttenuation = true
particlesMaterial.color = new THREE.Color('#7161F5')
particlesMaterial.transparent = true
particlesMaterial.alphaMap = particleTexture

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

gsap.to(particles.rotation, {
    duration: 1000,
    delay: 0,
    y: -5,
    repeat: -1
})