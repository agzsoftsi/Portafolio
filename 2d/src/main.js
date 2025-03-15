import { canvas, ctx } from "./canvas.js";
import { character, drawCharacter } from "./character.js";
import { drawWorld } from "./world.js";
import { updateCamera, cameraX } from "./camera.js";
import { keys } from "./input.js";

function update() {
  if (keys.ArrowRight) {
    character.velocityX = character.speed;
    character.state = "walk";
  } else if (keys.ArrowLeft) {
    character.velocityX = -character.speed;
    character.state = "walk";
  } else {
    character.velocityX = 0;
    if (!character.isJumping) character.state = "idle";
  }

  character.x += character.velocityX;
  updateCamera();

  character.velocityY += character.gravity;
  character.y += character.velocityY;

  if (character.isJumping) {
    character.state = "jump";
  }

  const groundLevel = canvas.height - character.size - 50;
  if (character.y >= groundLevel) {
    character.y = groundLevel;
    character.isJumping = false;
    character.velocityY = 0;
  }

  drawWorld(cameraX);
  drawCharacter(ctx);

  requestAnimationFrame(update);
}

update();
