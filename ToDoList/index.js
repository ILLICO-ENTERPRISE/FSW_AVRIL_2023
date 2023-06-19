// AFTER THE DOM IS RENDERED
const button = document.querySelector('button')
const task = document.querySelector('#task')
const taskContainer = document.querySelector('#tasks-container')

if (!task) {
  throw new Error('Task Element not found')
}

if (!button) {
  throw new Error('Button Element not found')
}

if (!taskContainer) {
  throw new Error('TaskContainer Element not found')
}

// MODE ASYNCHRONE ( 1 )
// Utiliser ASYNC/AWAIT pour résoudre la PROMISE
const clickHandler = async (event) => {
  let item = task.value.toUpperCase()
  let slug = item.toLowerCase()
  let priority = 1
  await addTask(item, slug, priority)

  // Re afficher la liste des TACHES après Ajout
  seeTasks().then((res) => {
    // Le forEach permettre d'itérerv sur le TABLEAU
    res.forEach((taskElement) => {
      // La DECONSTRUCTION: Utiliser le nom des clés
      const {name, slug, priority} = taskElement;

      // Ajouter l'élément sur le DOM dans task-container
      taskContainer.appendChild(makeTaskElement(name, priority))

    })
  }).catch((err) => {
    console.log(err);
  })
}

button.addEventListener('click', clickHandler)

// Une PROMISE a plusieur états de Résolution
// On a l'état FULFILLED / PENDING / REJECTED
// Une Promise peut être résolue comme rejetée
// Quand on applique le THEN c'est qu'on attend
// Et le catch c'est pour capturer l'erreur
// MODE ASYNCHRONE ( 2 )
seeTasks().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})

const makeTaskElement = (taskName, priority) => {
  let container = document.createElement('div')
  let containerH3 = document.createElement('h3')
  let containerP = document.createElement('p')

  containerP.innerHTML = taskName
  containerH3.innerHTML = `Priority: ${priority}`

  container.appendChild(containerH3)
  container.appendChild(containerP)

  container.classList.add('task')

  return container
}