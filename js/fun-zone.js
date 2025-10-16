// Fun Zone game logic
import { qs } from './utils.js';

function initTypewriter() {
  const area = qs('#typewriter');
  if (!area) return;
  area.addEventListener('input', () => {
    area.style.textShadow = '0 0 6px rgba(114, 241, 184, 0.6)';
    setTimeout(() => (area.style.textShadow = ''), 200);
  });
}

function initPixelGrid() {
  const grid = qs('#pixelGrid');
  if (!grid) return;
  const total = 16 * 16;
  for (let i = 0; i < total; i += 1) {
    const px = document.createElement('div');
    px.className = 'pixel';
    px.addEventListener('click', () => px.classList.toggle('active'));
    grid.appendChild(px);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initPixelGrid();
});


