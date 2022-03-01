import { createUserWithEmailAndPassword, getAuth } from './firebase-init.js';

export function createUser(emailInputValue, passwordInputValue) {
  const auth = getAuth();

  return createUserWithEmailAndPassword(
    auth,
    emailInputValue,
    passwordInputValue,
  )
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
}
