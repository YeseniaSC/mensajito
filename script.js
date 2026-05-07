for(let i = 0; i < 200; i++){

  const star = document.createElement("div");
  star.classList.add("star");

  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";

  star.style.animationDuration =
    (Math.random() * 3 + 1) + "s";

  document.body.appendChild(star);
}