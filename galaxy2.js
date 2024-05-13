let scenario5 = document.querySelector('.scenario5');
let ship4 = document.querySelector('.ship4');
let planet3Button = document.querySelector('.planet-three-button');
let planet4Button = document.querySelector('.planet-four-button');
let ship4Transition = 0;
let artrothLanding = document.querySelector('.artroth-landing');
let doc = document.querySelector('html');
let riddleAnswer1 = document.querySelector('.riddle-answer1');
let riddleAnswer2 = document.querySelector('.riddle-answer2');
let seratanium = document.querySelector('.seratanium');
let artrothLandingAstronaut = document.querySelector('.artroth-landing-astronaut');
let artrothLandingShip = document.querySelector('.artroth-landing-ship');
let artrothLandingHeader = document.querySelector('.artroth-landing-header');
let riddleHeader = document.querySelector('.riddle-header');
let alien = document.querySelector('.alien');
let artrothLandingShipTransition = 0;
let pickedWrong = document.querySelector('.picked-wrong');
let pickedWrongShip = document.querySelector('.picked-wrong-ship');
let pickedWrongButton = document.querySelector('.picked-wrong-button');
let aetheriaLanding1 = document.querySelector('.aetheria-landing1');
let stayButton = document.querySelector('.stay-button');
let aetheriaLanding1Astronaut = document.querySelector('.aetheria-landing1-astronaut');
let keptExploring = document.querySelector('.kept-exploring');
let keptExploringAstronaut = document.querySelector('.kept-exploring-astronaut');
let keptExploringAstronautAnimation = 0;
let serataniumOnAetheria = document.querySelector('.seratanium-on-aetheria');
let leavingAetheria = document.querySelector('.leaving-aetheria');
let leavingAetheriaAstronaut = document.querySelector('.leaving-aetheria-astronaut');
let leavingAetheriaShip = document.querySelector('.leaving-aetheria-ship');
let crashLanding = document.querySelector('.crash-landing');
let FlyButton = document.querySelector('.fly-button');
let aetheriaLanding1Ship = document.querySelector('.aetheria-landing1-ship');
let crashedShip = document.querySelector('.crashed-ship');
let restartButton = document.querySelector('.restart');

document.addEventListener("DOMContentLoaded", function(){
  ship4.style.right = "0";
});

planet3Button.addEventListener('click', function(){
  ship4.classList.add("move-to-planet-three");
  ship4Transition = 1;
});

planet4Button.addEventListener('click', function(){
  ship4.classList.add("move-to-planet-four");
});

ship4.addEventListener('animationend', function() {
  if (ship4Transition === 1) {
    scenario5.style.display = "none";
    artrothLanding.style.display = "block";
    doc.style.backgroundImage = "url(none)";
  }
});

riddleAnswer1.addEventListener('click', function() {
  seratanium.classList.add('plant-being-given');
  artrothLandingHeader.textContent = "The alien accepts your answer! Now, take the seratanium back to Argon!"
  riddleHeader.style.display = "none";
});

seratanium.addEventListener('animationend', function() {
  artrothLandingAstronaut.classList.add('move-to-ship');
});

artrothLandingAstronaut.addEventListener('animationend', function() {
  artrothLandingShip.classList.add('ship-leaving-artroth');
});

riddleAnswer2.addEventListener('click', function() {
  seratanium.classList.add('seratanium-disappearing');
  alien.classList.add('alien-leaving');
  artrothLandingHeader.textContent = "The alien was unsatisfied with your answer and does not give you the seratanium."
  riddleHeader.style.display = "none";
  artrothLandingShipTransition = 1;
});

artrothLandingShip.addEventListener('animationend', function() {
  if (artrothLandingShipTransition === 1) {
    artrothLanding.style.display = "none";
    pickedWrong.style.display = "block";
    pickedWrongShip.style.right = "0"; 
  }
});

artrothLandingShip.addEventListener('animationend', function() {
  if (artrothLandingShipTransition === 0) {
  window.location.href = "return-home.html";
  }
});

pickedWrongButton.addEventListener('click', function() {
  pickedWrongShip.classList.add('move-to-planet-four');
});

pickedWrongShip.addEventListener('animationend', function() {
  pickedWrong.style.display = "none";
  doc.style.backgroundImage = "url(none)";
  aetheriaLanding1.style.display = "block";
});

ship4.addEventListener('animationend', function() {
  if (ship4Transition === 0) {
    scenario5.style.display = "none";
    doc.style.backgroundImage = "url(none)";
    aetheriaLanding1.style.display = "block";
  }
});

stayButton.addEventListener('click', function() {
  aetheriaLanding1Astronaut.classList.add('exploring');
});

aetheriaLanding1Astronaut.addEventListener('animationend', function() {
  aetheriaLanding1.style.display = "none";
  keptExploring.style.display = "block";
  keptExploringAstronaut.classList.add('getting-seratanium-on-aetheria');
});

keptExploringAstronaut.addEventListener('animationend', function() {
  if (keptExploringAstronautAnimation === 0) {
    serataniumOnAetheria.classList.add('seratanium-picked');
  }
});

serataniumOnAetheria.addEventListener('animationend', function() {
  keptExploringAstronaut.classList.add('return-to-ship-on-aetheria');
  keptExploringAstronautAnimation = 1;
});

keptExploringAstronaut.addEventListener('animationend', function() {
  if (keptExploringAstronautAnimation === 1) { 
    keptExploring.style.display = "none";
    leavingAetheria.style.display = "block";
    leavingAetheriaAstronaut.classList.add('walk-to-ship-on-aetheria');
  }
});

leavingAetheriaAstronaut.addEventListener('animationend', function() {
  leavingAetheriaShip.classList.add('flying-from-aetheria');
});

leavingAetheriaShip.addEventListener('animationend', function() {
  window.location.href = "return-home.html";
});

FlyButton.addEventListener('click', function() {
  aetheriaLanding1Ship.classList.add('flying-from-aetheria');
  aetheriaLanding1Astronaut.style.transform = "scale(0)";
});

aetheriaLanding1Ship.addEventListener('animationend', function() {
  aetheriaLanding1.style.display = "none";
  crashLanding.style.display = "block";
  crashedShip.classList.add('crashing');
});

restartButton.addEventListener('click', function() {
  window.location.href = "options.html";
});






