import { createUser } from './lib/firebase-auth.js';
import { firebaseConfig, initializeApp } from './lib/firebase-init.js';

const form = document.createElement('form');
form.innerHTML = `
  <label for="email">Email</label>
  <input type="text" id="email" required>
  <label for="password" required>Password</label>
  <input type="password" id="password">
  <input type="submit" id="registrationButton" value="Registrarse">
`;

window.addEventListener('load', () => {
  initializeApp(firebaseConfig);

  form
    .querySelector('#registrationButton')
    .addEventListener('click', async (e) => {
      e.preventDefault();
      const emailInputValue = form.querySelector('#email').value;
      const passwordInputValue = form.querySelector('#password').value;
      await createUser(emailInputValue, passwordInputValue);
    });
  document.querySelector('#root').appendChild(form);
});
