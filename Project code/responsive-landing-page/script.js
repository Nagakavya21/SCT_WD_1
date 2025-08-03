// Theme toggle (Dark/Light Mode)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Floating counters animation
const counters = document.querySelectorAll('.counter span');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 100;
    const increment = Math.ceil(target / speed);
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Tilt.js initialization (optional, remove if not used)
document.querySelectorAll('[data-tilt]').forEach(card => {
  VanillaTilt.init(card, {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
  });
});

