"use client"
import React from 'react'
import * as THREE from 'three'

interface animateArgType {
	cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>
	renderer: THREE.WebGLRenderer
	scene: THREE.Scene
	camera: THREE.PerspectiveCamera
}

function animate(cube: animateArgType['cube'], renderer: animateArgType['renderer'], scene: animateArgType['scene'], camera: animateArgType['camera']) {
	requestAnimationFrame( animate as unknown as FrameRequestCallback);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

const RenderThreeJs = () => {
	if (typeof window !== "undefined") {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild( renderer.domElement );
		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: "#ff3399" } );
		const cube = new THREE.Mesh( geometry, material );
		scene.add(cube);
		camera.position.z = 5;
		animate(cube, renderer, scene, camera);
	}
  return (
	  <div id='3d-obj'></div>
  )
}

export default RenderThreeJs