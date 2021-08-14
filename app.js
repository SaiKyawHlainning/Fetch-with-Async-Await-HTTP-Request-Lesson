const http = new EasyHTTP();

// // Get User
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// New User Data
const data = {
  name: 'Steven Smith',
  username: 'steven',
  email: 'steven@gmail.com',
};

// POST or Create User
// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// // PUT or Edit User
// http
//   .put('https://jsonplaceholder.typicode.com/users/3', data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// DELETE user
http
  .delete('https://jsonplaceholder.typicode.com/users/3')
  .then((resData) => console.log(resData))
  .catch((error) => console.log(error));
