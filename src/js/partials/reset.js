const handleReset = (e) => {
  startDices = false;
  for (const eachDice of dices) {
    eachDice.removeEventListener('click', handleDice);
  }
  console.log(startDices);
  e.preventDefault();
  character.src = './images/Delorean.gif';
  traveller.addEventListener('click', handleTraveller);
  resetCurrent();
  totalCounter = 7;
  resetResult();
  final = '';
  hidden();
  resetError();
  finalShow.classList.remove('finalWin');
  finalShow.classList.remove('finalLose');
  finalShow.classList.remove('slide');
};

btnReset.addEventListener('click', handleReset);

const resetError = () => {
  errorPlace.innerHTML = '';
  errorCompany.innerHTML = '';
  errorComplement.innerHTML = '';
  errorPlace.classList.remove('errors');
  errorCompany.classList.remove('errors');
  errorComplement.classList.remove('errors');
};

const hidden = () => {
  resultYear.classList.add('hidden');
  resultPlace.classList.add('hidden');
  resultCompany.classList.add('hidden');
  resultComplement.classList.add('hidden');
  gifEnd.classList.add('hidden');
  counter.classList.add('hidden');
  btnResetGif.classList.add('hidden');
};

const resetCurrent = () => {
  counter.innerHTML = '';

  currentCharacter = '';
  currentCompany = '';
  currentComplement = '';
  currentPlace = '';
  currentYear = '';
};

const resetResult = () => {
  resultCompany.innerHTML = '';
  resultComplement.innerHTML = '';
  resultYear.innerHTML = '';
  resultPlace.innerHTML = '';
};

btnResetGif.addEventListener('click', handleReset);
