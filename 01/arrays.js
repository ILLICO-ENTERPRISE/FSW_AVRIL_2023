// Les TABLEAUX ET LEUR FONCTIONS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var fruits = ['Orange', 'Banana', 'Pineapple']

// var fruits = ['ORANGE', 'BANANA', 'PINEAPPLE']

// L'approche d'une fonction expressive
// On utilise la déclration classique d'une fonction
// Cette fonction reste quand même un CALLBACK
fruits.forEach(function(fruit) {
  console.log(fruit);
});

console.log('\n')

// L'approche d'une fonction fléchée
fruits.forEach((fruit) => console.log(fruit));

console.log('\n')

// Mettre en majuscule le nom des fruits
// Ecrire une fonction pour mettre en majuscule (toUpperCase())
// Récupérer tous ces noms 
// Appliquer la fonction sur chacun des noms

fruits.forEach((item, index) => {
  console.log(item.toUpperCase())
  console.log(index)
  // console.log(fruits)
})

console.log('\n')

// Les ARRAYS sont MUTABLES
// ALTERER le premier tableau fruits
fruits.forEach((item, index) => {
  fruits[index] = item.toUpperCase();
})

// RAPPEL: le premier tableau est MAJUSCULE
console.log(fruits)
console.log('\n')

// Mettre en Minuscule
// map va CREER UN NOUVEAU TABLEAU
// puis va AFFECTER LES NOUVELLES VALEURS AU NOUVEAU TABLEAU
// Sans ALTERER LE PREMIER TABLEAU
var newFruits = fruits.map(item => item.toLowerCase())

console.log(fruits)
console.log(newFruits)
// Saut de ligne
console.log('\n')


// Filter son fonctionnement:
// ['ORANGE', 'BANANA', 'PINEAPPLE']
// [false, true, false]
// [true]
var filterFruits = fruits.filter(item => item === 'BANANA')
console.log(filterFruits)
// Saut de ligne
console.log('\n')

// Trouver tous les nombres pairs

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Les LIGATURES
var pairs = numbers.filter(item => item % 2 === 0)
var impairs = numbers.filter(item => item % 2 !== 0)

console.table([pairs, impairs])
// Saut de ligne
console.log('\n')

var initValue = 0
var sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initValue)

console.log(sum) // 55
// Saut de ligne
console.log('\n')

// Supprimer a partir de la fin du TABLEAU
numbers.pop()

console.log(numbers)

// Concatener deux ARRAYS
var numbers2 = [20, 25, 23]
var concatTab = numbers.concat(numbers2)

console.log(numbers)
console.log(nconcatTab)
// Saut de ligne
console.log('\n')



