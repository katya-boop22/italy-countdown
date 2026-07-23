const tripDate = new Date("September 22, 2026 11:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = tripDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${days} days<br>${hours} hours ${minutes} minutes ${seconds} seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
