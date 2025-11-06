document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('navbar');

  // Toggle navigation menu on small screens
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });

  // Close menu after clicking a nav link (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
    });
  });

  // Alert messages for buttons in hero section
  const viewMenuBtn = document.getElementById('view-menu-btn');
  const reserveBtn = document.getElementById('reserve-btn');

  viewMenuBtn.addEventListener('click', () => {
    alert('Redirecting to the Menu section...');
    location.href = '#menu';
  });

  reserveBtn.addEventListener('click', () => {
    alert('Redirecting to the Reservations section...');
    location.href = '#reservations';
  });
});