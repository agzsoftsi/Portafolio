const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Ajustar el canvas al tamaño de la pantalla
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Cargar imágenes de los sprites
const spriteImages = {
  idle: new Image(),
  walk: new Image(),
  jump: new Image(),
};

spriteImages.idle.src = "./assets/sprites/idle.fw.png";
spriteImages.walk.src = "./assets/sprites/walk.fw.png";
spriteImages.jump.src = "./assets/sprites/jump.fw.png";

// Secciones del mundo
const sections = [
  { name: "Start", x: 0, color: "#87CEEB" },
  { name: "About Me", x: 800, color: "#FFA07A" },
  { name: "Skills", x: 1600, color: "#FFD700" },
  { name: "Experience", x: 2400, color: "#98FB98" },
  { name: "Projects", x: 3200, color: "#9370DB" },
  { name: "Final", x: 4000, color: "#FF6347" },
];

let cameraX = 0;
const worldWidth = sections.length * 800;

// Personaje
const character = {
  x: 100,
  y: canvas.height - 150,
  size: Math.max(50, canvas.width * 0.05), // Ajusta el tamaño proporcionalmente
  speed: 5,
  gravity: 1,
  velocityX: 0,
  velocityY: 0,
  jumpStrength: 15,
  isJumping: false,
  state: "idle", // Estado actual (idle, walk, jump)
  frameIndex: 0,
  frameSpeed: 0.1, // Velocidad de la animación
  frameCount: {
    idle: 4,
    walk: 6,
    jump: 1,
  },
};

// Controles de movimiento
const keys = { ArrowRight: false, ArrowLeft: false };

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") keys.ArrowRight = true;
  if (event.key === "ArrowLeft") keys.ArrowLeft = true;
  if (event.key === " " && !character.isJumping) {
    character.velocityY = -character.jumpStrength;
    character.isJumping = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight") keys.ArrowRight = false;
  if (event.key === "ArrowLeft") keys.ArrowLeft = false;
});

// Dibujar personaje con sprites
function drawCharacter() {
  const sprite = spriteImages[character.state];
  const frameWidth = sprite.width / character.frameCount[character.state];
  const frameHeight = sprite.height;

  ctx.drawImage(
    sprite,
    frameWidth * Math.floor(character.frameIndex), // Frame actual
    0,
    frameWidth,
    frameHeight,
    character.x,
    character.y,
    character.size,
    character.size
  );

  // Control de animación
  character.frameIndex += character.frameSpeed;
  if (character.frameIndex >= character.frameCount[character.state]) {
    character.frameIndex = 0;
  }
}

// Dibujar el mundo
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar secciones del mundo
  sections.forEach((section) => {
    ctx.fillStyle = section.color;
    ctx.fillRect(section.x - cameraX, 0, 800, canvas.height);
    ctx.fillStyle = "#000";
    ctx.font = "30px Arial";
    ctx.fillText(section.name, section.x - cameraX + 350, 100);
  });

  // Dibujar suelo
  ctx.fillStyle = "#228B22";
  ctx.fillRect(-cameraX, canvas.height - 50, worldWidth, 50);

  // Dibujar personaje
  drawCharacter();
}

// Actualizar la posición del personaje y la cámara
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

  // Control de la cámara
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

  // Aplicar gravedad y salto
  character.velocityY += character.gravity;
  character.y += character.velocityY;

  if (character.isJumping) {
    character.state = "jump";
  }

  // Suelo
  const groundLevel = canvas.height - character.size - 50;
  if (character.y >= groundLevel) {
    character.y = groundLevel;
    character.isJumping = false;
    character.velocityY = 0;
  }

  draw();
  requestAnimationFrame(update);
}

// Iniciar el juego
update();
