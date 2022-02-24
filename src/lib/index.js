const createUser = (e) => {
  e.preventDefault();
  const emailInputValue = document.getElementById('email').value;
  const passwordInputValue = document.getElementById('password').value;

  console.log(emailInputValue, passwordInputValue);
  // Crear usuario...
};

export const myFunction = () => {
  // Inicializar Firebase

  document
    .getElementById('registrationButton')
    .addEventListener('click', createUser);
};
