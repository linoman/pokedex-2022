

const pokemonResponse = {
  pokemonName: 'pikachu',
  id: 27,
  // ignored list
  listOfEposides: [],
  alternateColors: [],
  favouriteFood: ''
};

const printPokemonResponseWithoutDestructuring = pokemon => {
  console.log(pokemon.id, pokemon.pokemonName);
};

const printPokemonResponseWithDestructuring = ({pokemonName, id}) => {
  console.log(id, pokemonName);
};


// DESTRUCTURING
const {pokemonName, id} = pokemonResponse;
// roughly equilvalent
// const pokemonName = pokemonResponse.pokemonName;
// const id = pokemonResponse['id'];

// These 3 functions do the same thing
// console.log(id, pokemonName);
// printPokemonResponseWithoutDestructuring(pokemonResponse);
// printPokemonResponseWithDestructuring(pokemonResponse);


function smallPrint(input='This is a DEFAULT value') {
  console.log(input);
}
// function smallPrint(input) {
//   if (input === undefined) {
//     input = 'This is a DEFAULT value';
//   }
//   console.log(input);
// }

smallPrint('This is a text'); // This is a text
smallPrint(); // This is a DEFAULT value
smallPrint('Another text'); // Another text
smallPrint(); // This is a DEFAULT value
smallPrint(''); // ''

// Destructuring Arrays
const listOfEposides = [0,1,2,3,4,5,6];
const [zero, first, ,third] = listOfEposides;
console.log(zero);
console.log(first);
console.log(third);
console.log();

// ...rest Operator
function printingWithRestOperator(...arrayOfParameters) { // [ ]
  arrayOfParameters.forEach(parameter => {
    console.log(parameter);
  })
}
printingWithRestOperator(0, 1, 2, 4, 8);

// console.log(document) // This is going to fail in Node but not in the browser's

console.log('----- Export examples');

// Exporting as JS OLD

// const sum = require('./library');
// console.log(sum(1, 2));

// Exporting as JS NEW module

import {sum, substract as less} from './library.js';
console.log(sum(1, 2));
console.log(less(2, 1));

import fetch from 'node-fetch';
fetch('http://google.com')
  .then(response => console.log(response.status))

console.log('----Classes');

class Triangle {
  sideA;
  sideB;
  hipotenuse;
  constructor(sideA, sideB=1) {
    // hipotenuse = sideA^2 + sideB^2; // imagine that we need the square root
  }
}

const newTriangle = new Triangle(5, 6);

class Mammal {
  numberOfLegs = 4;
  colorOfHair;
  lengthOfHair;
  constructor() {
    this.actions = ['breed']
  }
}

class Dog extends Mammal {
  name;
  colorOfHair = 'black';
  constructor(name, colorOfHair) {
    super();
    this.name = name;
    this.colorOfHair = colorOfHair;
    this.action = ['barks', 'breeds', 'runs towards cars'];
  }
  // Non static function
  barks() {
    console.log(`${this.name} barks!!`);
  }
  // Static function
  static className() {
    console.log('This class is a DOG class');
  }
}

const dog0 = new Dog('Spike');
// dog0.name = 'Spike';
dog0.colorOfHair = 'white';
dog0.barks();
dog0.barks();

// non static
// dog0.className();
// static
Dog.className();

const dog1 = new Dog('scooby doo');
// dog1.name = 'scooby doo';

console.log(dog0);
console.log(dog1);

const pokemonPikachu = {
  id: 1,
  pokemonName: 'pikachu',
  abilities: [],
  envolvesTo: 2
}

console.log(pokemonPikachu);

const pokemonRaichu = {
  id: 2,
  pokemonName: 'raichu',
  abilities: [],
  envolvesTo: undefined
}

