// --- Elements ---
const hamMenu = document.querySelector('.ham-menu');
const offMenu = document.querySelector('.off-screen-menu');
const offLinks = document.querySelectorAll('.off-screen-menu a');

console.log("JS loaded");

hamMenu.addEventListener('click', () => {
    console.log("clicked");
    hamMenu.classList.toggle('active');
    offMenu.classList.toggle('active');
});

offLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offMenu.classList.remove('active');
    });
});

