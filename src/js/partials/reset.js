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
  currentCharacter ='';
  resultCompany.innerHTML= '';
  resultComplement.innerHTML='';
  resultYear.innerHTML= '';
  resultPlace.innerHTML ='';
  currentCompany = '';
  currentComplement = '';
  currentPlace= '';
  currentYear = '';
  final = '';
  year.classList.add('hidden');
  place.classList.add('hidden');
  company.classList.add('hidden');
  complement.classList.add('hidden');
  gifEnd.classList.add('hidden');
};

btnReset.addEventListener('click', handleReset);
