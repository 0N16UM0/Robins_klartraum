const container = document.getElementById('stars');
const starCount = 200;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';

  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  const duration = 2 + Math.random() * 3;
  star.style.animationDuration = `${duration}s`;

  container.appendChild(star);
}