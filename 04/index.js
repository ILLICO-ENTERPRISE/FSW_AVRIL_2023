/*<div class="box">
  <p>Id: </p>
  <p>UserId: </p>
  <p>Title: </p>
  <p>Completed: </p>
</div>*/
const createBox = ({ id, userId, title, completed }) => {
  let box = document.createElement('div');
  let pId = document.createElement('p');
  let pUserId = document.createElement('p');
  let pTitle = document.createElement('p');
  let pStatus = document.createElement('p');

  pId.innerHTML = `ToDo Id: ${id}`;
  pUserId.innerHTML = `User Id: ${userId}`;
  pTitle.innerHTML = `Title: ${title}`;
  pStatus.innerHTML = completed ? 'COMPLETED' : 'FAILED';

  box.appendChild(pId);
  box.appendChild(pUserId);
  box.appendChild(pTitle);
  box.appendChild(pStatus);

  box.classList.add('box');

  return box;
}

const container = document.querySelector('#container');
const submit = document.querySelector('#submit');

if (!container) {
  throw new Error('No container element')
}

if (!submit) {
  throw new Error('No submit element')
}

submit.addEventListener('click', (event) => {
  event.preventDefault()

  const title = document.querySelector('[name="title"]');
  const body = document.querySelector('[name="body"]');
  const userId = document.querySelector('[name="userId"]');

  let payload = JSON.stringify({
    title: title.value,
    body: body.value,
    userId: parseInt(userId.value),
  })

  // L'APPROCHE AVEC AXIOS ??? EXO
  // RESULTAT: {title: 'blabla', body: 'blabla', userId: 1, id: 201}
  todoFetchAPI('POST', payload, null, null)
    .then(response => response.json())
    .then((response) => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Resource is created'));

})


// A DECOMMENTER POUR TESTER (OBLIGATOIRE)

// APPROCHE AVEC FETCH NATIF DE JS
// todoFetchAPI('GET', null, null)
//   .then(response => response.json())
//   .then((todos) => {
//     todos.slice(0, 10).forEach(todo => {
//       const { id, userId, title, completed } = todo;
//       container.appendChild(createBox(todo));
//     })
//   })
//   .catch(err => console.log(err))
//   .finally(() => console.log('Well Done'));

// APPROCHE AVEC AXIOS
// todoAxiosAPI('GET', null, null)
//   .then((todos) => {
//     todos.data.slice(0, 10).forEach(todo => {
//       const { id, userId, title, completed } = todo;
//       container.appendChild(createBox(todo));
//     })
//   })
//   .catch(err => console.log(err))
//   .finally(() => console.log('Well Done'));