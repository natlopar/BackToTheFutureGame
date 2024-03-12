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
  return (currentPlace === clock || currentPlace === house || currentPlace === coffee) ? true : false ;
};

const handleDice = (e) => {
  totalCounter--;

  const idDice = e.currentTarget.id;
  let dice;

  const setDiceValues = (options, targetElement, targetVariable) => {
    dice = options[Math.floor(Math.random() * options.length)];
    targetElement.innerHTML = dice;
    targetVariable = dice;
  };

  switch (idDice) {
    case 'year':
      year.classList.remove('hidden');
      setDiceValues(['1885', '1985', '2015', '1955'], year, currentYear);
      break;
    case 'place':
      place.classList.remove('hidden');
      setDiceValues([clock, iron, hotel, dance, house, coffee], place, currentPlace);
      break;
    case 'company':
      company.classList.remove('hidden');
      setDiceValues(['Marty', 'Doc', 'Biff', 'Jennifer', george, tannen, 'Clara'], company, currentCompany);
      break;
    case 'complement':
      complement.classList.remove('hidden');
      setDiceValues([vest, scooter, train, horse, 'Einstein', 'Plutonio', cond, radiation], complement, currentComplement);
      break;
  }

  win();
};


const disabled = () => {

    for (const eachDice of dices) {
      eachDice.removeEventListener('click', handleDice);
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

