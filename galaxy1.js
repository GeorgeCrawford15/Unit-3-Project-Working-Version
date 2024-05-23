let ship3 = document.querySelector('.ship3');
let planet1Button = document.querySelector('.planet-one-button');
let planet2Button = document.querySelector('.planet-two-button');
let celestiaLanding = document.querySelector('.celestia-landing');
let scenario6 = document.querySelector('.scenario6');
let doc = document.querySelector('html');
let celestiaDeath = document.querySelector('.celestia-death');
let exploreButton = document.querySelector('.explore');
let leaveButton = document.querySelector('.leave');
let ship3Animation = 0;
let hyperionLanding = document.querySelector('.hyperion-landing');
let leftButton = document.querySelector('.left');
let rightButton = document.querySelector('.right');
let astronautOnHyperion = document.querySelector('.astronaut2');
let wentLeft = document.querySelector('.went-left');
let astronautOnHyperionTransition = 0;
let astronautWentLeft = document.querySelector('.astronaut3');
let pickPlantButton = document.querySelector('.pick-plant');
let goBackButton = document.querySelector('.go-back');
let plant = document.querySelector('.plant');
let leftLandscape = document.querySelector('.left-landscape');
let astronautWentLeftTransition = 0;
let hyperionLandingReturn = document.querySelector('.hyperion-landing-return');
let plantFoundHeader = document.querySelector('.plant-found-header');
let leaveHyperionButton = document.querySelector('.leave-hyperion');
let ship8 = document.querySelector('.ship8');
let wentRight = document.querySelector('.went-right');
let pickPoisonousPlantButton = document.querySelector('.pick-poisonous-plant');
let goBackButton1 = document.querySelector('.go-back1');
let astronautWentRight = document.querySelector('.astronaut4');
let poisonousPlantFoundHeader = document.querySelector('.poisonous-plant-found-header');
let restartButton1 = document.querySelector('.restart1');
let astronautWentLeftTransition1 = 0;
let hyperionLanding1 = document.querySelector('.hyperion-landing1');
let rightButton1 = document.querySelector('.right1');
let astronautOnHyperion1 = document.querySelector('.astronaut0');
let decideToStay = document.querySelector('.decide-to-stay');
let restartButton = document.querySelector('.restart');
let restartButton2 = document.querySelector('.restart2');

document.addEventListener("DOMContentLoaded", function(){
  ship3.style.right = "0";
});

planet1Button.addEventListener('click', function(){
  ship3.classList.add('move-to-planet-one');
});

planet2Button.addEventListener('click', function(){
  ship3.classList.add('move-to-planet-two');
  ship3Animation = 1;
});

ship3.addEventListener('animationend', function() {
  if (ship3Animation === 0) {
  scenario6.style.display = "none";
  doc.style.backgroundImage = "url(none)";
  celestiaLanding.style.display = "block";
  }
});

exploreButton.addEventListener('click', function() {
  celestiaLanding.style.display = "none";
  celestiaDeath.style.display = "block";
});

leaveButton.addEventListener('click', function() {
  window.location.href ="galaxy1.html";
});

ship3.addEventListener('animationend', function() {
  if (ship3Animation === 1) {
    scenario6.style.display = "none";
    doc.style.backgroundImage = "url(none)";
    hyperionLanding.style.display = "block";
  }
});

leftButton.addEventListener('click', function() {
  astronautOnHyperion.classList.add('going-left');
  astronautOnHyperionTransition = 1;
});

rightButton.addEventListener('click', function() {
  astronautOnHyperion.classList.add('going-right');
});

astronautOnHyperion.addEventListener('animationend', function() {
  if (astronautOnHyperionTransition === 1) {
    hyperionLanding.style.display = "none";
    wentLeft.style.display = "block";
  }
});

pickPlantButton.addEventListener('click', function() {
  astronautWentLeft.classList.add('picking-plant');
  astronautWentLeftTransition1 = 1;
});

astronautWentLeft.addEventListener('animationend', function() {
  if (astronautWentLeftTransition1 === 1) {
  plant.classList.add('plant-picked');
  }
});

plant.addEventListener('animationend', function() {
  plant.style.display = "none";
  leftLandscape.style.marginLeft = "-237px";
  astronautWentLeft.classList.add('take-plant-back');
  astronautWentLeftTransition = 1;
  plantFoundHeader.textContent = "Plant is stashed away!";
});

astronautWentLeft.addEventListener('animationend', function() {
  if (astronautWentLeftTransition === 1) {
    wentLeft.style.display = "none";
    hyperionLandingReturn.style.display = "block";
  }
});

leaveHyperionButton.addEventListener('click', function() {
  ship8.classList.add('fly-from-hyperion');
});

ship8.addEventListener('animationend', function() {
  window.location.href = "return-home.html";
});

astronautOnHyperion.addEventListener('animationend', function() {
  if (astronautOnHyperionTransition === 0) {
  hyperionLanding.style.display = "none";
  wentRight.style.display = "block";
  }
});

pickPoisonousPlantButton.addEventListener('click', function() {
  astronautWentRight.classList.add('death-from-plant');
});

astronautWentRight.addEventListener('animationend', function() {
  poisonousPlantFoundHeader.textContent = "As soon as you touched the plant, you began to feel dizzy and died in a matter of seconds!";
  pickPoisonousPlantButton.style.display = "none";
  goBackButton1.style.display = "none";
  restartButton1.style.display = "block";
});

goBackButton.addEventListener('click', function() {
  astronautWentLeft.classList.add('go-back-from-left');
});

astronautWentLeft.addEventListener('animationend', function() {
  if (astronautWentLeftTransition1 === 0) {
  wentLeft.style.display = "none";
  hyperionLanding1.style.display = "block";
  }
});

rightButton1.addEventListener('click', function() {
  astronautOnHyperion1.classList.add('going-right');
});

astronautOnHyperion1.addEventListener('animationend', function() {
  hyperionLanding1.style.display = "none";
  wentRight.style.display = "block";
});

goBackButton1.addEventListener('click', function() {
  wentRight.style.display = "none";
  decideToStay.style.display = "block";
});

restartButton.addEventListener('click', function() {
  window.location.href = "options.html";
});

restartButton1.addEventListener('click', function() {
  window.location.href = "options.html";
});

restartButton2.addEventListener('click', function() {
  window.location.href = "options.html";
});

//hii//