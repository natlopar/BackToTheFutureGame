const handleKey = () => {
  key = !key;
  if (key) {
    keyOn.classList.remove('hidden');
    keyOff.classList.add('hidden');
  } else {
    keyOff.classList.remove('hidden');
    keyOn.classList.add('hidden');
  }
};

toggle.addEventListener('click', handleKey);
