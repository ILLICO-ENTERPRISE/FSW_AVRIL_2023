// https://jsonplaceholder.typicode.com/
// https://axios-http.com/fr/docs/intro
// https://www.journaldunet.fr/web-tech/dictionnaire-du-webmastering/1203617-ajax-asynchronous-javascript-and-xml-definition-traduction/

// API: Application Program Interface
// Permet de communiquer avec un SERVER
// Les données transmises via une API sont au format JSON/SOAP
// Le format JSON => {key:value}
// Le format SOAP => XML

// CLIENT -> GET (Demande de Ressource) -> SERVER (1)
// CLIENT -> AJAX -> GET -> {INTERNET} -> SERVER
// SERVER -> JSON ({ id: 1, name: 'Halimatou' }) -> CLIENT (2)

// CLIENT -> POST (Envoyer une/des ressources) -> JSON ({ id: 1, name: 'Halimatou' }) -> SERVER (1)
// CLIENT -> AJAX -> POST -> {INTERNET} -> SERVER
// SERVER -> JSON ({ status: 'OK' }) -> CLIENT (2)

// Action de type GET
// URL: https://jsonplaceholder.typicode.com/todos/1
// Protocole: HTTPS => (HTTP + SSL)
// Domain: typicode.com
// Sous-Domain: jsonplaceholder
// Type de la ressource: todos
// La ressource a retrouvée est: celle à la POS 1
// L'URL de toutes les ressources c'est <PROTOCOL>/<DOMAIN>/<NOM_RESOURCE_PLURIEL>
// L'URL d'une ressource c'est <PROTOCOL>/<DOMAIN>/<NOM_RESOURCE_PLURIEL>/<ID>

// Constantes
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

// Action de type GET
const todoFetchAPI = async (method = 'GET', payload = null, baseUrl = null, params = null) => {
  let url = (baseUrl) ? baseUrl : BASE_URL
  url = (params) ? `${url}/${params}` : url

  if (method === 'GET') {
    return fetch(url)
  }

  if (method === 'POST') {
    return fetch(url, {
      method: method.toUpperCase(),
      body: payload,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }
}

const todoAxiosAPI = async (method = 'GET', baseUrl = null, params = null) => {
  let url = (baseUrl) ? baseUrl : BASE_URL
  url = (params) ? `${url}/${params}` : url

  if (method === 'GET') {
    return axios.get(url)
  }

  if (method === 'POST') {
    return axios.post(url, {
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
  }
}

// 200 Todos
// todos()

// RESULTAT: {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
// todos(BASE_URL, 1)