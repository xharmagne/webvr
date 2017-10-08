import * as THREE from "three";

export default class Cube {
  constructor(size, position) {
    const geometry = new THREE.BoxGeometry(size.width, size.height, size.depth);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);

    if (position) {
      cube.position.z = position.z ? position.z : 0;
      cube.position.x = position.x ? position.x : 0;
      cube.position.y = position.y ? position.y : 0;

      console.log("pos", cube.position);
    }

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
