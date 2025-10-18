const container = document.getElementById('stars');
const starCount = 200;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // zufällige Position
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';

  // zufällige Größe
  const size = Math.random() * 2 + 1; // 1–3px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // leicht unterschiedliche Funkelgeschwindigkeit
  const duration = 2 + Math.random() * 3; // 2–5s
  star.style.animationDuration = `${duration}s`;

  container.appendChild(star);
}