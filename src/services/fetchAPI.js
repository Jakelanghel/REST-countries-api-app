export async function fetchAPI(url, type) {
  return fetch(`https://restcountries.com/v3.1/${url}`).then((res) => {
    return res.ok ? res : null;
  });
}

// https://restcountries.com/v3.1/name/{name}

// https://restcountries.com/v3.1/region/{region}
