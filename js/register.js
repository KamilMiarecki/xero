import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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
  const signupForm = document.getElementById("signup-form");
  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-password");
  const confirmPasswordInput = document.getElementById("signup-confirm-password");

  if (!signupForm || !emailInput || !passwordInput || !confirmPasswordInput) {
    console.error("Brak wymaganych elementów w DOM.");
    return;
  }

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Zapobiega domyślnemu wysyłaniu formularza

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Walidacja danych
    if (!email || !password || !confirmPassword) {
      alert("Wszystkie pola muszą być wypełnione.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Hasła nie są zgodne.");
      return;
    }

    if (password.length < 6) {
      alert("Hasło musi mieć co najmniej 6 znaków.");
      return;
    }

    // Rejestracja użytkownika
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Konto zostało utworzone dla użytkownika: ${user.email}`);
        // Opcjonalnie możesz przekierować użytkownika na stronę logowania:
         window.location.href = "login.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Błąd: ${errorMessage}`);
      });
  });
});

