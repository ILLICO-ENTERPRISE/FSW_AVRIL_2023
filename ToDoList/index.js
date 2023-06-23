import { TaskQueryManager } from './lib/TaskQueryManager.js';
import { TaskManager } from './lib/TaskManager.js';
import { STATUS } from './lib/constants.js';

// When the Dom CONTENT IS LOADING
const button = document.querySelector('button')
const task = document.querySelector('#task')
const createdList = document.querySelector('#created-task-list')
const pendingList = document.querySelector('#pending-task-list')

// Validation de l'existence de l'élément sur le DOM
if (!task) {
  throw new Error('Task Element not found')
}

if (!button) {
  throw new Error('Button Element not found')
}

if (!createdList) {
  throw new Error('Created Task List Element not found')
}

if (!pendingList) {
  throw new Error('Pending Task List Element not found')
}

// Restore All Tasks
let query = new TaskQueryManager()

query
  .findAll()
  .then(tasks => {
    tasks.forEach(task => {
      let taskElement = makeTaskElement(task.name, task.priority)
      createdList.appendChild(taskElement)
    })
  })
  .catch(err => console.log(err))
  .finally(() => console.log('FINISHED'));


// Part after DOM CONTENT LOADED
const clickHandler = async (event) => {
  let name = task.value.toUpperCase()
  let priority = document.querySelector('#priority').value

  // Save Task
  query
    .saveTask(new TaskManager(name, name.toLowerCase(), priority))
    .then(task => console.log(task))
    .catch(err => console.log(err))
    .finally(() => console.log('FINISHED'));

  // Rehydrate the Dom Content
  createdList.innerHTML = ''
  query
    .findAll()
    .then(tasks => {
      tasks.forEach(task => {
        let taskElement = makeTaskElement(task.name, task.priority)
        createdList.appendChild(taskElement)
      })
    })
    .catch(err => console.log(err))
    .finally(() => console.log('FINISHED'));
}

button.addEventListener('click', clickHandler)

const makeTaskElement = (name, priority) => {
  let container = document.createElement('div')
  let containerH3 = document.createElement('h3')
  let containerP = document.createElement('p')
  let containerSpan = document.createElement('span')
  let startButton = document.createElement('button')

  containerH3.innerHTML = name
  containerP.innerHTML = `Priority: ${priority}`
  containerSpan.innerHTML = STATUS.CREATED

  containerSpan.style.border = '1px solid black'
  containerSpan.style.padding = '2px'
  containerSpan.style.marginBottom = '10px'
  containerSpan.style.display = 'inline-block'

  startButton.innerHTML = 'start'
  startButton.style.border = '1px solid black'
  startButton.style.padding = '5px'
  startButton.style.display = 'block'

  container.appendChild(containerH3)
  container.appendChild(containerP)
  container.appendChild(containerSpan)
  container.appendChild(startButton)

  container.classList.add('task')

  return container
}