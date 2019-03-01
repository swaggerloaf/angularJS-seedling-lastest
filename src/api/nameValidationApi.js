import getBaseUrl from './baseUrl';
import { resolve } from 'uri-js';

const baseUrl = getBaseUrl();

export function validateName(name) {
  return async function(name) {
    await setInterval(name => {
      if (name && name.length > 3) {
        return resolve(true);
      }
      return resolve(false);
    }, 2000);
  };
}

function get(url) {
  return fetch(baseUrl + url); //.then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request); //then(onSuccess, onError);
}

function post(url, data) {
  const request = new Request(baseUrl + url, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json'
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data)
  });
  return fetch(request); //then(onSuccess, onError);
}

function patch(url, data) {
  const request = new Request(baseUrl + url, {
    method: 'PATCH',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json'
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data)
  });
  return fetch(request); //then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.warn(error);
}
