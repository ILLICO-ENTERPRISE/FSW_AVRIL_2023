import { METHOD, CONTENT_TYPE, BASE_URL } from './constants.js';

export const fetchAPI = async (search, method, payload = null) => {
  if (!method || !payload || method === METHOD.GET) {
    return fetch(`${BASE_URL}/${search}`, {
      method: METHOD.GET,
      headers: { 'Content-type': CONTENT_TYPE },
    });
  }

  if (method === METHOD.POST) {
    return fetch(`${BASE_URL}/${search}`, {
      method: METHOD.POST,
      body: JSON.stringify(payload),
      headers: { 'Content-type': CONTENT_TYPE },
    });
  }
}