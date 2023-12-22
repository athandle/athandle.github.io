const themeToggle = document.getElementById('themeToggle');
const body = document.body;
body.classList.add('dark-mode');
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});