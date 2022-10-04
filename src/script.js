import './style.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
// import gsap from 'gsap'

const size = {
    width: 800,
    height: 600
}

// Cursor
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / size.width
    cursor.y = -(event.clientY / size.height)
})

//Scene
const scene = new THREE.Scene()

// Mesh
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Mesh Position
// mesh.position.x = 0.5
// mesh.position.y = 1
// mesh.position.z = -0.3
// mesh.position.set(0.5, 1, -0.3)

// Mesh Scale
// mesh.scale.x = 1.1
// mesh.scale.y = 2.1
// mesh.scale.z = 1
// mesh.scale.set(1.1, 2.1, 1)

// Mesh Rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// mesh.quaternion.z = 0.9

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.set(1,1 ,3)
camera.lookAt(mesh.position)
scene.add(camera)

// Render
const canvas = document.querySelector('#canvas')
const render = new THREE.WebGLRenderer({
    canvas
})

// Axes Helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

render.setSize(size.width, size.height)

// Clock
const clock = new THREE.Clock()

// GSAP animation
// gsap.to(mesh.position, {duration: 2, delay: 0.3, x: 5})
// gsap.to(mesh.position, {duration: 2, delay: 1, x: 0}

// Orbital Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Animation
const tick = () => {
    // Time
    // const elapsedTime = clock.getElapsedTime()
    // Update object
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.scale.x = Math.sin(elapsedTime)

    // Update controls
    controls.update()

    // Update render
    render.render(scene, camera)

    requestAnimationFrame(tick)
}

tick()
