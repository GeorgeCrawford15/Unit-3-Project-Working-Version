let ship = document.querySelector('.ship');
let meteor1 = document.querySelector('.meteor1');
let h2 = document.querySelector('h2');
let shipTransition = 0;
let meteor1Transition = 0;
let goHomeButton = document.querySelector('.go-home');
let shipCrashed = 0;

document.addEventListener('DOMContentLoaded', function() {
  ship.classList.add('ship-in-scene');
});

ship.addEventListener('animationend', function() {
  if (shipTransition === 0) {
  meteor1.classList.add('meteor1-in-scene');
  }
});

meteor1.addEventListener('animationend', function() {
  if (meteor1Transition === 0) {
    h2.textContent = "Suddenly a meteor appears! Click on the meteor to get rid of it.";
    meteor1.classList.add('moving-to-ship');
    ship.classList.add('moving-to-meteor');
    shipTransition = 1;
  }
});

ship.addEventListener('animationend', function() {
  if (shipTransition === 1) {
    meteor1Transition = 1;
  }
});

meteor1.addEventListener('click', function() {
  if (shipCrashed === 0) {
  meteor1.classList.add('fade-out');
  }
});

meteor1.addEventListener('transitionend', function() {
  meteor1.style.display = "none";
  ship.style.marginTop = "290px";
  ship.style.marginRight = "200px";
  h2.textContent = "You got rid of the meteor! You can now safely continue your journey home.";
  goHomeButton.style.display = "block";
});

meteor1.addEventListener('animationend', function() {
  if (meteor1Transition === 1) {
    shipCrashed = 1;
    h2.textContent = "The meteor crashed into your ship!";
  }
});

goHomeButton.addEventListener('click', function() {
  ship.classList.add('going-home');
  shipTransition = 2;
});

ship.addEventListener('animationend', function() {
  if (shipTransition === 2) {
    window.location.href = "home.html";
  }
});