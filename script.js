// Side Panel + Theme Toggle
const hamburger = document.getElementById('hamburger');
const sidePanel = document.getElementById('side-panel');
const closePanel = document.getElementById('close-panel');
const themeToggle = document.getElementById('theme-toggle');

hamburger.addEventListener('click', () => {
  sidePanel.classList.add('open');
});

closePanel.addEventListener('click', () => {
  sidePanel.classList.remove('open');
});

window.addEventListener('click', (e) => {
  if (e.target === sidePanel) sidePanel.classList.remove('open');
});

// Dark/Light Mode
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', themeToggle.checked);
  localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
});

// Remember Theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.checked = true;
}
