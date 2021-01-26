console.log('Hello Cullen');

const topHat = {
  type: 'Top',
  color: 'black',
  size: 14,
};

console.log(topHat.color);
console.log(topHat.size);

const baseballCap = {
  type: 'Baseball Cap',
  color: 'Red and White',
  size: 12,
};

const hatColorPropKey = 'color';

console.log(baseballCap.type);
// for key as string
console.log(baseballCap[hatColorPropKey]);

console.log(Object.keys(baseballCap));

const bowlerHat = {
  type: 'Bowler',
  color: 'Crimson',
  size: 13,
  interior: {
    type: 'silk',
    color: 'bright red',
  },
};

console.log(bowlerHat.interior['color']);
