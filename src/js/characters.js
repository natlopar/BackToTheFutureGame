
const handleTraveller = (e) => {
    let characterPlayer = e.target.innerText;
    character.classList.remove('hidden');
    btnReset.classList.remove('hidden');
    btnStart.classList.remove('hidden');

    if (characterPlayer === "Marty"){
      character.src = '/images/Marty15.jpeg' //personaje elegido para viajar
    } else if (characterPlayer === "Doc"){
      character.src = '/images/Doc.jpeg'
    } else if (characterPlayer === "Biff"){
      character.src = '/images/biff.jpg'
    } else if (characterPlayer === "Jennifer"){
      character.src = '/images/Jennifer_Parker.webp'
    } 
  
  };
  
  traveller.addEventListener('click', handleTraveller);
  
  
  