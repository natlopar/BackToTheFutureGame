

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



const btnStart = document.querySelector(".js-startGame");
const btnReset = document.querySelector(".js-resetGame");
const Marty = './images/Marty15.jpeg';
const Doc =  './images/Doc.jpeg';
const Biff = './images/biff.jpg';
const Jennifer = './images/Jennifer_Parker.webp';
let currentYear = '';
let currentCharacter = '';
let currentPlace ='';
let currentCompany ='';
let currentComplement ='';
let totalCounter = 7;
let final = '';