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
    'Einstein',
    'Plutonio',
    cond,
    radiation,
  ],
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const resultElementClasses = {
  year: '.js-resultYear',
  place: '.js-resultPlace',
  company: '.js-resultCompany',
  complement: '.js-resultComplement',
};

const handleDice = (e) => {
  totalCounter--;

  const idDice = e.currentTarget.id;

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
  for (const eachDice of dices) {
    eachDice.removeEventListener('click', handleDice);
  }
};

const showSuccess = () => {
  finalShow.classList.add('finalWin');
  finalShow.classList.add('slide');
  counter.innerHTML = '¡¡¡Has ganado, qué fuerte!!!';
  counter.classList.remove('hidden');
  gifEnd.classList.remove('hidden');
  btnResetGif.classList.remove('hidden');
  gifEnd.src = './images/200.gif';
  final = 'win';
  disabled();
};

const places1885 = [clock, iron];
const places1985 = [clock, house, coffee];
const places1955 = [...places1985, dance];
const places2015 = [...places1985, hotel];

const complement1885 = [train, horse];

const complement1955 = [cond, radiation];
const complement1985 = [...complement1955, 'Einstein', 'Plutonio'];
const complement2015 = [...complement1955, 'Plutonio', vest, scooter];

const win = () => {
  const conditions = {
    Marty: {
      1885: {
        places: places1885,
        companies: ['Doc', tannen, 'Clara'],
        complements: complement1885,
      },
      1985: {
        places: places1985,
        companies: ['Doc', 'Biff', 'Jennifer', george],
        complements: complement1985,
      },
      1955: {
        places: places1955,
        companies: ['Doc', 'Biff', george],
        complements: complement1955,
      },
      2015: {
        places: places2015,
        companies: ['Doc', 'Biff', 'Jennifer', george],
        complements: complement2015,
      },
    },
    Doc: {
      1885: {
        places: places1885,
        companies: ['Clara', tannen],
        complements: complement1885,
      },
      1985: {
        places: places1985,
        companies: ['Marty', 'Biff', 'Jennifer', george],
        complements: complement1985,
      },
      1955: {
        places: places1955,
        companies: ['Biff', george],
        complements: complement1955,
      },
      2015: {
        places: places2015,
        companies: ['Marty', 'Biff', 'Jennifer', george],
        complements: complement2015,
      },
    },
    Biff: {
      1885: {
        places: places1885,
        companies: ['Clara', 'Doc', tannen],
        complements: complement1885,
      },
      1985: {
        places: places1985,
        companies: ['Marty', 'Doc', 'Jennifer', george],
        complements: complement1985,
      },
      1955: {
        places: places1955,
        companies: ['Doc', george],
        complements: complement1955,
      },
      2015: {
        places: places2015,
        companies: ['Marty', 'Doc', 'Jennifer', george],
        complements: complement2015,
      },
    },
    Jennifer: {
      1885: {
        places: places1885,
        companies: ['Clara', 'Doc', tannen],
        complements: complement1885,
      },
      1985: {
        places: places1985,
        companies: ['Marty', 'Doc', 'Biff', george],
        complements: complement1985,
      },
      1955: {
        places: places1955,
        companies: ['Doc', george, 'Biff'],
        complements: complement1955,
      },
      2015: {
        places: places2015,
        companies: ['Marty', 'Doc', 'Biff', george],
        complements: complement2015,
      },
    },
  };

  const characterConditions = conditions[currentCharacter][currentYear];

  const isWin =
    characterConditions.places.includes(currentPlace) &&
    characterConditions.companies.includes(currentCompany) &&
    characterConditions.complements.includes(currentComplement);

  if (isWin) {
    errorContainer.classList.remove('errors');
    noRender(errorPlace);
    noRender(errorCompany);
    noRender(errorComplement);

    showSuccess();
  } else if (totalCounter === 0) {
    for (const eachDice of dices) {
      eachDice.removeEventListener('click', handleDice);
    }
    showLose();
  } else {
    counter.innerHTML = `Te quedan ${totalCounter} tiradas`;

   
    if (
      currentPlace !== '' &&
      !characterConditions.places.includes(currentPlace)
    ) {
      const message = `El lugar "${currentPlace}" no pertenece al año ${currentYear}.`;
      renderError(message, errorPlace);
      errorContainer.classList.add('errors');
    } 
    
    else if (
      currentPlace !== '' &&
      characterConditions.places.includes(currentPlace)
    ) {
      noRender(errorPlace);
    }

    if (
      currentCompany !== '' &&
      !characterConditions.companies.includes(currentCompany)
    ) {
      const message = `El personaje "${currentCompany}" no pertenece al año ${currentYear} o eres tú.`;
      renderError(message, errorCompany);
      errorContainer.classList.add('errors');
    } 
    
    else if (
      currentCompany !== '' &&
      characterConditions.companies.includes(currentCompany)
    ) {
      noRender(errorCompany);
    }

    if (
      currentComplement !== '' &&
      !characterConditions.complements.includes(currentComplement)
    ) {
      const message = `El complemento "${currentComplement}" no pertenece al año ${currentYear}.`;
      renderError(message, errorComplement);
      errorContainer.classList.add('errors');
    }
    
    else if (
      currentComplement !== '' &&
      characterConditions.complements.includes(currentComplement)
    ) {
     noRender(errorComplement);
    }
  }
};

const renderError = (message, element) => {
  element.innerHTML = `<i class='warning fa-solid fa-triangle-exclamation'></i>${message}`

};

const noRender = (element) => {
  element.innerHTML ='';
}

const showLose =()=>{

  finalShow.classList.add('finalLose');
  finalShow.classList.add('slide');
    counter.classList.remove('hidden');
    counter.innerHTML = `Hay demasiadas paradojas temporales, has perdido... corre Marty!!!`;
    gifEnd.classList.remove('hidden');
    btnResetGif.classList.remove('hidden');
    gifEnd.src = './images/Doc1.gif';
}