
const menu = document.querySelector('.js-nav');
const menuText = document.querySelector('.js-navText');
const hiddenPart = document.querySelectorAll('.js-hidden');
const play = document.querySelector('.js-play');
const startSection =document.querySelector('.js-startSection');

const handleMenu =()=>{
    menuText.classList.toggle('hidden'); 
    // titleHidden.classList.add('hidden');
    for (const hidden of hiddenPart){
     hidden.classList.toggle('hidden');
    }
   }
   
menu.addEventListener('click', handleMenu);


const handleInstructions =()=> {
    menuText.classList.add('hidden');
}


menuText.addEventListener('click', handleInstructions);
//    const handlePlay =()=>{
//     play.classList.add('hidden');
//     // startSection.classList.remove('hidden');
//     // startSection.classList.add('start');
//     titleHidden.classList.add('hidden');
  
//   }
  
// play.addEventListener('click', handlePlay);