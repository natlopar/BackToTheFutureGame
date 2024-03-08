'use strict';
import './variables.js'; 
import './characters.js';
import './dices.js';
import './reset.js'

const handlePlay =()=>{
  play.classList.add('hidden');
  startSection.classList.remove('hidden');
  startSection.classList.add('start');
  titleHidden.classList.add('hidden');

}
handlePlay();
play.addEventListener('click',handlePlay);

const handleStartGame=(e)=>{
  e.preventDefault();
  traveller.removeEventListener('click', handleTraveller);
  btnStart.classList.toggle('selected');

}
btnStart.addEventListener('click', handleStartGame);

const handleMenu =()=>{
 menuText.classList.toggle('hidden'); 
 titleHidden.classList.add('hidden');
 for (const hidden of hiddenPart){
  hidden.classList.toggle('hidden');
 }
}

menu.addEventListener('click', handleMenu);


