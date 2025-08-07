document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        body.classList.toggle('sidebar-open');
    });
});