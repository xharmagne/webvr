import * as THREE from "three";

export default class Cube {
  constructor(size) {
    const geometry = new THREE.BoxGeometry(size.width, size.height, size.depth);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);

    cube.position.z = -5;

    this.mesh = cube;
  }

  update() {
    // this.mesh.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.01;

    const ROTATION_VALUE = 10;
    const time = window.performance.now() * 0.0001;

    this.mesh.rotation.x = Math.sin(time) * ROTATION_VALUE;
    this.mesh.rotation.y = Math.cos(time) * ROTATION_VALUE;
  }

  getMesh() {
    return this.mesh;
  }
}
