const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for(let i = 0; i < 250; i++){

  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    o: Math.random(),
    speed: Math.random() * 0.02
  });
}

function drawStars(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  stars.forEach(star=>{

    ctx.beginPath();

    ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);

    ctx.fillStyle =
      `rgba(255,255,255,${star.o})`;

    ctx.fill();

    star.o += star.speed;

    if(star.o >= 1 || star.o <= 0.2){
      star.speed *= -1;
    }
  });

  requestAnimationFrame(drawStars);
}

drawStars();

const specialStar =
  document.querySelector(".special-star");

const message =
  document.querySelector(".message");

specialStar.addEventListener("click", ()=>{

  explode();

  message.classList.add("show");

  specialStar.style.opacity = "0";
});

function explode(){

  for(let i = 0; i < 120; i++){

    createParticle();
  }
}

function createParticle(){

  const particle = document.createElement("div");

  document.body.appendChild(particle);

  const size = Math.random() * 6 + 2;

  particle.style.position = "absolute";

  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.borderRadius = "50%";

  particle.style.pointerEvents = "none";

  const colors = [
    "#ff79c6",
    "#8be9fd",
    "#f1fa8c",
    "#bd93f9",
    "#ffffff"
  ];

  particle.style.background =
    colors[Math.floor(Math.random()*colors.length)];

  const x = window.innerWidth / 2;
  const y = window.innerHeight * 0.4;

  particle.style.left = x + "px";
  particle.style.top = y + "px";

  particle.style.boxShadow =
    `0 0 15px ${particle.style.background}`;

  const angle = Math.random() * Math.PI * 2;

  const distance = Math.random() * 300 + 50;

  const destinationX =
    Math.cos(angle) * distance;

  const destinationY =
    Math.sin(angle) * distance;

  particle.animate([
    {
      transform: "translate(0,0) scale(1)",
      opacity:1
    },
    {
      transform:
      `translate(${destinationX}px,
      ${destinationY}px) scale(0)`,

      opacity:0
    }

  ],{
    duration: 3000,
    easing:"cubic-bezier(.17,.67,.83,.67)"
  });

  setTimeout(()=>{
    particle.remove();
  },3000);
}

window.addEventListener("resize", ()=>{

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
