window.onload = () => {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fireworks = [];

  yesBtn.addEventListener("click", () => {
    for (let i = 0; i < 30; i++) {
      fireworks.push(createParticle());
    }
  });

  function createParticle() {
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 5 + 2;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    };
  }

  function draw() {
    ctx.fillStyle = "rgba(255, 224, 236, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = fireworks.length - 1; i >= 0; i--) {
      const p = fireworks[i];
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.015;

      if (p.alpha <= 0) {
        fireworks.splice(i, 1);
      }
    }

    requestAnimationFrame(draw);
  }

  draw();

  // 👻 NO button runs away
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);

  function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }
};
