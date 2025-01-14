import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAObkT78hTQD_Bx6QCq1cJw_QMMb2CORWg",
  authDomain: "login-panel-2e171.firebaseapp.com",
  projectId: "login-panel-2e171",
  storageBucket: "login-panel-2e171.firebasestorage.app",
  messagingSenderId: "552490051572",
  appId: "1:552490051572:web:ebf3640fc4eb8f402abba1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const resetPasswordLink = document.getElementById("reset-password");

  if (!loginForm || !emailInput || !passwordInput || !resetPasswordLink) {
    console.error("Brak wymaganych elementów w DOM.");
    return;
  }

  // Obsługa logowania
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Zapobiega domyślnemu wysyłaniu formularza

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      alert("Proszę wprowadzić email i hasło.");
      return;
    }

    // Logowanie użytkownika
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Zalogowano pomyślnie! Witaj: ${user.email}`);

        // Zapisz dane użytkownika w localStorage
        localStorage.setItem("userEmail", user.email);

        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Błąd logowania: ${errorMessage}`);
      });
  });

  // Obsługa resetu hasła
  resetPasswordLink.addEventListener("click", (event) => {
    event.preventDefault(); // Zablokuj domyślne działanie linku

    const email = prompt("Podaj swój adres e-mail, aby zresetować hasło:");
    if (!email) {
      alert("Proszę wprowadzić adres e-mail.");
      return;
    }

    // Wysyłanie e-maila resetującego hasło
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Link do zresetowania hasła został wysłany na podany adres e-mail.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Błąd przy wysyłaniu e-maila resetującego hasło: ${errorMessage}`);
      });
  });
});
