// Add this script at the bottom of your body tag
const navToggle = document.querySelector('.nav-toggle');
const navLists = document.querySelector('#nav-lists');

navToggle.addEventListener('click', () => {
    navLists.classList.toggle('nav-open');
    navToggle.parentElement.classList.toggle('nav-open');
});

// Close menu when clicking a link
document.querySelectorAll('.lists a').forEach(link => {
    link.addEventListener('click', () => {
        navLists.classList.remove('nav-open');
        navToggle.parentElement.classList.remove('nav-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLists.contains(e.target)) {
        navLists.classList.remove('nav-open');
        navToggle.parentElement.classList.remove('nav-open');
    }
});