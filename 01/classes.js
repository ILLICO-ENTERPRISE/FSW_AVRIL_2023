// Les classes (OOP)

// Déclaration d'une classe


function jumpLine() {
  console.log('\n')
}

// this est la classe courante
// en python self => this
// __init__ => constructor
class Person {
  // La porté des attributs de la classe
  // La portée PUBLIQUE
  // La portée PRIVATE
  // La portée PROTECTED
  // La portée STATIQUE

  // La déclaration d'un attribut privé
  // On précède le nom de la varible par #
  #age

  constructor(name) {
    // name qui est de portée publique
    this.name = name;
    this.#age = 0
  }

  // Ici on parle de méthode
  // Et non de fonction
  displayName() {
    console.log(this.name);
  }

  upperName() {
    console.log(this.name.toUpperCase());
  }

  lowerName() {
    console.log(this.name.toLowerCase());
  }

  // Un getter permet juste de récupérer un attribut privé
  // Et de le retourner via le mot clé << return >>
  getAge() {
    return this.#age
  }

  // Un setter permet juste de modifier la valeur courante d'un attribut privé
  // Et ne retourne rien du tout
  setAge(value) {
    this.#age = value;
  }
}

// Instancier la classe Pesron
// person est une instance de la classe Person
const person = new Person('DIALLO');

person.displayName();
person.upperName();
person.lowerName();
jumpLine();

// Test de la portée publique
// On a déclarer que name est de portée publique

console.log(person.name);

jumpLine();

// Test de la portée privée
// On a déclarer que age est de portée privée
// Récupération d'uné clé inexistante => undefined
// NB: Une classe est object car elle a une référence mémoire

console.log(person.age);

// Test le private
// Propriété private interdit d'accès or de la classe Person
// console.log(person.#age);

// Accéder a une propriété privée
// Importance des GETTERS
console.log(person.getAge())
jumpLine();

// Accéder et modifier une propriété privée

person.setAge(22)
console.log(person.getAge())
