const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  
const handleDice = (e) => {
  totalCounter = totalCounter -1;
    const idDice = e.currentTarget.id;  

    if (idDice.includes('year')) {
      let dice = Math.floor(Math.random() * 4) + 1;
      year.classList.remove('hidden');
      resultYear.innerHTML= dice;
      if (dice === 1) {
        year.innerHTML = '1885';
        currentYear = '1885';
      } else if (dice === 2) {
        year.innerHTML = '1985';
        currentYear = '1985';
      } else if (dice === 3) {
        year.innerHTML = '2015';
        currentYear = '2015';
      } else if (dice === 4) {
        year.innerHTML = '1955';
        currentYear = '1955';
      }
    } else if (idDice.includes('place')){
      let dice = getRandomNumber();
      place.classList.remove('hidden');
      resultPlace.innerHTML = dice;
      if (dice === 1) {
          place.innerHTML = 'Reloj de la Torre';
          currentPlace = 'Reloj de la Torre';
        } else if (dice === 2) {
          place.innerHTML = 'Herrería de Doc';
          currentPlace = 'Herrería de Doc';
        } else if (dice === 3) {
          place.innerHTML = 'Hotel Biff`s';
          currentPlace ='Hotel Biff`s';
        } else if (dice === 4) {
          place.innerHTML = 'Baile del Encantamiento Bajo el Mar';
          currentPlace ='Baile del Encantamiento Bajo el Mar';
        } else if (dice === 5) {
          place.innerHTML = 'Casa de Marty';
          currentPlace ='Casa de Marty';
        } else if (dice === 6) {
          place.innerHTML = 'Cafetería';
          currentPlace ='Cafetería';
        }
    } else if (idDice.includes('company')){
      let dice = Math.floor(Math.random() * 7) + 1;
      company.classList.remove('hidden');
      resultCompany.innerHTML = dice;
      if (dice === 1) {
          company.innerHTML = 'Marty';
          currentCompany= 'Marty';
        } else if (dice === 2) {
          company.innerHTML = 'Doc';
          currentCompany='Doc';
        } else if (dice === 3) {
          company.innerHTML = 'Biff';
          currentCompany='Biff';
        } else if (dice === 4) {
          company.innerHTML = 'Jennifer';
          currentCompany='Jennifer';
        } else if (dice === 5) {
          company.innerHTML = 'George y Lorraine';
          currentCompany='George y Lorraine';
        } else if (dice === 6) {
          company.innerHTML = 'Perro Rabioso Tannen';
          currentCompany='Perro Rabioso Tannen';
        } else if (dice === 7) {
          company.innerHTML = 'Clara';
          currentCompany='Clara';
        }
    } else if (idDice.includes('complement')){
      let dice = Math.floor(Math.random() * 8) + 1;
      complement.classList.remove('hidden');
      resultComplement.innerHTML = dice;
      if (dice === 1) {
          complement.innerHTML = 'Chaleco con autosecado';
          currentComplement='Chaleco con autosecado';
        } else if (dice === 2) {
          complement.innerHTML = 'Patinete volador';
          currentComplement= 'Patinete volador';
        } else if (dice === 3) {
          complement.innerHTML = 'Tren del tiempo';
          currentComplement= 'Tren del tiempo';
        } else if (dice === 4) {
          complement.innerHTML = 'Caballo de Doc';
          currentComplement='Caballo de Doc';
        } else if (dice === 5) {
          complement.innerHTML = 'Einstein';
          currentComplement='Einstein';
        } else if (dice === 6) {
          complement.innerHTML = 'Plutonio';
          currentComplement='Plutonio';
        } else if (dice === 7) {
          complement.innerHTML = 'Condensador de fluzo';
          currentComplement='Condensador de fluzo';
        } else if (dice === 8) {
          complement.innerHTML = 'Traje antirradiación';
          currentComplement='Traje antirradiación';
        }
    }
    win();
   
  };
  



  const win = () =>{
 
      
    if (totalCounter > 0){
     
      counter.innerHTML= `Te quedan ${totalCounter} tiradas`;
     
      if (currentCharacter === 'Marty'){
        if(currentYear === '1885'){
          if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Herrería de Doc') && (currentCompany === 'Doc' || currentCompany === 'Perro Rabioso Tannen' || currentCompany === 'Clara') && (currentComplement === 'Tren del tiempo' || currentComplement === 'Caballo de Doc')){
           
            counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
            counter.classList.remove('hidden');
            gifEnd.classList.remove('hidden');
             gifEnd.src = "./images/200.gif";
             final = 'win';
             disabled();
        
          } 
        } else if (currentYear === '1985') {
          if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería')   && (currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Einstein' || currentComplement === 'Plutonio'|| currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
            counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
            counter.classList.remove('hidden');
            gifEnd.classList.remove('hidden');
             gifEnd.src = "./images/200.gif";
             final = 'win';
             disabled();
          }
        } else if (currentYear === '1955') {
          if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería'  || currentPlace === 'Baile del Encantamiento Bajo el Mar')   && (currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
            counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
            counter.classList.remove('hidden');
            gifEnd.classList.remove('hidden');
             gifEnd.src = "./images/200.gif";
             final = 'win';
             disabled();
          }
        } else if (currentYear === '2015') {
          if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Hotel Biff`s' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' )   && (currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación' || currentComplement === 'Chaleco con autosecado' || currentComplement === 'Patinete volador' || currentComplement === 'Plutonio' || currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
            counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
            counter.classList.remove('hidden');
            gifEnd.classList.remove('hidden');
             gifEnd.src = "./images/200.gif";
             final = 'win';
             disabled();
          }
        }
    } else if (currentCharacter === 'Doc'){
      if(currentYear === '1885'){
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Herrería de Doc') && (currentCompany === 'Clara' || currentCompany === 'Perro Rabioso Tannen') && (currentComplement === 'Tren del tiempo' || currentComplement === 'Caballo de Doc')){
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          counter.classList.remove('hidden');
          gifEnd.classList.remove('hidden');
          counter.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        } 
      } else if (currentYear === '1985') {
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería')   && (currentCompany === 'Marty' || currentCompany === 'Biff' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Einstein' || currentComplement === 'Plutonio'|| currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          counter.classList.remove('hidden');
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        }
      } else if (currentYear === '1955') {
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' || currentPlace === 'Baile del Encantamiento Bajo el Mar')   && (currentCompany === 'Biff' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          counter.classList.remove('hidden');
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        }
      } else if (currentYear === '2015') {
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Hotel Biff`s' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' )   && (currentCompany === 'Marty' || currentCompany === 'Biff' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación' || currentComplement === 'Chaleco con autosecado' || currentComplement === 'Patinete volador' || currentComplement === 'Plutonio' || currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          counter.classList.remove('hidden');
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        }
      }

    } else if (currentCharacter === 'Biff') {

      if(currentYear === '1885'){
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Herrería de Doc') && (currentCompany === 'Clara' || currentCompany === 'Doc'|| currentCompany === 'Perro Rabioso Tannen') && (currentComplement === 'Tren del tiempo' || currentComplement === 'Caballo de Doc')){
     
          counter.classList.remove('hidden');
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        } 
      } else if (currentYear === '1985') {
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería')   && (currentCompany === 'Marty' || currentCompany === 'Doc' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Einstein' || currentComplement === 'Plutonio'|| currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
          counter.classList.remove('hidden');
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        }
      } else if (currentYear === '1955') {
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' || currentPlace === 'Baile del Encantamiento Bajo el Mar')   && (currentCompany === 'Doc' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          counter.classList.remove('hidden');
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        }
      } else if (currentYear === '2015') {
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Hotel Biff`s' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' )   && (currentCompany === 'Marty' || currentCompany === 'Doc' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación' || currentComplement === 'Chaleco con autosecado' || currentComplement === 'Patinete volador' || currentComplement === 'Plutonio' || currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          counter.classList.remove('hidden');
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        }
      }
    } else if (currentCharacter === 'Jennifer') {
      if(currentYear === '1885'){
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Herrería de Doc') && (currentCompany === 'Clara' || currentCompany === 'Doc' || currentCompany === 'Perro Rabioso Tannen') && (currentComplement === 'Tren del tiempo' || currentComplement === 'Caballo de Doc')){
         
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          counter.classList.remove('hidden');
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        } 
      } else if (currentYear === '1985') {
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería')   && (currentCompany === 'Marty' || currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'George y Lorraine') && (currentComplement === 'Einstein' || currentComplement === 'Plutonio'|| currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
          counter.classList.remove('hidden');
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        }
      } else if (currentYear === '1955') {
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' || currentPlace === 'Baile del Encantamiento Bajo el Mar')   && (currentCompany === 'Doc' || currentCompany === 'George y Lorraine' || currentCompany === 'Biff') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          counter.classList.remove('hidden');
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
           final = 'win';
           disabled();
        }
      } else if (currentYear === '2015') {
        if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Hotel Biff`s' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' )   && (currentCompany === 'Marty' || currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación' || currentComplement === 'Chaleco con autosecado' || currentComplement === 'Patinete volador' || currentComplement === 'Plutonio' || currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
          counter.innerHTML= '¡¡¡Has ganado, qué fuerte!!!';
          counter.classList.remove('hidden');
          final = 'win';
          disabled();
          gifEnd.classList.remove('hidden');
           gifEnd.src = "./images/200.gif";
        }
      }
    }
   
          
  
    } else if (totalCounter === 0 ) {
      
      for (const eachDice of dices) {
        eachDice.removeEventListener('click', handleDice);    //revisar esto
      }
      counter.classList.remove('hidden');
      counter.innerHTML= `Hay demasiadas paradojas temporales, has perdido... corre Marty!!!`;
      gifEnd.classList.remove('hidden');
      gifEnd.src = "./images/Doc1.gif";
      
    }
   
  }
const disabled =()=>{

  if (final === 'win'){
    for (const eachDice of dices) {
      eachDice.removeEventListener('click', handleDice);    //revisar esto
    }
  }
}