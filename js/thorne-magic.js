const canvas = document.getElementById('sunflare-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flares = [];

for (let i = 0; i < 100; i++) {
  flares.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 1,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1,
    alpha: Math.random() * 0.8 + 0.2,
    color: `rgba(255, 204, 51, ${Math.random() * 0.8 + 0.2})`
  });
}

function drawSunflare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  flares.forEach(flare => {
    ctx.beginPath();
    ctx.arc(flare.x, flare.y, flare.size, 0, Math.PI * 2);
    ctx.fillStyle = flare.color;
    ctx.fill();
    flare.x += flare.speedX;
    flare.y += flare.speedY;

    if (flare.x < 0 || flare.x > canvas.width) flare.speedX *= -1;
    if (flare.y < 0 || flare.y > canvas.height) flare.speedY *= -1;
  });

  requestAnimationFrame(drawSunflare);
}

drawSunflare();
