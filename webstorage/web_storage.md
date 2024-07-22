// Storing a string
localStorage.setItem('username', 'JohnDoe');

// Storing a number
localStorage.setItem('age', 30);

// Storing an array (requires JSON.stringify)
const skills = ['HTML', 'CSS', 'JavaScript'];
localStorage.setItem('skills', JSON.stringify(skills));

// Storing an object (requires JSON.stringify)
const user = { name: 'JohnDoe', age: 30 };
localStorage.setItem('user', JSON.stringify(user));
// Retrieving a string
let username = localStorage.getItem('username');
console.log(username); // Output: JohnDoe

// Retrieving a number
let age = localStorage.getItem('age');
console.log(age); // Output: 30

// Retrieving and parsing an array
let skills = localStorage.getItem('skills');
skills = JSON.parse(skills);
console.log(skills); // Output: ['HTML', 'CSS', 'JavaScript']

// Retrieving and parsing an object
let user = localStorage.getItem('user');
user = JSON.parse(user);
console.log(user); // Output: { name: 'JohnDoe', age: 30 }
// Clear all items from localStorage
localStorage.clear();
