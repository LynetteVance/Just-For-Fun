const canvas = document.getElementById('dragon-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 300;

let orb = {
  x: 200,
  y: 150,
  radius: 30,
  dx: 2,
  dy: 1.5
};

function drawOrb() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createRadialGradient(orb.x, orb.y, 10, orb.x, orb.y, orb.radius);
  gradient.addColorStop(0, '#a761ff');
  gradient.addColorStop(0.5, '#8c00ff');
  gradient.addColorStop(1, 'transparent');

  ctx.beginPath();
  ctx.fillStyle = gradient;
  ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
  ctx.fill();
}

function updateOrb() {
  orb.x += orb.dx;
  orb.y += orb.dy;

  if (orb.x + orb.radius > canvas.width || orb.x - orb.radius < 0) {
    orb.dx *= -1;
  }
  if (orb.y + orb.radius > canvas.height || orb.y - orb.radius < 0) {
    orb.dy *= -1;
  }
}

function animate() {
  drawOrb();
  updateOrb();
  requestAnimationFrame(animate);
}

animate();
