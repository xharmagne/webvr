import * as THREE from "three";

export default class Room {
  constructor() {
    const roomGeometry = new THREE.BoxGeometry(10, 2, 10, 10, 2, 10);
    const roomMaterial = new THREE.MeshBasicMaterial({
      wireframe: true,
      opacity: 0.3,
      transparent: true,
      side: THREE.BackSide
    });
    const room = new THREE.Mesh(roomGeometry, roomMaterial);

    room.position.z = -5;

    this.mesh = room;
  }

  getMesh() {
    return this.mesh;
  }
}
