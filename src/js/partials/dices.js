

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
  counter.classList.remove('hidden');

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
    // errorContainer.classList.remove('errors');
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
      // errorContainer.classList.add('errors');
    } else if (
      currentPlace !== '' &&
      characterConditions.places.includes(currentPlace)
    ) {
      noRender(errorPlace);

    if (
      currentCompany !== '' &&
      !characterConditions.companies.includes(currentCompany)
    ) {
      const message = `El personaje "${currentCompany}" no pertenece al año ${currentYear} o es tu personaje (eso destruiría el universo).`;
      renderError(message, errorCompany);
      // errorContainer.classList.add('errors');
    } else if (
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
      // errorContainer.classList.add('errors');
    } else if (
      currentComplement !== '' &&
      characterConditions.complements.includes(currentComplement)
    ) {
      noRender(errorComplement);
      
      
    }
  }
  }
};

const renderError = (message, element) => {
  element.innerHTML = `<i class='warning fa-solid fa-triangle-exclamation'></i>${message}`;
  element.classList.add('errors');
};

const noRender = (element) => {
  element.innerHTML = '';
  element.classList.remove('errors');


};

const showLose = () => {
  finalShow.classList.add('finalLose');
  finalShow.classList.add('slide');
  counter.classList.remove('hidden');
  counter.innerHTML = `Hay demasiadas paradojas temporales, has perdido... corre Marty!!!`;
  gifEnd.classList.remove('hidden');
  btnResetGif.classList.remove('hidden');
  gifEnd.src = './images/Doc1.gif';
};
