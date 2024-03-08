
const handleTraveller = (e) => {
    let characterPlayer = e.target.innerText;
    character.classList.remove('hidden');
    btnReset.classList.remove('hidden');
    btnStart.classList.remove('hidden');
    for (const eachDice of dices) {
      eachDice.addEventListener('click', handleDice);
    }
    

    if (characterPlayer === "Marty"){
      character.src = Marty; //personaje elegido para viajar
      currentCharacter = 'Marty';
    } else if (characterPlayer === "Doc"){
      character.src = Doc;
      currentCharacter = 'Doc';
    } else if (characterPlayer === "Biff"){
      character.src = Biff;
      currentCharacter = 'Biff';
    } else if (characterPlayer === "Jennifer"){
      currentCharacter = 'Jennifer';
      character.src = Jennifer;
    } 
  
  };
  


  traveller.addEventListener('click', handleTraveller);

  
  
  
