import { canvas } from "./canvas.js";

const spriteImages = {
  idle: new Image(),
  walk: new Image(),
  jump: new Image(),
};

spriteImages.idle.src = "./assets/sprites/idle.fw.png";
spriteImages.walk.src = "./assets/sprites/walk.fw.png";
spriteImages.jump.src = "./assets/sprites/jump.fw.png";

export const character = {
  x: 100,
  y: canvas.height - 150,
  size: Math.max(50, canvas.width * 0.05),
  speed: 5,
  gravity: 1,
  velocityX: 0,
  velocityY: 0,
  jumpStrength: 15,
  isJumping: false,
  state: "idle",
  frameIndex: 0,
  frameSpeed: 0.1,
  frameCount: { idle: 4, walk: 6, jump: 1 },
  facingRight: true,
};

export function drawCharacter(ctx) {
  const sprite = spriteImages[character.state];
  const frameWidth = sprite.width / character.frameCount[character.state];
  const frameHeight = sprite.height;

  ctx.save();
  if (!character.facingRight) {
    ctx.scale(-1, 1);
    ctx.drawImage(
      sprite,
      frameWidth * Math.floor(character.frameIndex),
      0,
      frameWidth,
      frameHeight,
      -character.x - character.size,
      character.y,
      character.size,
      character.size
    );
  } else {
    ctx.drawImage(
      sprite,
      frameWidth * Math.floor(character.frameIndex),
      0,
      frameWidth,
      frameHeight,
      character.x,
      character.y,
      character.size,
      character.size
    );
  }
  ctx.restore();

  character.frameIndex += character.frameSpeed;
  if (character.frameIndex >= character.frameCount[character.state]) {
    character.frameIndex = 0;
  }
}
