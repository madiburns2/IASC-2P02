import * as THREE from 'three';

/**********
 ** SCENE **
 **********/
// Canvas
const canvas = document.querySelector('.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('lightblue')

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
scene.add(camera)
camera.position.set(1, 0, 5)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)

/*************
 ** MESHES **
 *************/
// testSphere
const sphereGeometry = new THREE.SphereGeometry(1)
const sphereMaterial = new THREE.MeshNormalMaterial()
const testSphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

scene.add(testSphere)

// testCone
const coneGeometry = new THREE.ConeGeometry(1)
const coneMaterial = new THREE.MeshNormalMaterial()
const testCone = new THREE.Mesh(coneGeometry, coneMaterial)

scene.add(testCone)
testCone.position.set(3, 0, 0)


/************************
 ** ANIMATION LOOP **
 ************************/
const clock = new THREE.Clock()

const animation = () => 
{
    // Return elapsedTime
    const elapsedTime = clock.getElapsedTime()

    // Animate testSphere
    testSphere.position.y = Math.sin(elapsedTime)

    // Animate testCone
    testCone.position.z = Math.sin(elapsedTime)
    
   

    //Renderer
    renderer.render(scene, camera)

    // Request next Frame
    window.requestAnimationFrame(animation)
}

animation()