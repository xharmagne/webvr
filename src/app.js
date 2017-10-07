import * as THREE from "three";

class App {
  constructor() {
    this._objects = [];

    this._onResize = this._onResize.bind(this);
    this._update = this._update.bind(this);

    this._createScene();
    this._onResize();

    this._addEventListeners();
  }

  _createScene() {
    this._scene = new THREE.Scene();
    this._camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this._renderer = new THREE.WebGLRenderer({ antialias: true });
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this._renderer.domElement);

    requestAnimationFrame(this._update);
  }

  _update() {
    this._objects.forEach(object => {
      if (object.update) {
        object.update();
      }
    });

    this._render();
  }

  _render() {
    this._renderer.render(this._scene, this._camera);
    requestAnimationFrame(this._update);
  }

  _onResize() {
    this._width = window.innerWidth;
    this._height = window.innerHeight;
    this._aspect = this._width / this._height;

    this._renderer.setSize(this._width, this._height);

    if (!this._camera) {
      return;
    }

    this._camera.aspect = this._aspect;
    this._camera.updateProjectionMatrix();
  }

  _addEventListeners() {
    window.addEventListener("resize", this._onResize);
  }

  add(obj) {
    this._objects.push(obj);
    this._scene.add(obj.getMesh());
  }
}

export default App;
