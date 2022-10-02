import './style.css'

import * as THREE from 'three'

const size = {
    width: 800,
    height: 600
}

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
mesh.position.set(0.5, 1, -0.3)

// Mesh Scale
// mesh.scale.x = 1.1
// mesh.scale.y = 2.1
// mesh.scale.z = 1
mesh.scale.set(1.1, 2.1, 1)

// Mesh Rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
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


// Animation

const tick = () => {
    // Update object
    mesh.rotation.y += 0.03
    mesh.scale.y += 0.01

    // Update render
    render.render(scene, camera)

    requestAnimationFrame(tick)
}

tick()
