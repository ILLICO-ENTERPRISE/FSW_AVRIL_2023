// VARIBALES:
// Première déclaration
// Prise en compte de la première déclaration
var name = "DIALLO"
let age = 18
const salary = 188.98

// DECLARATION AVEC var:
var name = "DIALLO"

// Afficher à la console la valeur de name
console.log(name)

name = "TONY"

console.log(name)

// DECLARATION AVEC let:
// ERROR: Identifier 'age' has already been declared
// Avec let on ne peut plus redéclarer deux fois la même variable
age = 18

console.log(age)

// DECLARATION AVEC const:
// Avec const on crée une constante
// Ainsi la valeur de la variable ne peut être mutée
// ERROR: TypeError: Assignment to constant variable.
// salary = 200

console.log(salary)

// Affichage en console:
console.log('Affichage avec console.log')
console.table([1, 2, 3])
console.warn('Affichage avec console.warn')
console.error('Affichage avec console.error')