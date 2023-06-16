// De communiquer avec le DOM

// const age = document.getElementById('age')
// const button = document.getElementById('button')

const age = document.querySelector('#age')
const button = document.querySelector('.btn')
const result = document.querySelector('#result')

// <input type="text" id="age" autofocus autcomplete/>
console.log(age)
console.log(button)

// Récupérer lma valeur du champ
console.log(age.value)

// EVENT:
// Click BUTTON => SIGNAL au DOM => age.value soit récupéré
// addEventListener(<EVENT_NAME>, <CALLBACK>)
// NB: Le CALLBACK n'est juste une fonction
button.addEventListener('click', (event) => {
  // Dans event on a le target (button#button.btn)
  // target représente l'élément qui a émis le signal
  console.log('EVENT CLICK DECLENCHE')
  // console.log(event.target)
  // console.log(checkAge(age.value))

  // innerHTML renvoie du HTML
  // RESPONSE: <span>Resultat</span>
  // (1)
  console.log(result.innerHTML)

  // Echappe les balises HTML
  // RESPONSE: Resultat
  // (2)
  console.log(result.textContent)


  // Injecter le résultat dans la balise p ayant l'id resultat
  result.innerHTML = `<span>${checkAge(age.value)}</span>`

})

// Validation selon que le champ change lorsque l'utilisateur entre la donnée
age.addEventListener('change', (event) => {
  // Injecter le résultat dans la balise p ayant l'id resultat
  console.log('EVENT CHANGE DECLENCHE')
  result.innerHTML = `<span>${checkAge(age.value)}</span>`
})

// Validation en temps réel
age.addEventListener('input', (event) => {
  // Injecter le résultat dans la balise p ayant l'id resultat
  console.log('EVENT INPUT DECLENCHE')
  result.innerHTML = `<span>${checkAge(age.value)}</span>`

})