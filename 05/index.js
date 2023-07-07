import { fetchAPI } from './lib.js';

$('document').ready(() => {
  $('[name="search"]').click((e) => {
    let search = e.target.value;
    let method = null;
    let payload = null;

    fetchAPI(search, method, payload)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error))
      .finally(() => console.log('Executed'));
  })
})