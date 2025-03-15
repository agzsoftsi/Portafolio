const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  updateCharacterSize();
}

// Variables del mundo
let cameraX = 0; // Cámara en el mundo del juego
const worldWidth = 6 * 800; // 6 Secciones de 800px cada una

// Secciones del escenario
const sections = [
  { name: "Start", x: 0, color: "#87CEEB" },
  { name: "About Me", x: 800, color: "#FFA07A" },
  { name: "Skills", x: 1600, color: "#FFD700" },
  { name: "Experience", x: 2400, color: "#98FB98" },
  { name: "Projects", x: 3200, color: "#9370DB" },
  { name: "Final", x: 4000, color: "#FF6347" },
];

// Personaje
const character = {
  x: 100,
  y: 0,
  size: 0,
  color: "blue",
  speed: 0,
  gravity: 0,
  velocityX: 0,
  velocityY: 0,
  jumpStrength: 0,
  isJumping: false,
};

// Ajustar tamaño del personaje y físicas
function updateCharacterSize() {
  character.size = Math.max(30, canvas.width * 0.05);
  character.speed = Math.max(5, canvas.width * 0.005);
  character.jumpStrength = Math.max(10, character.size * 0.7);
  character.gravity = character.size * 0.03;
  character.y = canvas.height - character.size - 50;
}

// Control de teclas
const keys = { ArrowRight: false, ArrowLeft: false };

// Eventos del teclado
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

// Dibujar fondo y personaje
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar cada sección
  sections.forEach((section) => {
    ctx.fillStyle = section.color;
    ctx.fillRect(section.x - cameraX, 0, 800, canvas.height);

    // Texto de la sección
    ctx.fillStyle = "#000";
    ctx.font = "30px Arial";
    ctx.fillText(section.name, section.x - cameraX + 350, 100);
  });

  ctx.fillStyle = "#228B22"; // Suelo
  ctx.fillRect(-cameraX, canvas.height - 50, worldWidth, 50);

  // Dibujar personaje
  ctx.fillStyle = character.color;
  ctx.fillRect(character.x, character.y, character.size, character.size);
}

// Actualizar posición y cámara
function update() {
  // Movimiento horizontal
  if (keys.ArrowRight) character.velocityX = character.speed;
  else if (keys.ArrowLeft) character.velocityX = -character.speed;
  else character.velocityX = 0;

  character.x += character.velocityX;

  // Límite del personaje en la pantalla (para mover la cámara)
  const centerScreen = canvas.width * 0.4;

  if (character.x > centerScreen && keys.ArrowRight) {
    cameraX += character.speed;
    character.x = centerScreen;
  }

  if (character.x < centerScreen * 0.5 && keys.ArrowLeft) {
    cameraX -= character.speed;
    character.x = centerScreen * 0.5;
  }

  // No mover la cámara fuera del mundo
  cameraX = Math.max(0, Math.min(cameraX, worldWidth - canvas.width));

  // Aplicar gravedad y salto
  character.velocityY += character.gravity;
  character.y += character.velocityY;

  // Limitar el suelo
  const groundLevel = canvas.height - character.size - 50;
  if (character.y >= groundLevel) {
    character.y = groundLevel;
    character.isJumping = false;
    character.velocityY = 0;
  }

  draw();
  requestAnimationFrame(update);
}

// Ajustar tamaño del canvas cuando cambia la ventana
window.addEventListener("resize", resizeCanvas);

// Iniciar
resizeCanvas();
update();
