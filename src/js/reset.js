const handleReset = (e) => {
  e.preventDefault();
  character.src = '/images/Delorean.gif';
  traveller.addEventListener('click', handleTraveller);
  for (const eachDice of dices) {
    eachDice.addEventListener('click', handleDice);
  }
  counter.innerHTML = `Te quedan ${totalCounter} tiradas`;
  totalCounter = 7;
  gifEnd.classList.add('hidden');
  year.innerHTML = '';
  place.innerHTML = '';
  company.innerHTML = '';
  complement.innerHTML = '';
};

btnReset.addEventListener('click', handleReset);
