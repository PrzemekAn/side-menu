const hamburgerBtn = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    sidebar.classList.toggle('sidebarActive');
})