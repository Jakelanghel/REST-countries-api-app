export function fetchAPI(url) {
  return fetch(`https://restcountries.com/v3.1/${url}`);
}

// https://restcountries.com/v3.1/name/{name}

// https://restcountries.com/v3.1/region/{region}
