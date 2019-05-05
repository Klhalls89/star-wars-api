import React from 'react';

export const fetchThis = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export default {fetchThis}