// Declare variables below to save the different divs of your story.
let option1 = document.querySelector('.option-one');
let option2 = document.querySelector('.option-two');
let storyOpening = document.querySelector('.story-opening');
let doc = document.querySelector('html');
let scenario1 = document.querySelector('.scenario1');
let scenario2 = document.querySelector('.scenario2');
let option3 = document.querySelector('.option-three');
let option4 = document.querySelector('.option-four');
let mayor = document.querySelector('.mayor');
let astronaut = document.querySelector('.astronaut');
let launchBackground = document.querySelector('.launch-background');
let ship1 = document.querySelector('.ship1');
let scenario3 = document.querySelector('.scenario3');
let scenario4 = document.querySelector('.scenario4');
let ship2 = document.querySelector('.ship2');
let galaxy1 = document.querySelector('.galaxy-one');
let galaxy2 = document.querySelector('.galaxy-two');
let galaxy1Button = document.querySelector('.galaxy-one-button');
let galaxy2Button = document.querySelector('.galaxy-two-button');
let ship1FirstTransition = 0;
let ship2SecondTransition = 0;
let ship5 = document.querySelector('.ship5');
let noMissionPlanet1Button = document.querySelector('.no-mission-planet-one-button');
let noMissionPlanet2Button = document.querySelector('.no-mission-planet-two-button');
let scenario7 = document.querySelector('.scenario7');
let ship5Animation = 0;
let scenario8 = document.querySelector('.scenario8');
let restartButton = document.querySelector('.restart');
let buttons = document.querySelector('.buttons');


option1.addEventListener('click', function() {
  storyOpening.style.display = "none";
  doc.style.backgroundImage = "none";
  option1.style.display = "none";
  option2.style.display = "none";
  scenario1.style.display = "block";
  scenario2.style.display = "none";
});

option2.addEventListener('click', function() {
  storyOpening.style.display = "none";
  doc.style.backgroundImage = "none";
  option1.style.display = "none";
  option2.style.display = "none";
  scenario2.style.display = "block";
  scenario1.style.display = "none";
});

option3.addEventListener('click', function() {
  mayor.style.display = "none";
  astronaut.style.display = "none";
  launchBackground.style.marginRight = "70px";
  ship1.style.bottom = "800px";
  scenario3.style.display = "block";
  galaxy1.style.display = "none";
  galaxy2.style.display = "none";
});

option4.addEventListener('click', function() {
  mayor.style.display = "none";
  astronaut.style.display = "none";
  launchBackground.style.marginRight = "70px";
  ship1.style.bottom = "800px";
  scenario4.style.display = "block";
  ship1FirstTransition = 1;
});

ship1.addEventListener('transitionend', function() {
  if (ship1FirstTransition === 1){
    scenario2.style.display = "none";
    doc.style.backgroundImage = "url(https://live.staticflickr.com/2444/4081217898_b7bae8fdba_z.jpg)";
    ship5.style.right = "20%";
  }
});

noMissionPlanet1Button.addEventListener('click', function() {
  ship5.classList.add("move-to-no-mission-planet-one");
});

noMissionPlanet2Button.addEventListener('click', function() {
  ship5Animation = 1;
  ship5.classList.add("move-to-no-mission-planet-two");
});

ship5.addEventListener('animationend', function() {
  if (ship5Animation === 1) {
    scenario4.style.display = "none";
    scenario8.style.display = "block"; 
    doc.style.backgroundImage = "url(none)";
  }
});

ship5.addEventListener('animationend', function() {
  if (ship5Animation === 0) {
  scenario4.style.display = "none";
  scenario7.style.display = "block";
  doc.style.backgroundImage = "url(none)";
  }
});



ship1.addEventListener('transitionend', function() {
  if (ship1FirstTransition === 0){
  scenario2.style.display = "none";
  doc.style.backgroundImage = "url(https://live.staticflickr.com/2444/4081217898_b7bae8fdba_z.jpg)";
  ship2.style.right = "0";
  galaxy1.style.display = "block";
  galaxy2.style.display = "block";
  }
});

galaxy1Button.addEventListener('click', function() {
  ship2.classList.add("move-to-galaxy-one");
  ship2SecondTransition = 1;
});

galaxy2Button.addEventListener('click', function() {
  ship2.classList.add("move-to-galaxy-two");
  ship2SecondTransition = 2;
});

ship2.addEventListener('animationend', function() {
  if (ship2SecondTransition === 1) {
    window.location.href = "galaxy1.html";
  };
});

ship2.addEventListener('animationend', function() {
  if (ship2SecondTransition === 2) {
    window.location.href = "galaxy2.html";
  };
});

restartButton.addEventListener('click', function() {
  scenario1.style.display = "none";
  doc.style.backgroundImage = "url(https://live.staticflickr.com/2444/4081217898_b7bae8fdba_z.jpg)";
  storyOpening.style.display = "block";
  option2.style.display = "block";
  option2.style.marginLeft = "46%";
});

