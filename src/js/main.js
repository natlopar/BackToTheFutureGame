'use strict';
const menu = document.querySelector('.js-nav');
const hiddenPart = document.querySelectorAll('.js-hidden')
const menuText = document.querySelector('.js-navText');
const dices = document.querySelectorAll('.js-dice');
const counter = document.querySelector('.js-counter');
const traveller = document.querySelector('.js-traveller');
const character = document.querySelector('.js-character');
const year = document.querySelector('.js-year');
const resultYear = document.querySelector('.js-resultYear');
const place = document.querySelector('.js-place');
const resultPlace = document.querySelector('.js-resultPlace');
const company = document.querySelector('.js-company');
const resultCompany = document.querySelector('.js-resultCompany');
const complement = document.querySelector('.js-complement');
const resultComplement = document.querySelector('.js-resultComplement');
const gifEnd = document.querySelector('.js-end');
const play = document.querySelector('.js-play');
const startSection =document.querySelector('.js-startSection');
const titleHidden = document.querySelector('.js-title');

let totalCounter = 7;
const handlePlay =()=>{
  play.classList.add('hidden');
  startSection.classList.remove('hidden');
  startSection.classList.add('start');
  titleHidden.classList.add('hidden');

}

play.addEventListener('click',handlePlay);

const handleMenu =()=>{
 menuText.classList.toggle('hidden'); 
 for (const hidden of hiddenPart){
  hidden.classList.toggle('hidden');
 }
}
menu.addEventListener('click', handleMenu);
const getRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const handleDice = (e) => {
  const idDice = e.currentTarget.id;
  console.log(idDice);
  if (totalCounter >0){
    totalCounter = totalCounter -1;
    counter.innerHTML= `Te quedan ${totalCounter} tiradas`;
  } else {
    counter.innerHTML= `Hay demasiadas paradojas temporales, has perdido... corre Marty!!!`;
    gifEnd.classList.remove('hidden');
    gifEnd.src = "/images/Doc1.gif";
  }
  

  if (idDice.includes('year')) {
    let dice = Math.floor(Math.random() * 4) + 1;
    resultYear.innerHTML= dice;
    if (dice === 1) {
      year.innerHTML = '1885';
    } else if (dice === 2) {
      year.innerHTML = '1985';
    } else if (dice === 3) {
      year.innerHTML = '2015';
    } else if (dice === 4) {
      year.innerHTML = '1955';
    }
  } else if (idDice.includes('place')){
    let dice = getRandomNumber();
    resultPlace.innerHTML = dice;
    if (dice === 1) {
        place.innerHTML = 'Reloj de la Torre';
      } else if (dice === 2) {
        place.innerHTML = 'Herrería de Doc';
      } else if (dice === 3) {
        place.innerHTML = 'Hotel Biff`s';
      } else if (dice === 4) {
        place.innerHTML = 'Baile del Encantamiento Bajo el Mar';
      } else if (dice === 5) {
        place.innerHTML = 'Casa de Marty';
      } else if (dice === 6) {
        place.innerHTML = 'Bar';
      }
  } else if (idDice.includes('company')){
    let dice= getRandomNumber();
    resultCompany.innerHTML = dice;
    if (dice === 1) {
        company.innerHTML = 'Marty';
        //desbloquear el resto de personajes
      } else if (dice === 2) {
        company.innerHTML = 'Doc';
      } else if (dice === 3) {
        company.innerHTML = 'Biff';
      } else if (dice === 4) {
        company.innerHTML = 'Jennifer';
      } else if (dice === 5) {
        company.innerHTML = 'George y Lorraine';
      } else if (dice === 6) {
        company.innerHTML = 'Perro Rabioso Tannen';
      }
  } else if (idDice.includes('complement')){
    let dice = getRandomNumber();
    resultComplement.innerHTML = dice;
    if (dice === 1) {
        complement.innerHTML = 'Chaleco con autosecado';
      } else if (dice === 2) {
        complement.innerHTML = 'Patinete volador';
      } else if (dice === 3) {
        complement.innerHTML = 'Tren del tiempo';
      } else if (dice === 4) {
        complement.innerHTML = 'Caballo de Doc';
      } else if (dice === 5) {
        complement.innerHTML = 'Einstein';
      } else if (dice === 6) {
        complement.innerHTML = 'Plutonio';
      }
  }
};

for (const eachDice of dices) {
  eachDice.addEventListener('click', handleDice);
}

const handleTraveller = (e) => {
  let characterPlayer = e.target.innerText;
  if (characterPlayer === "Marty"){
    character.src = '/images/Marty.jpeg' //personaje elegido para viajar
  }
 
  
};

traveller.addEventListener('click', handleTraveller);


