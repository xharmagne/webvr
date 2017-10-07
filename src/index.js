import AppVR from "./vr";
import Cube from "./cube";
import Room from "./room";

let app = new AppVR();
app.add(new Cube({ width: 1, height: 1, depth: 1 }));
app.add(new Room());

// function component() {
//   var element = document.createElement("div");

//   var something = 9999;
//   element.innerHTML = `Hello again and again ${something}`;

//   return element;
// }

// document.body.appendChild(component());
