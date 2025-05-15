const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

body.classList.add('light');
toggleBtn.textContent = '🌙';

toggleBtn.addEventListener('click', () => {
  const isLight = body.classList.contains('light');

  if (isLight) {
    body.classList.remove('light');
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    toggleBtn.textContent = '🌙';
  }
});