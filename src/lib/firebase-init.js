import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAwhgLw2KwJGIiJCgMyGTkri4xetdVss7o',
  authDomain: 'testiling.firebaseapp.com',
  projectId: 'testiling',
  storageBucket: 'testiling.appspot.com',
  messagingSenderId: '557811988859',
  appId: '1:557811988859:web:a25dd38b0a1091d51865de',
};

export {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  firebaseConfig,
};
