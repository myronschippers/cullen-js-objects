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

// PENGUINS

// {
//   name: '',
//   colors: [''],
//   size: 1.0,
//   isCute: true,
// }
const penguins = [
  {
    name: 'Emperor',
    colors: ['Black', 'White', 'Yellow'],
    size: 1.0,
    isCute: true,
  },
  {
    name: 'Little',
    colors: ['Slate-blue', 'White'],
    size: 0.5,
    isCute: true,
  },
  {
    name: 'Rockhopper',
    colors: ['Black', 'White', 'Yellow'],
    size: 0.75,
    isCute: true,
  },
  {
    name: 'African',
    colors: ['Black', 'White'],
    size: 0.5,
    isCute: true,
  },
  {
    name: 'Gentoo',
    colors: ['Black', 'White'],
    size: 0.5,
    isCute: true,
  },
  {
    name: 'Sea Gull',
    colors: ['Gray'],
    size: 0.25,
    isCute: false,
  },
  {
    name: 'Chinstrap',
    colors: ['Black', 'White'],
    size: 0.25,
    isCute: true,
  },
  {
    name: 'Macaroni',
    colors: ['Black', 'White', 'Yellow'],
    size: 0.5,
    isCute: true,
  },
];
