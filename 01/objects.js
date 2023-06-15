// Les OBJECTS

// Déclaration

// var fruits = {
//   'name': 'Orange',
//   'name': 'Banana',
//   'name': 'Pineapple',
//   'name': 'Apple',
//   'name': 'Kitten',
// }

// Une STRUCTURE DE DONNEES.
var fruits = {
  'name': 'Orange',
  'type': 'fruit',
  'count': 1000,
  'country': 'Africa',
}

// Une STRUCTURE DE DONNEES.
var animals = {
  'types': ['Dog', 'Cat', 'Wingx', 'Snake'],
  'fruits': {
    'name': 'Orange',
    'type': 'fruit',
    'count': 1000,
    'country': 'Africa',
  },
  'count': 2500,
  'country': 'America',
}

console.log(fruits)
console.log(fruits['name']) // Orange
console.log(fruits['type']) // fruit
console.log(fruits['count']) // 1000 
console.log(fruits['country']) // Africa
console.log('\n')

console.log(fruits.name) // Orange
console.log(fruits.type) // fruit
console.log(fruits.count) // 1000 
console.log(fruits.country) // Africa
console.log('\n')

console.log(fruits.age) // undefined
console.log('\n')

// Mutation
// Changer l'état initial
fruits.age = 22
console.log(fruits.age)