import { createUserWithEmailAndPassword, getAuth } from './firebase-init.js';

export function createUser(emailInputValue, passwordInputValue) {
  if (!emailInputValue || !passwordInputValue) {
    throw new TypeError('Missing email and/or password');
  }

  const auth = getAuth();

  return createUserWithEmailAndPassword(
    auth,
    emailInputValue,
    passwordInputValue,
  );
}
