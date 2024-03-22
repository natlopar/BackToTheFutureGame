const handleReset = (e) => {
  e.preventDefault();
  character.src = './images/Delorean.gif';
  traveller.addEventListener('click', handleTraveller);
  for (const eachDice of dices) {
    eachDice.addEventListener('click', handleDice);
  }
  resetCurrent();
  totalCounter = 7;
  resetResult();
  final = '';
  hidden();
  resetError();
};

btnReset.addEventListener('click', handleReset);


const resetError =()=>{
  errorPlace.innerHTML = '';
  errorCompany.innerHTML = '';
  errorComplement.innerHTML = '';
}

const hidden =()=>{
  resultYear.classList.add('hidden');
  resultPlace.classList.add('hidden');
  resultCompany.classList.add('hidden');
  resultComplement.classList.add('hidden');
  gifEnd.classList.add('hidden');

}

const resetCurrent =()=>{
  counter.innerHTML = '';
  currentCharacter ='';
  currentCompany = '';
  currentComplement = '';
  currentPlace= '';
  currentYear = '';
}

const resetResult =()=>{
  resultCompany.innerHTML= '';
  resultComplement.innerHTML='';
  resultYear.innerHTML= '';
  resultPlace.innerHTML ='';  

}