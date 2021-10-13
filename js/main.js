const schemeSvg = document.querySelector('.scheme-svg'),
  totalPriceTag = document.querySelector('.price-total'),
  menuButton = document.querySelector('.m-menu'),
  menu = document.querySelector('.menu');
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('active');
    let totalSeats = schemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
});

menuButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});