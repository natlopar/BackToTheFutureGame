const handleTraveller = (e) => {
  let characterPlayer = e.target.innerText;
  character.classList.remove('hidden');
  btnReset.classList.remove('hidden');
  btnStart.classList.remove('hidden');

  if (characterPlayer === 'Marty') {
    character.src = Marty;
    character.alt = 'Imagen de Marty';
    currentCharacter = 'Marty';
  } else if (characterPlayer === 'Doc') {
    character.src = Doc;
    currentCharacter = 'Doc';
    character.alt = 'Imagen de Doc';
  } else if (characterPlayer === 'Biff') {
    character.src = Biff;
    currentCharacter = 'Biff';
    character.alt = 'Imagen de Biff';
  } else if (characterPlayer === 'Jennifer') {
    currentCharacter = 'Jennifer';
    character.src = Jennifer;
    character.alt = 'Imagen de Jennifer';
  }
};

traveller.addEventListener('click', handleTraveller);

const handleStartGame = (e) => {
  e.preventDefault();
  traveller.removeEventListener('click', handleTraveller);
  startDices = true;
  for (const eachDice of dices) {
    eachDice.addEventListener('click', handleDice);
  }
};

btnStart.addEventListener('click', handleStartGame);
