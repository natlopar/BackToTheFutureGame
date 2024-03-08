const titleHiddenA = document.querySelector('.js-title');
const menuA = document.querySelector('.js-nav');
const menuTextA = document.querySelector('.js-navText');
const hiddenPartA = document.querySelectorAll('.js-hidden');
const playA = document.querySelector('.js-play');
const startSectionA =document.querySelector('.js-startSection');

const handleMenuA =()=>{
    menuTextA.classList.toggle('hidden'); 
    titleHiddenA.classList.add('hidden');
    
    playA.classList.toggle('hidden');

    for (const hidden of hiddenPartA){
     hidden.classList.toggle('hidden');
    }
   }
   
   menuA.addEventListener('click', handleMenuA);
   
   const handlePlayA =()=>{
    playA.classList.add('hidden');
    startSectionA.classList.remove('hidden');
    startSectionA.classList.add('start');
    titleHiddenA.classList.add('hidden');
  
  }
  
  playA.addEventListener('click',handlePlayA);