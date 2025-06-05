document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const confirmField = document.getElementById("confirmPassword");
  const serviceField = document.getElementById("service");

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value;
  const confirm = confirmField.value;
  const service = serviceField.value;

  const message = document.getElementById("message");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Сброс рамок
  nameField.style.border = "";
  emailField.style.border = "";
  passwordField.style.border = "";
  confirmField.style.border = "";
  serviceField.style.border = "";

  if (!name || !email || !password || !confirm || !service) {
    message.textContent = "Заполните все поля!";
    message.style.color = "red";

    if (!name) nameField.style.border = "1px solid red";
    if (!email) emailField.style.border = "1px solid red";
    if (!password) passwordField.style.border = "1px solid red";
    if (!confirm) confirmField.style.border = "1px solid red";
    if (!service) serviceField.style.border = "1px solid red";
    return;
  }

  if (!emailPattern.test(email)) {
    message.textContent = "Email указана неверно!";
    message.style.color = "red";
    emailField.style.border = "1px solid red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Пароль слишком короткий!";
    message.style.color = "red";
    passwordField.style.border = "1px solid red";
    return;
  }

  if (password !== confirm) {
    message.textContent = "Пароль не совпадает!";
    message.style.color = "red";
    confirmField.style.border = "1px solid red";
    return;
  }

  message.textContent = "Вы успешно зарегистрировались!";
  message.style.color = "lightgreen";
  this.reset();
});