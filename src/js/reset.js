const handleReset = (e) => {
  e.preventDefault();
  character.src = './images/Delorean.gif';
  traveller.addEventListener('click', handleTraveller);
  for (const eachDice of dices) {
    eachDice.addEventListener('click', handleDice);
  }
  counter.innerHTML = ``;
  totalCounter = 7;
  gifEnd.classList.add('hidden');
  year.innerHTML = '';
  place.innerHTML = '';
  company.innerHTML = '';
  complement.innerHTML = '';
  currentCharacter ='';
  currentCompany = '';
  currentComplement = '';
  currentPlace= '';
  currentYear = '';
  final = '';
};

btnReset.addEventListener('click', handleReset);
