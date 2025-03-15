import { character } from "./character.js";

export const keys = { ArrowRight: false, ArrowLeft: false };

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    keys.ArrowRight = true;
    character.facingRight = true;
  }
  if (event.key === "ArrowLeft") {
    keys.ArrowLeft = true;
    character.facingRight = false;
  }
  if (event.key === " " && !character.isJumping) {
    character.velocityY = -character.jumpStrength;
    character.isJumping = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight") keys.ArrowRight = false;
  if (event.key === "ArrowLeft") keys.ArrowLeft = false;
});
