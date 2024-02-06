const handleReset=(e)=>{
    e.preventDefault();
    character.src = '/images/Delorean.gif'
    traveller.addEventListener('click', handleTraveller);

}

btnReset.addEventListener('click', handleReset);