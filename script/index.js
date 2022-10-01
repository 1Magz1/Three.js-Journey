// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 'red'})

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// Camera
const size = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3
scene.add(camera)

// Render
const canvas = document.getElementById('canvas')
console.log(canvas)
const render = new THREE.WebGLRenderer({
    canvas
})

render.setSize(size.width, size.height)
render.render(scene, camera)
