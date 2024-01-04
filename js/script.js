const themeToggle = document.getElementById('themeToggle');
const themeToggleWeb = document.getElementById('themeToggleWeb');

const body = document.body;
body.classList.add('dark-mode');
themeToggle.addEventListener('click', () => {
    console.log("5")
    body.classList.toggle('dark-mode');
});
themeToggleWeb.addEventListener('click', () => {
    console.log("5")
    body.classList.toggle('dark-mode');
});