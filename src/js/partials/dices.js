const getRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
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




const win = () => {
 
  const characterConditions = conditions[currentCharacter][currentYear];

  const isWin =
    characterConditions.places.includes(currentPlace) &&
    characterConditions.companies.includes(currentCompany) &&
    characterConditions.complements.includes(currentComplement);

  if (isWin) {
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
    if (key) {
      if (
        currentPlace !== '' &&
        !characterConditions.places.includes(currentPlace)
      ) {
        const message = `El lugar "${currentPlace}" no pertenece al año ${currentYear}.`;
        renderError(message, errorPlace);
      } else if (
        currentPlace !== '' &&
        characterConditions.places.includes(currentPlace)
      ) {
        noRender(errorPlace);
      }

      if (
        currentCompany !== '' &&
        !characterConditions.companies.includes(currentCompany)
      ) {
        const message = `El personaje "${currentCompany}" no pertenece al año ${currentYear} o es tu personaje (eso destruiría el universo).`;
        renderError(message, errorCompany);
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
      } else if (
        currentComplement !== '' &&
        characterConditions.complements.includes(currentComplement)
      ) {
        noRender(errorComplement);
      }
    }
  }
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


module.exports = {getRandomNumber};
