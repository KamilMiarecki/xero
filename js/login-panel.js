// Pobranie elementów DOM
const loginText = document.querySelector(".title-text .login");
const formContainer = document.querySelector(".form-container .form-inner");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginRadio = document.getElementById("login");
const signupRadio = document.getElementById("signup");

// Funkcja do zmiany tytułu
function updateTitle() {
  if (loginRadio.checked) {
    loginText.textContent = "Logowanie";
  } else if (signupRadio.checked) {
    loginText.textContent = "Rejestracja";
  }
}

// Obsługa kliknięcia w "Rejestracja"
signupBtn.addEventListener("click", () => {
  formContainer.style.marginLeft = "-100%"; // Przesunięcie w lewo
 
  signupRadio.checked = true;
  updateTitle();
});

// Obsługa kliknięcia w "Logowanie"
loginBtn.addEventListener("click", () => {
  formContainer.style.marginLeft = "0%"; // Przesunięcie na miejsce
  loginRadio.checked = true;
  updateTitle();
});


// Wywołanie updateTitle na starcie
updateTitle();
