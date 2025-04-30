const canvas = document.getElementById('ember-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let embers = [];

for (let i = 0; i < 120; i++) {
  embers.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedY: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.8 + 0.2
  });
}

function drawEmbers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  embers.forEach(e => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, ${Math.floor(80 + e.alpha * 100)}, 0, ${e.alpha})`;
    ctx.fill();
    e.y -= e.speedY;
    if (e.y < -10) {
      e.y = canvas.height + 10;
      e.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawEmbers);
}

drawEmbers();
