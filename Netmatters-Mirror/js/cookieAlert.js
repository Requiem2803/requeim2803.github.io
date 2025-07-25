document.addEventListener('DOMContentLoaded', () => {
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');

// Only show banner if not previously accepted
if (!localStorage.getItem('cookieAccepted')) {
cookieBanner.style.display = 'flex';
}

acceptBtn.addEventListener('click', () => {
localStorage.setItem('cookieAccepted', 'true');
cookieBanner.style.display = 'none';
});
});