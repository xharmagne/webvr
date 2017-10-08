import App from "./app";
import AppVR from "./app-vr";
import Cube from "./cube";
import Room from "./room";

// 1 - Initialize app
let app = new AppVR();
app.initialize().then(() => {
  // 2 - Initialize game objects
  initializeGameObjects(app);

  // 3 - Start update/render loop
  app.start();
});

function initializeGameObjects(app) {
  app.add(new Room());

  const cube1 = new Cube({ width: 1, height: 1, depth: 1 }, { z: -4 });
  app.add(cube1);

  const cube2 = new Cube({ width: 1, height: 1, depth: 1 }, { x: -4, z: -9 });
  app.add(cube2);

  const cube3 = new Cube({ width: 1, height: 1, depth: 1 }, { x: 2, z: 3 });
  app.add(cube3);
}
