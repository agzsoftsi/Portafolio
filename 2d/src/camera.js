import { canvas } from "./canvas.js";
import { worldWidth } from "./world.js";
import { character } from "./character.js";
import { keys } from "./input.js";

export let cameraX = 0;

export function updateCamera() {
  const centerScreen = canvas.width * 0.4;

  if (character.x > centerScreen && keys.ArrowRight) {
    cameraX += character.speed;
    character.x = centerScreen;
  }

  if (character.x < centerScreen * 0.5 && keys.ArrowLeft) {
    cameraX -= character.speed;
    character.x = centerScreen * 0.5;
  }

  cameraX = Math.max(0, Math.min(cameraX, worldWidth - canvas.width));
}
