const canvas = document.getElementById('lava-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lavaParticles = [];

for (let i = 0; i < 100; i++) {
  lavaParticles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 2,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1,
    alpha: Math.random() * 0.8 + 0.2,
    color: `rgba(255, ${Math.floor(69 + Math.random() * 50)}, 0, ${Math.random() * 0.6 + 0.3})`
  });
}

function drawLava() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lavaParticles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
  });

  requestAnimationFrame(drawLava);
}

drawLava();
