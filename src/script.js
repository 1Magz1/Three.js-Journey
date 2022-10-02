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

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3

scene.add(camera)

// Render
const canvas = document.getElementById('canvas')
const render = new THREE.WebGLRenderer({
    canvas
})

render.setSize(size.width, size.height)
render.render(scene, camera)
