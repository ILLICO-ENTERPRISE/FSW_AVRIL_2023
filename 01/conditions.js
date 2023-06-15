// Les structures conditionnelles

// IF / ELSE 

// Quand on utilise CONST => CONSTANTE
const LIMIT_AGE = 18
const AUTHORIZED_COUNTRY = "Africa"

var age = 18
var country = 'America'

// Vérifier la majorité de cet age
// NB: Majorioté => Il est majeur ou pas


// [18, + l'infini] (1)
// age >= LIMIT_AGE === type boolean
// age >= LIMIT_AGE ( EVALUTION (EVAL) )
if (age >= LIMIT_AGE) {
  console.log("Il est Majeur")
} else {
  console.warn("Il est Mineur")
}

// [- l'infini, 18[ (2)
// age < LIMIT_AGE === type boolean
if (age < LIMIT_AGE) {
  console.warn("Il est Mineur")
} else {
  console.log("Il est Majeur")
}

// ALigner plusieurs condition
// Le et Logique entre Boolean

if (age >= LIMIT_AGE && country === AUTHORIZED_COUNTRY) {
  console.log("You are a Good Boy")
} else {
  console.warn("This guy is not African")
}

if (age >= LIMIT_AGE && country !== AUTHORIZED_COUNTRY) {
  console.warn("This guy is not African")
} else {
  console.log("You are a Good Boy")
}

// Vérifie si l'age est correct (1)
// On vérifie si le pays est correct (2)
// NB: Utiliser mopin d'imbriction de IF/ELSE
// NB: La complexité algorithmique du code sera Réduit
if (age >= LIMIT_AGE) {
  if (country === AUTHORIZED_COUNTRY) {
    console.log("You are a Good Boy")
  } else {
    console.warn("This guy is not African")
  }
}else {
  console.warn("This guy is little boy")
}

// La précision est que:
// && => toutes les évaluations doivent être VRAIES pour être vraie
// || => il ne suffit que d'une seule VRAIE EVALUATION pour être vraie

console.log(true && true) // true
console.log(false && false) // false
console.log(false && true) // false
console.log(false || false) // false
console.log(false || true) // true

// (age >= LIMIT_AGE) === true (BOOLEAN)
// (country === AUTHORIZED_COUNTRY) === false (BOOLEAN)
// if a regardé que: true && false
console.log( (age >= LIMIT_AGE) && (country === AUTHORIZED_COUNTRY) )




