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

const getRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const placeClockHouseCoffee = () => {
  currentPlace === clock || currentPlace === house || currentPlace === coffee
    ? true
    : false;
};



// const handleDice = (e) => {
//   totalCounter = totalCounter - 1;
//   const idDice = e.currentTarget.id;

//   if (idDice.includes('year')) {
//     let dice = Math.floor(Math.random() * 4) + 1;
//     year.classList.remove('hidden');
//     resultYear.innerHTML = dice;
//     if (dice === 1) {
//       year.innerHTML = '1885';
//       currentYear = '1885';
//     } else if (dice === 2) {
//       year.innerHTML = '1985';
//       currentYear = '1985';
//     } else if (dice === 3) {
//       year.innerHTML = '2015';
//       currentYear = '2015';
//     } else if (dice === 4) {
//       year.innerHTML = '1955';
//       currentYear = '1955';
//     }
//   } else if (idDice.includes('place')) {
//     let dice = getRandomNumber();
//     place.classList.remove('hidden');
//     resultPlace.innerHTML = dice;
//     if (dice === 1) {
//       place.innerHTML = clock;
//       currentPlace = clock;
//     } else if (dice === 2) {
//       place.innerHTML = iron;
//       currentPlace = iron;
//     } else if (dice === 3) {
//       place.innerHTML = hotel;
//       currentPlace = hotel;
//     } else if (dice === 4) {
//       place.innerHTML = dance;
//       currentPlace = dance;
//     } else if (dice === 5) {
//       place.innerHTML = house;
//       currentPlace = house;
//     } else if (dice === 6) {
//       place.innerHTML = coffee;
//       currentPlace = coffee;
//     }
//   } else if (idDice.includes('company')) {
//     let dice = Math.floor(Math.random() * 7) + 1;
//     company.classList.remove('hidden');
//     resultCompany.innerHTML = dice;
//     if (dice === 1) {
//       company.innerHTML = 'Marty';
//       currentCompany = 'Marty';
//     } else if (dice === 2) {
//       company.innerHTML = 'Doc';
//       currentCompany = 'Doc';
//     } else if (dice === 3) {
//       company.innerHTML = 'Biff';
//       currentCompany = 'Biff';
//     } else if (dice === 4) {
//       company.innerHTML = 'Jennifer';
//       currentCompany = 'Jennifer';
//     } else if (dice === 5) {
//       company.innerHTML = george;
//       currentCompany = george;
//     } else if (dice === 6) {
//       company.innerHTML = tannen;
//       currentCompany = tannen;
//     } else if (dice === 7) {
//       company.innerHTML = 'Clara';
//       currentCompany = 'Clara';
//     }
//   } else if (idDice.includes('complement')) {
//     let dice = Math.floor(Math.random() * 8) + 1;
//     complement.classList.remove('hidden');
//     resultComplement.innerHTML = dice;
//     if (dice === 1) {
//       complement.innerHTML = vest;
//       currentComplement = vest;
//     } else if (dice === 2) {
//       complement.innerHTML = scooter;
//       currentComplement = scooter;
//     } else if (dice === 3) {
//       complement.innerHTML = train;
//       currentComplement = train;
//     } else if (dice === 4) {
//       complement.innerHTML = horse;
//       currentComplement = horse;
//     } else if (dice === 5) {
//       complement.innerHTML = 'Einstein';
//       currentComplement = 'Einstein';
//     } else if (dice === 6) {
//       complement.innerHTML = 'Plutonio';
//       currentComplement = 'Plutonio';
//     } else if (dice === 7) {
//       complement.innerHTML = cond;
//       currentComplement = cond;
//     } else if (dice === 8) {
//       complement.innerHTML = radiation;
//       currentComplement = radiation;
//     }
//   }
//   win();
// };

const resultElementClasses = {
  'year': '.js-resultYear',
  'place': '.js-resultPlace',
  'company': '.js-resultCompany',
  'complement': '.js-resultComplement'
};

const handleDice = (e) => {
  totalCounter--;

  const idDice = e.currentTarget.id;
  const options = {
    'year': ['1885', '1985', '2015', '1955'],
    'place': [clock, iron, hotel, dance, house, coffee],
    'company': ['Marty', 'Doc', 'Biff', 'Jennifer', george, tannen, 'Clara'],
    'complement': [vest, scooter, train, horse, 'Einstein', 'Plutonio', cond, radiation]
  };

  const randomIndex = Math.floor(Math.random() * options[idDice].length);
  const selectedOption = options[idDice][randomIndex];

  const targetElementClass = resultElementClasses[idDice];
  const targetElement = document.querySelector(targetElementClass);
  
  targetElement.classList.remove('hidden');
  targetElement.innerHTML = selectedOption;

  switch (idDice) {
    case 'year':
      currentYear = selectedOption;
      break;
    case 'place':
      currentPlace = selectedOption;
      break;
    case 'company':
      currentCompany = selectedOption;
      break;
    case 'complement':
      currentComplement = selectedOption;
      break;
  }

  win();
};


const disabled = () => {
  if (final === 'win') {
    for (const eachDice of dices) {
      eachDice.removeEventListener('click', handleDice);
    }
  }
};

const showSuccess = () => {
  counter.innerHTML = '¡¡¡Has ganado, qué fuerte!!!';
  counter.classList.remove('hidden');
  gifEnd.classList.remove('hidden');
  gifEnd.src = './images/200.gif';
  final = 'win';
  disabled();
};

const win = () => {
  if (totalCounter > 0) {
    counter.innerHTML = `Te quedan ${totalCounter} tiradas`;

    if (currentCharacter === 'Marty') {
      if (currentYear === '1885') {
        if (
          (currentPlace === clock || currentPlace === iron) &&
          (currentCompany === 'Doc' ||
            currentCompany === tannen ||
            currentCompany === 'Clara') &&
          (currentComplement === train || currentComplement === horse)
        ) {
          showSuccess();
        }
      } else if (currentYear === '1985') {
        if (
          placeClockHouseCoffee &&
          (currentCompany === 'Doc' ||
            currentCompany === 'Biff' ||
            currentCompany === 'Jennifer' ||
            currentCompany === george) &&
          (currentComplement === 'Einstein' ||
            currentComplement === 'Plutonio' ||
            currentComplement === cond ||
            currentComplement === radiation)
        ) {
          showSuccess();
        }
      } else if (currentYear === '1955') {
        if (
          ( placeClockHouseCoffee ||
            currentPlace === dance) &&
          (currentCompany === 'Doc' ||
            currentCompany === 'Biff' ||
            currentCompany === george) &&
          (currentComplement === cond || currentComplement === radiation)
        ) {
          showSuccess();
        }
      } else if (currentYear === '2015') {
        if (
          ( placeClockHouseCoffee ||
            currentPlace === hotel
          ) &&
          (currentCompany === 'Doc' ||
            currentCompany === 'Biff' ||
            currentCompany === 'Jennifer' ||
            currentCompany === george) &&
          (currentComplement === vest ||
            currentComplement === scooter ||
            currentComplement === 'Plutonio' ||
            currentComplement === cond ||
            currentComplement === radiation)
        ) {
          showSuccess();
        }
      }
    } else if (currentCharacter === 'Doc') {
      if (currentYear === '1885') {
        if (
          (currentPlace === clock || currentPlace === iron) &&
          (currentCompany === 'Clara' || currentCompany === tannen) &&
          (currentComplement === train || currentComplement === horse)
        ) {
          showSuccess();
        }
      } else if (currentYear === '1985') {
        if (
          ( placeClockHouseCoffee) &&
          (currentCompany === 'Marty' ||
            currentCompany === 'Biff' ||
            currentCompany === 'Jennifer' ||
            currentCompany === george) &&
          (currentComplement === 'Einstein' ||
            currentComplement === 'Plutonio' ||
            currentComplement === cond ||
            currentComplement === radiation)
        ) {
          showSuccess();
        }
      } else if (currentYear === '1955') {
        if (
          ( placeClockHouseCoffee ||
            currentPlace === dance) &&
          (currentCompany === 'Biff' || currentCompany === george) &&
          (currentComplement === cond || currentComplement === radiation)
        ) {
          showSuccess();
        }
      } else if (currentYear === '2015') {
        if (
          (placeClockHouseCoffee ||
            currentPlace === hotel ) &&
          (currentCompany === 'Marty' ||
            currentCompany === 'Biff' ||
            currentCompany === 'Jennifer' ||
            currentCompany === george) &&
          (currentComplement === vest ||
            currentComplement === scooter ||
            currentComplement === 'Plutonio' ||
            currentComplement === cond ||
            currentComplement === radiation)
        ) {
          showSuccess();
        }
      }
    } else if (currentCharacter === 'Biff') {
      if (currentYear === '1885') {
        if (
          (currentPlace === clock || currentPlace === iron) &&
          (currentCompany === 'Clara' ||
            currentCompany === 'Doc' ||
            currentCompany === tannen) &&
          (currentComplement === train || currentComplement === horse)
        ) {
          showSuccess();
        }
      } else if (currentYear === '1985') {
        if (
          (placeClockHouseCoffee) &&
          (currentCompany === 'Marty' ||
            currentCompany === 'Doc' ||
            currentCompany === 'Jennifer' ||
            currentCompany === george) &&
          (currentComplement === 'Einstein' ||
            currentComplement === 'Plutonio' ||
            currentComplement === cond ||
            currentComplement === radiation)
        ) {
          showSuccess();
        }
      } else if (currentYear === '1955') {
        if (
          (placeClockHouseCoffee ||
            currentPlace === dance) &&
          (currentCompany === 'Doc' || currentCompany === george) &&
          (currentComplement === cond || currentComplement === radiation)
        ) {
          showSuccess();
        }
      } else if (currentYear === '2015') {
        if (
          (placeClockHouseCoffee ||
            currentPlace === hotel) &&
          (currentCompany === 'Marty' ||
            currentCompany === 'Doc' ||
            currentCompany === 'Jennifer' ||
            currentCompany === george) &&
          (currentComplement === vest ||
            currentComplement === scooter ||
            currentComplement === 'Plutonio' ||
            currentComplement === cond ||
            currentComplement === radiation)
        ) {
          showSuccess();
        }
      }
    } else if (currentCharacter === 'Jennifer') {
      if (currentYear === '1885') {
        if (
          (currentPlace === clock || currentPlace === iron) &&
          (currentCompany === 'Clara' ||
            currentCompany === 'Doc' ||
            currentCompany === tannen) &&
          (currentComplement === train || currentComplement === horse)
        ) {
          showSuccess();
        }
      } else if (currentYear === '1985') {
        if (
          (placeClockHouseCoffee) &&
          (currentCompany === 'Marty' ||
            currentCompany === 'Doc' ||
            currentCompany === 'Biff' ||
            currentCompany === george) &&
          (currentComplement === 'Einstein' ||
            currentComplement === 'Plutonio' ||
            currentComplement === cond ||
            currentComplement === radiation)
        ) {
          showSuccess();
        }
      } else if (currentYear === '1955') {
        if (
          (placeClockHouseCoffee||
            currentPlace === dance) &&
          (currentCompany === 'Doc' ||
            currentCompany === george ||
            currentCompany === 'Biff') &&
          (currentComplement === cond || currentComplement === radiation)
        ) {
          showSuccess();
        }
      } else if (currentYear === '2015') {
        if (
          (placeClockHouseCoffee ||
            currentPlace === hotel ) &&
          (currentCompany === 'Marty' ||
            currentCompany === 'Doc' ||
            currentCompany === 'Biff' ||
            currentCompany === george) &&
          (currentComplement === vest ||
            currentComplement === scooter ||
            currentComplement === 'Plutonio' ||
            currentComplement === cond ||
            currentComplement === radiation)
        ) {
          showSuccess();
        }
      }
    }
  } else if (totalCounter === 0) {
    for (const eachDice of dices) {
      eachDice.removeEventListener('click', handleDice); 
    }
    counter.classList.remove('hidden');
    counter.innerHTML = `Hay demasiadas paradojas temporales, has perdido... corre Marty!!!`;
    gifEnd.classList.remove('hidden');
    gifEnd.src = './images/Doc1.gif';
  }
};



