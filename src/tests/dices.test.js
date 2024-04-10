const {getRandomNumber} =  require('../js/partials/dices');


test('función MathRandom da un número aleatorio cada vez', () => {
    expect(getRandomNumber()).toBeLessThan(7);
  });