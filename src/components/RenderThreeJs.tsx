"use client"
import React from 'react'
import * as THREE from 'three'




const RenderThreeJs = () => {
	if (typeof window !== "undefined") {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
		const renderer = new THREE.WebGLRenderer();
		// renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild( renderer.domElement );
		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: "#ff3399" } );
		const cube = new THREE.Mesh( geometry, material );
		scene.add(cube);
		camera.position.z = 5;
	}
  return (
	  <div id='3d-obj'></div>
  )
}

export default RenderThreeJs