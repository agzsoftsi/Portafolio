import { ctx, canvas } from "./canvas.js";

export const sections = [
  { name: "Start", x: 0, color: "#87CEEB" },
  { name: "About Me", x: 800, color: "#FFA07A" },
  { name: "Skills", x: 1600, color: "#FFD700" },
  { name: "Experience", x: 2400, color: "#98FB98" },
  { name: "Projects", x: 3200, color: "#9370DB" },
  { name: "Final", x: 4000, color: "#FF6347" },
];

export const worldWidth = sections.length * 800;

export function drawWorld(cameraX) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  sections.forEach((section) => {
    ctx.fillStyle = section.color;
    ctx.fillRect(section.x - cameraX, 0, 800, canvas.height);
    ctx.fillStyle = "#000";
    ctx.font = "30px Arial";
    ctx.fillText(section.name, section.x - cameraX + 350, 100);
  });

  ctx.fillStyle = "#228B22";
  ctx.fillRect(-cameraX, canvas.height - 50, worldWidth, 50);
}
