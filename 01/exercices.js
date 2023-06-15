// Créer une classe qui convertie dans une devise étrangère

class CurrencyConverter {
  constructor(amount, startCurrency, endCurrency) {
    this.amount = amount;
    this.startCurrency = startCurrency;
    this.endCurrency = endCurrency;
    // '?????????????'
  }

  convert() {
    // '?????????????'
  }

  toString() {
    return `Montant Initial: ${}\n` +
      `Devise Initiale: ${}\n` +
      `Devise Finale: ${}\n` +
      `Montant Final: ${}`
  }
}

// Séries d'exercices
`1. Exercice de manipulation de tableaux :
   Écrivez une fonction appelée `inverserTableau` qui prend en entrée un tableau de nombres et renvoie un nouveau tableau contenant les mêmes éléments, mais dans l'ordre inverse. Par exemple, si l'entrée est `[1, 2, 3, 4, 5]`, la sortie devrait être `[5, 4, 3, 2, 1]`. Assurez-vous de ne pas modifier le tableau d'origine.

2. Exercice de manipulation de chaînes de caractères :
   Écrivez une fonction appelée `compterOccurrences` qui prend en entrée une chaîne de caractères et un caractère, et renvoie le nombre de fois où ce caractère apparaît dans la chaîne. Par exemple, si l'entrée est `"Bonjour le monde !"`, et le caractère est `"o"`, la sortie devrait être `3`.

3. Exercice de manipulation d'objets :
   Écrivez une fonction appelée `fusionnerObjets` qui prend en entrée deux objets et renvoie un nouvel objet contenant les propriétés des deux objets combinés. Si une propriété existe dans les deux objets, la valeur du deuxième objet doit être conservée. Par exemple, si l'entrée est `{a: 1, b: 2}` et `{b: 3, c: 4}`, la sortie devrait être `{a: 1, b: 3, c: 4}`.

4. Exercice de manipulation de fonctions :
   Écrivez une fonction appelée `memoize` qui prend en entrée une fonction et renvoie une nouvelle fonction. La nouvelle fonction doit se comporter de la même manière que la fonction d'origine, mais doit mémoriser les résultats pour les entrées données afin d'éviter de recalculer le résultat pour les mêmes entrées. Cela peut améliorer les performances lorsque la fonction est appelée plusieurs fois avec les mêmes arguments.`