//export const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
export const BASE_URL = 'https://randomuser.me/api/?results=15';
//export const BASE_URL = 'https://randomuser.me/api/?age=44';

export const getInfo = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => res.json())
    .then((json) => json);
}

// export function getSearchPosts({ parametrs }) {
//   const { input } = parametrs
//   return fetch(`${BASE_URL}`, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     }
//   })
//     .then((res) => res.json())
//     .then((json) => {
//       const result = json.results.filter((x) => ((!input || x.name.first.indexOf(input) !== -1) || (!input || x.name.last.indexOf(input) !== -1)))

//       return result;
//     });
// }