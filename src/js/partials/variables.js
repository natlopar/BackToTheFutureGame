

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
const titleHidden = document.querySelector('.js-title');
const errorPlace = document.querySelector('.js-errorPlace');
const errorCompany = document.querySelector('.js-errorCompany');
const errorComplement = document.querySelector('.js-errorComplement');
const finalShow = document.querySelector('.js-final');
const errorContainer = document.querySelector('.js-errors');
const btnStart = document.querySelector(".js-startGame");

const btnReset = document.querySelector(".js-resetGame");
const btnResetGif = document.querySelector('.js-resetGame2')
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
let startDices = false;

const clock = 'Reloj de la Torre';
const iron = 'Herrería de Doc';
const hotel = 'Hotel Biff`s';
const dance = 'Baile del Encantamiento Bajo el Mar';
const house = 'Casa de Marty';
const coffee = 'Cafetería';
const george = 'George y Lorraine';
const tannen = 'Perro Rabioso Tannen';
const vest = 'Chaleco con autosecado';
const scooter = 'Patinete volador';
const train = 'Tren del tiempo';
const horse = 'Caballo de Doc';
const cond = 'Condensador de fluzo';
const radiation = 'Traje antirradiación';
const options = {
  year: ['1885', '1985', '2015', '1955'],
  place: [clock, iron, hotel, dance, house, coffee],
  company: ['Marty', 'Doc', 'Biff', 'Jennifer', george, tannen, 'Clara'],
  complement: [
    vest,
    scooter,
    train,
    horse,
    'Einstein (perro de Doc)',
    'Plutonio',
    cond,
    radiation,
  ],
};

const places1885 = [clock, iron];
const places1985 = [clock, house, coffee];
const places1955 = [...places1985, dance];
const places2015 = [...places1985, hotel];
const complement1885 = [train, horse];
const complement1955 = [cond, radiation];
const complement1985 = [...complement1955, 'Einstein (perro de Doc)', 'Plutonio'];
const complement2015 = [...complement1955, 'Plutonio', vest, scooter];