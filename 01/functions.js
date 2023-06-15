// Les Fonctions (OOP)

// DÉCLARATION DE MES CONSTANTES:
const LIMIT_AGE = 18;
const AUTHORIZED_COUNTRY = 'Africa';


function jumpLine() {
  console.log('\n')
}

// déclartion d'une fonction
// Une fonction qui n'est pas appelée n'est jamais exécutée
function displayName() {
  console.log('DIALLO');
}

/**
 * [displaySalary]
 * @parm {Number} salary
 */
function displaySalary(salary) {
  // Récupération du paramètre de la fonction
  console.log(salary);
}

// L'approche fléchée ou fonctionnelle
// Permet de mettre en ligne l'écriture
const displayAge = (age) => console.log(age);


// Appel des fonctions pour leur exécution
displayName();
jumpLine();
displaySalary(188.989)
jumpLine();
displayAge(28)
jumpLine();

// Vérification de l'âge
// verifyAge(age, country): (age, country): signature d'une fonction

function verifyAge(age, country) {
  if (age >= LIMIT_AGE) {
    if (country === AUTHORIZED_COUNTRY) {
      console.log('Good')
    }else {
      console.warn('Not Good')
    }
  } else {
    console.warn('Is not a Major Person')
  }
}

// Appel de la fontion verifyAge
verifyAge(22, 'Africa')
jumpLine();


// Retourner un résultat avec une fontion
function returnVerifyAge(age, country) {
  if (age >= LIMIT_AGE) {
    if (country === AUTHORIZED_COUNTRY) {
      return 'Good'
    }else {
      return 'Not Good'
    }
  } else {
    return 'Is not a Major Person'
  }
}

// returnVerifyAge(22, 'Africa')
console.log(returnVerifyAge(22, 'Africa'))
