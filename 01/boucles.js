// Les Boucles
// For / While

// Les boucles sont utilisées sur les ITERABLES
// Qui parle d'itérable parle de TABLEAU ou LISTE D'OBJECTS
// TABLEAU <=> ARRAY

// BOUCLE FOR
var fruits = ['Orange', 'Banana', 'Pineapple']

// L'approche Traditionnelle
// Déclarer l'itérateur i => ( var i = 0)
// Parcourir sur le tableau jusqu'à sa longueur => ( i < fruits.length )
// En incrémentant l'itéarteur d'un pas => ( i++ )
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log('\n')

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

// BOUCLE WHILE
// iterator <=> i 
// Approche (1)
var iterator = 0;

while (iterator < fruits.length) {
  console.log(fruits[iterator]);
  iterator = iterator + 1;
}

console.log('\n')

// Approche 2
var i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i = i + 1;
}

