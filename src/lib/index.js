import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAcUAEKlCklJcNKc3hF8ANOgVpnnppdThk',
  authDomain: 'fir-test-60d18.firebaseapp.com',
  projectId: 'fir-test-60d18',
  storageBucket: 'fir-test-60d18.appspot.com',
  messagingSenderId: '198180105490',
  appId: '1:198180105490:web:ce9fbabced456eaa8997cb',
};

const createUser = (e) => {
  e.preventDefault();
  const emailInputValue = document.getElementById('email').value;
  const passwordInputValue = document.getElementById('password').value;

  console.log(emailInputValue, passwordInputValue);
  // Crear usuario...

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage);
    });
};

export const myFunction = () => {
  // Inicializar Firebase
  initializeApp(firebaseConfig);

  document
    .getElementById('registrationButton')
    .addEventListener('click', createUser);
};
