import { myFunction } from './lib/index.js';

const form = document.createElement('form');
form.innerHTML = `
  <label for="email">Email</label>
  <input type="text" id="email" required>
  <label for="password" required>Password</label>
  <input type="password" id="password">
  <input type="submit" id="registrationButton" value="Registrarse">
`;

document.querySelector('#root').appendChild(form);

myFunction();
