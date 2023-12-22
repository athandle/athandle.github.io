const themeToggle = document.getElementById('themeToggle');
const body = document.body;
body.classList.toggle('dark-mode');
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});