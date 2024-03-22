const clock = 'Reloj de la Torre';
const iron = 'Herrería de Doc';
const hotel = 'Hotel Biff`s';
const dance = 'Baile del Encantamiento Bajo el Mar';
const house = 'Casa de Marty';
const coffee = 'Cafetería';
const george = 'George y Lorraine';
const tannen = 'Perro Rabioso Tannen';
const vest = 'Chaleco con autosecado';
const scooter = 'Patinete volador';
const train = 'Tren del tiempo';
const horse = 'Caballo de Doc';
const cond = 'Condensador de fluzo';
const radiation = 'Traje antirradiación';
const options = {
  'year': ['1885', '1985', '2015', '1955'],
  'place': [clock, iron, hotel, dance, house, coffee],
  'company': ['Marty', 'Doc', 'Biff', 'Jennifer', george, tannen, 'Clara'],
  'complement': [vest, scooter, train, horse, 'Einstein', 'Plutonio', cond, radiation]
};


const getRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const placeClockHouseCoffee = () => {
  currentPlace === clock || currentPlace === house || currentPlace === coffee
    ? true
    : false;
};

const companyBiffJennGeorge = () =>{
 return ( currentCompany === 'Biff' ||
 currentCompany === 'Jennifer' ||
 currentCompany === george) ? true : false
}


const complPluCondRad = () =>{

  return (
  currentComplement === 'Plutonio' ||
  currentComplement === cond ||
  currentComplement === radiation) ? true : false
  
}


const resultElementClasses = {
  'year': '.js-resultYear',
  'place': '.js-resultPlace',
  'company': '.js-resultCompany',
  'complement': '.js-resultComplement'
};

const handleDice = (e) => {
  totalCounter--;

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
  if (final === 'win') {
    for (const eachDice of dices) {
      eachDice.removeEventListener('click', handleDice);
    }
  }
};

const showSuccess = () => {
  counter.innerHTML = '¡¡¡Has ganado, qué fuerte!!!';
  counter.classList.remove('hidden');
  gifEnd.classList.remove('hidden');
  gifEnd.src = './images/200.gif';
  final = 'win';
  disabled();
};

// const win = () => {
//   if (totalCounter > 0) {
//     counter.innerHTML = `Te quedan ${totalCounter} tiradas`;

//     if (currentCharacter === 'Marty') {
//       if (currentYear === '1885') {
//         if (
//           (currentPlace === clock || currentPlace === iron) &&
//           (currentCompany === 'Doc' ||
//             currentCompany === tannen ||
//             currentCompany === 'Clara') &&
//           (currentComplement === train || currentComplement === horse)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '1985') {
//         if (
//           placeClockHouseCoffee &&
//           (currentCompany === 'Doc' ||
//           companyBiffJennGeorge) &&
//           (currentComplement === 'Einstein' ||
//           complPluCondRad)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '1955') {
//         if (
//           ( placeClockHouseCoffee ||
//             currentPlace === dance) &&
//           (currentCompany === 'Doc' ||
//             currentCompany === 'Biff' ||
//             currentCompany === george) &&
//           (currentComplement === cond || currentComplement === radiation)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '2015') {
//         if (
//           ( placeClockHouseCoffee ||
//             currentPlace === hotel
//           ) &&
//           (currentCompany === 'Doc' ||
//           companyBiffJennGeorge) &&
//           (currentComplement === vest ||
//             currentComplement === scooter ||
//             complPluCondRad)
//         ) {
//           showSuccess();
//         }
//       }
//     } else if (currentCharacter === 'Doc') {
//       if (currentYear === '1885') {
//         if (
//           (currentPlace === clock || currentPlace === iron) &&
//           (currentCompany === 'Clara' || currentCompany === tannen) &&
//           (currentComplement === train || currentComplement === horse)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '1985') {
//         if (
//           ( placeClockHouseCoffee) &&
//           (currentCompany === 'Marty' ||
//           companyBiffJennGeorge) &&
//           (currentComplement === 'Einstein' ||
//           complPluCondRad)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '1955') {
//         if (
//           ( placeClockHouseCoffee ||
//             currentPlace === dance) &&
//           (currentCompany === 'Biff' || currentCompany === george) &&
//           (currentComplement === cond || currentComplement === radiation)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '2015') {
//         if (
//           (placeClockHouseCoffee ||
//             currentPlace === hotel ) &&
//           (currentCompany === 'Marty' ||
//           companyBiffJennGeorge) &&
//           (currentComplement === vest ||
//             currentComplement === scooter ||
//             complPluCondRad)
//         ) {
//           showSuccess();
//         }
//       }
//     } else if (currentCharacter === 'Biff') {
//       if (currentYear === '1885') {
//         if (
//           (currentPlace === clock || currentPlace === iron) &&
//           (currentCompany === 'Clara' ||
//             currentCompany === 'Doc' ||
//             currentCompany === tannen) &&
//           (currentComplement === train || currentComplement === horse)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '1985') {
//         if (
//           (placeClockHouseCoffee) &&
//           (currentCompany === 'Marty' ||
//             currentCompany === 'Doc' ||
//             currentCompany === 'Jennifer' ||
//             currentCompany === george) &&
//           (currentComplement === 'Einstein' ||
//           complPluCondRad)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '1955') {
//         if (
//           (placeClockHouseCoffee ||
//             currentPlace === dance) &&
//           (currentCompany === 'Doc' || currentCompany === george) &&
//           (currentComplement === cond || currentComplement === radiation)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '2015') {
//         if (
//           (placeClockHouseCoffee ||
//             currentPlace === hotel) &&
//           (currentCompany === 'Marty' ||
//             currentCompany === 'Doc' ||
//             currentCompany === 'Jennifer' ||
//             currentCompany === george) &&
//           (currentComplement === vest ||
//             currentComplement === scooter ||
//             complPluCondRad)
//         ) {
//           showSuccess();
//         }
//       }
//     } else if (currentCharacter === 'Jennifer') {
//       if (currentYear === '1885') {
//         if (
//           (currentPlace === clock || currentPlace === iron) &&
//           (currentCompany === 'Clara' ||
//             currentCompany === 'Doc' ||
//             currentCompany === tannen) &&
//           (currentComplement === train || currentComplement === horse)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '1985') {
//         if (
//           (placeClockHouseCoffee) &&
//           (currentCompany === 'Marty' ||
//             currentCompany === 'Doc' ||
//             currentCompany === 'Biff' ||
//             currentCompany === george) &&
//           (currentComplement === 'Einstein' ||
//           complPluCondRad)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '1955') {
//         if (
//           (placeClockHouseCoffee||
//             currentPlace === dance) &&
//           (currentCompany === 'Doc' ||
//             currentCompany === george ||
//             currentCompany === 'Biff') &&
//           (currentComplement === cond || currentComplement === radiation)
//         ) {
//           showSuccess();
//         }
//       } else if (currentYear === '2015') {
//         if (
//           (placeClockHouseCoffee ||
//             currentPlace === hotel ) &&
//           (currentCompany === 'Marty' ||
//             currentCompany === 'Doc' ||
//             currentCompany === 'Biff' ||
//             currentCompany === george) &&
//           (currentComplement === vest ||
//             currentComplement === scooter ||
//             complPluCondRad)
//         ) {
//           showSuccess();
//         }
//       }
//     }
//   } else if (totalCounter === 0) {
//     for (const eachDice of dices) {
//       eachDice.removeEventListener('click', handleDice); 
//     }
//     counter.classList.remove('hidden');
//     counter.innerHTML = `Hay demasiadas paradojas temporales, has perdido... corre Marty!!!`;
//     gifEnd.classList.remove('hidden');
//     gifEnd.src = './images/Doc1.gif';
//   }
// };



// const getRandomNumber = () => {
//     return Math.floor(Math.random() * 6) + 1;
//   };
  
// const handleDice = (e) => {
//   totalCounter = totalCounter -1;
//     const idDice = e.currentTarget.id;  

//     if (idDice.includes('year')) {
//       let dice = Math.floor(Math.random() * 4) + 1;
//       year.classList.remove('hidden');
//       resultYear.innerHTML= dice;
//       if (dice === 1) {
//         year.innerHTML = '1885';
//         currentYear = '1885';
//       } else if (dice === 2) {
//         year.innerHTML = '1985';
//         currentYear = '1985';
//       } else if (dice === 3) {
//         year.innerHTML = '2015';
//         currentYear = '2015';
//       } else if (dice === 4) {
//         year.innerHTML = '1955';
//         currentYear = '1955';
//       }
//     } else if (idDice.includes('place')){
//       let dice = getRandomNumber();
//       place.classList.remove('hidden');
//       resultPlace.innerHTML = dice;
//       if (dice === 1) {
//           place.innerHTML = 'Reloj de la Torre';
//           currentPlace = 'Reloj de la Torre';
//         } else if (dice === 2) {
//           place.innerHTML = 'Herrería de Doc';
//           currentPlace = 'Herrería de Doc';
//         } else if (dice === 3) {
//           place.innerHTML = 'Hotel Biff`s';
//           currentPlace ='Hotel Biff`s';
//         } else if (dice === 4) {
//           place.innerHTML = 'Baile del Encantamiento Bajo el Mar';
//           currentPlace ='Baile del Encantamiento Bajo el Mar';
//         } else if (dice === 5) {
//           place.innerHTML = 'Casa de Marty';
//           currentPlace ='Casa de Marty';
//         } else if (dice === 6) {
//           place.innerHTML = 'Cafetería';
//           currentPlace ='Cafetería';
//         }
//     } else if (idDice.includes('company')){
//       let dice = Math.floor(Math.random() * 7) + 1;
//       company.classList.remove('hidden');
//       resultCompany.innerHTML = dice;
//       if (dice === 1) {
//           company.innerHTML = 'Marty';
//           currentCompany= 'Marty';
//         } else if (dice === 2) {
//           company.innerHTML = 'Doc';
//           currentCompany='Doc';
//         } else if (dice === 3) {
//           company.innerHTML = 'Biff';
//           currentCompany='Biff';
//         } else if (dice === 4) {
//           company.innerHTML = 'Jennifer';
//           currentCompany='Jennifer';
//         } else if (dice === 5) {
//           company.innerHTML = 'George y Lorraine';
//           currentCompany='George y Lorraine';
//         } else if (dice === 6) {
//           company.innerHTML = 'Perro Rabioso Tannen';
//           currentCompany='Perro Rabioso Tannen';
//         } else if (dice === 7) {
//           company.innerHTML = 'Clara';
//           currentCompany='Clara';
//         }
//     } else if (idDice.includes('complement')){
//       let dice = Math.floor(Math.random() * 8) + 1;
//       complement.classList.remove('hidden');
//       resultComplement.innerHTML = dice;
//       if (dice === 1) {
//           complement.innerHTML = 'Chaleco con autosecado';
//           currentComplement='Chaleco con autosecado';
//         } else if (dice === 2) {
//           complement.innerHTML = 'Patinete volador';
//           currentComplement= 'Patinete volador';
//         } else if (dice === 3) {
//           complement.innerHTML = 'Tren del tiempo';
//           currentComplement= 'Tren del tiempo';
//         } else if (dice === 4) {
//           complement.innerHTML = 'Caballo de Doc';
//           currentComplement='Caballo de Doc';
//         } else if (dice === 5) {
//           complement.innerHTML = 'Einstein';
//           currentComplement='Einstein';
//         } else if (dice === 6) {
//           complement.innerHTML = 'Plutonio';
//           currentComplement='Plutonio';
//         } else if (dice === 7) {
//           complement.innerHTML = 'Condensador de fluzo';
//           currentComplement='Condensador de fluzo';
//         } else if (dice === 8) {
//           complement.innerHTML = 'Traje antirradiación';
//           currentComplement='Traje antirradiación';
//         }
//     }
//     win();
   
//   };
  



  // const win = () =>{
 
      
  //   if (totalCounter > 0){
     
  //     counter.innerHTML= `Te quedan ${totalCounter} tiradas`;
     
  //     if (currentCharacter === 'Marty'){
  //       if(currentYear === '1885'){
  //         if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Herrería de Doc') && (currentCompany === 'Doc' || currentCompany === 'Perro Rabioso Tannen' || currentCompany === 'Clara') && (currentComplement === 'Tren del tiempo' || currentComplement === 'Caballo de Doc')){
           
  //           showSuccess()
  //         } 
  //       } else if (currentYear === '1985') {
  //         if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería')   && (currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Einstein' || currentComplement === 'Plutonio'|| currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //           showSuccess()
  //         }
  //       } else if (currentYear === '1955') {
  //         if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería'  || currentPlace === 'Baile del Encantamiento Bajo el Mar')   && (currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //        showSuccess()
  //         }
  //       } else if (currentYear === '2015') {
  //         if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Hotel Biff`s' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' )   && (currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación' || currentComplement === 'Chaleco con autosecado' || currentComplement === 'Patinete volador' || currentComplement === 'Plutonio' || currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //           showSuccess()
  //         }
  //       }
  //   } else if (currentCharacter === 'Doc'){
  //     if(currentYear === '1885'){
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Herrería de Doc') && (currentCompany === 'Clara' || currentCompany === 'Perro Rabioso Tannen') && (currentComplement === 'Tren del tiempo' || currentComplement === 'Caballo de Doc')){
  //       showSuccess()
  //       } 
  //     } else if (currentYear === '1985') {
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería')   && (currentCompany === 'Marty' || currentCompany === 'Biff' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Einstein' || currentComplement === 'Plutonio'|| currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //        showSuccess()
  //       }
  //     } else if (currentYear === '1955') {
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' || currentPlace === 'Baile del Encantamiento Bajo el Mar')   && (currentCompany === 'Biff' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //      showSuccess()
  //       }
  //     } else if (currentYear === '2015') {
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Hotel Biff`s' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' )   && (currentCompany === 'Marty' || currentCompany === 'Biff' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación' || currentComplement === 'Chaleco con autosecado' || currentComplement === 'Patinete volador' || currentComplement === 'Plutonio' || currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //         showSuccess()
  //       }
  //     }

  //   } else if (currentCharacter === 'Biff') {

  //     if(currentYear === '1885'){
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Herrería de Doc') && (currentCompany === 'Clara' || currentCompany === 'Doc'|| currentCompany === 'Perro Rabioso Tannen') && (currentComplement === 'Tren del tiempo' || currentComplement === 'Caballo de Doc')){
     
  //         showSuccess()
  //       } 
  //     } else if (currentYear === '1985') {
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería')   && (currentCompany === 'Marty' || currentCompany === 'Doc' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Einstein' || currentComplement === 'Plutonio'|| currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //         showSuccess()
  //       }
  //     } else if (currentYear === '1955') {
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' || currentPlace === 'Baile del Encantamiento Bajo el Mar')   && (currentCompany === 'Doc' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //         showSuccess()
  //       }
  //     } else if (currentYear === '2015') {
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Hotel Biff`s' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' )   && (currentCompany === 'Marty' || currentCompany === 'Doc' || currentCompany === 'Jennifer' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación' || currentComplement === 'Chaleco con autosecado' || currentComplement === 'Patinete volador' || currentComplement === 'Plutonio' || currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //         showSuccess()
  //       }
  //     }
  //   } else if (currentCharacter === 'Jennifer') {
  //     if(currentYear === '1885'){
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Herrería de Doc') && (currentCompany === 'Clara' || currentCompany === 'Doc' || currentCompany === 'Perro Rabioso Tannen') && (currentComplement === 'Tren del tiempo' || currentComplement === 'Caballo de Doc')){
         
  //         showSuccess()
  //       } 
  //     } else if (currentYear === '1985') {
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería')   && (currentCompany === 'Marty' || currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'George y Lorraine') && (currentComplement === 'Einstein' || currentComplement === 'Plutonio'|| currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //         showSuccess()
  //       }
  //     } else if (currentYear === '1955') {
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' || currentPlace === 'Baile del Encantamiento Bajo el Mar')   && (currentCompany === 'Doc' || currentCompany === 'George y Lorraine' || currentCompany === 'Biff') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //         showSuccess()
  //       }
  //     } else if (currentYear === '2015') {
  //       if((currentPlace === 'Reloj de la Torre' || currentPlace === 'Hotel Biff`s' || currentPlace === 'Casa de Marty' || currentPlace === 'Cafetería' )   && (currentCompany === 'Marty' || currentCompany === 'Doc' || currentCompany === 'Biff' || currentCompany === 'George y Lorraine') && (currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación' || currentComplement === 'Chaleco con autosecado' || currentComplement === 'Patinete volador' || currentComplement === 'Plutonio' || currentComplement === 'Condensador de fluzo' || currentComplement === 'Traje antirradiación')){
  //         showSuccess()
  //       }
  //     }
  //   }
   
          
  
  //   } else if (totalCounter === 0 ) {
      
  //     for (const eachDice of dices) {
  //       eachDice.removeEventListener('click', handleDice);    //revisar esto
  //     }
  //     counter.classList.remove('hidden');
  //     counter.innerHTML= `Hay demasiadas paradojas temporales, has perdido... corre Marty!!!`;
  //     gifEnd.classList.remove('hidden');
  //     gifEnd.src = "./images/Doc1.gif";
      
  //   }
   
  // }


  const win = () => {
    // Define un objeto con las condiciones de cada personaje por año
    const conditions = {
      'Marty': {
        '1885': { places: [clock, iron], companies: ['Doc', tannen, 'Clara'], complements: [train, horse] },
        '1985': { places: [clock, house, coffee], companies: ['Doc', 'Biff', 'Jennifer', george], complements: ['Einstein', 'Plutonio', cond, radiation] },
        '1955': { places: [clock, house, coffee, dance], companies: ['Doc', 'Biff', george], complements: [cond, radiation] },
        '2015': { places: [clock, hotel, house, coffee], companies: ['Doc', 'Biff', 'Jennifer', george], complements: [cond, radiation, vest, scooter, 'Plutonio'] }
      },
      'Doc': {
        '1885': { places: [clock, iron], companies: ['Clara', tannen], complements: [train, horse] },
        '1985': { places: [clock, house, coffee], companies: ['Marty', 'Biff', 'Jennifer', george], complements: ['Einstein', 'Plutonio', cond, radiation] },
        '1955': { places: [clock, house, coffee, dance], companies: ['Biff', george], complements: [cond, radiation] },
        '2015': { places: [clock, hotel, house, coffee], companies: ['Marty', 'Biff', 'Jennifer', george], complements: [cond, radiation, vest, scooter, 'Plutonio'] }
      },
      'Biff': {
        '1885': { places: [clock, iron], companies: ['Clara', 'Doc', tannen], complements: [train, horse] },
        '1985': { places: [clock, house, coffee], companies: ['Marty', 'Doc', 'Jennifer', george], complements: ['Einstein', 'Plutonio', cond, radiation] },
        '1955': { places: [clock, house, coffee, dance], companies: ['Doc', george], complements: [cond, radiation] },
        '2015': { places: [clock, hotel, house, coffee], companies: ['Marty', 'Doc', 'Jennifer', george], complements: [cond, radiation, vest, scooter, 'Plutonio'] }
      },
      'Jennifer': {
        '1885': { places: [clock, iron], companies: ['Clara', 'Doc', tannen], complements: [train, horse] },
        '1985': { places: [clock, house, coffee], companies: ['Marty', 'Doc', 'Biff', george], complements: ['Einstein', 'Plutonio', cond, radiation] },
        '1955': { places: [clock, house, coffee, dance], companies: ['Doc', george, 'Biff'], complements: [cond, radiation] },
        '2015': { places: [clock, hotel, house, coffee], companies: ['Marty', 'Doc', 'Biff', george], complements: [cond, radiation, vest, scooter, 'Plutonio'] }
      }
    };
  
    // Obtén las condiciones del personaje actual
    const characterConditions = conditions[currentCharacter][currentYear];
  
    // Verifica si las condiciones actuales coinciden con las condiciones del personaje
    const isWin = characterConditions.places.includes(currentPlace) &&
                  characterConditions.companies.includes(currentCompany) &&
                  characterConditions.complements.includes(currentComplement);
  
    // Muestra el resultado
    if (isWin) {
      showSuccess();
    } else if (totalCounter === 0) {
      for (const eachDice of dices) {
        eachDice.removeEventListener('click', handleDice);
      }
      counter.classList.remove('hidden');
      counter.innerHTML = `Hay demasiadas paradojas temporales, has perdido... corre Marty!!!`;
      gifEnd.classList.remove('hidden');
      gifEnd.src = "./images/Doc1.gif";
    } else {
      counter.innerHTML = `Te quedan ${totalCounter} tiradas`;
    }
  };
  