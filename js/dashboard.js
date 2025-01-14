const links = document.querySelectorAll('aside nav ul li a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');

        sections.forEach(section => {
            section.style.display = section.id === targetId ? 'block' : 'none';
        });
    });
});


// Funkcja do przełączania widoczności panelu
function togglePanel() {
    var panel = document.getElementById('slide-panel');

    if (panel.style.left === '0px') {
        panel.style.left = '-250px'; // Ukryj panel
    } else {
        panel.style.left = '0'; // Pokaż panel
    }
}



document.addEventListener("DOMContentLoaded", () => {
    // Pobierz element, który wyświetla e-mail użytkownika
    const userNameElement = document.querySelector('.header .nav-bar .nav-list ul li span');
  
    // Pobierz e-mail z localStorage
    const userEmail = localStorage.getItem('userEmail');
  
    // Jeśli e-mail jest dostępny, zaktualizuj tekst w elemencie
    if (userEmail) {
      userNameElement.textContent = `Witaj, ${userEmail}`;
    } else {
      userNameElement.textContent = "Witaj, gościu";
    }
  
    // Reszta Twojego kodu JavaScript (hamburger menu itp.)
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    });
  
    document.addEventListener('scroll', () => {
      var scroll_position = window.scrollY;
      if (scroll_position > 250) {
        header.style.backgroundColor = '#3B3B3B';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    });
  
    menu_item.forEach((item) => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
      });
    });
  });
  



  // Obsługuje kliknięcie na przycisk "Wyloguj się"
  const logoutButton = document.querySelector('.logout-btn');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      // Usuwanie danych użytkownika z localStorage
      localStorage.removeItem('userEmail');
      alert('Wylogowano.');
      // Przekierowanie na stronę logowania
      window.location.href = 'login.html';  // Zmieniamy na odpowiednią stronę logowania
    });
  }


  document.addEventListener("DOMContentLoaded", () => {
    // Pobierz email z localStorage (zakładając, że został zapisany podczas logowania)
    const userEmail = localStorage.getItem('userEmail');
    
    // Jeśli email jest zapisany w localStorage, uzupełnij formularz
    if (userEmail) {
      const emailInput = document.getElementById('email');
      emailInput.value = userEmail;
    }
  });










      // Funkcja, która pokazuje odpowiedni formularz i ukrywa pozostałe
      function showForm(formId) {
        // Ukryj wszystkie formularze
        const forms = document.querySelectorAll('.form-section');
        forms.forEach(form => {
            form.style.display = 'none';
        });

        // Pokaż wybrany formularz
        const selectedForm = document.getElementById(formId);
        if (selectedForm) {
            selectedForm.style.display = 'block';
        }
    }

    // Ustalamy domyślny widok, żeby na początku formularze były ukryte
    window.onload = () => {
        const forms = document.querySelectorAll('.form-section');
        forms.forEach(form => {
            form.style.display = 'none';
        });
    };



     // Funkcja do pokazywania cennika
     function showPricing() {
        document.getElementById('form-contact').style.display = 'none';
        document.getElementById('form-order').style.display = 'none';
        document.getElementById('pricing').style.display = 'block';
    }

    // Funkcja do przełączania formularzy
    function showForm(formId) {
        const forms = document.querySelectorAll('.form-section');
        forms.forEach(form => {
            form.style.display = 'none';
        });
        document.getElementById(formId).style.display = 'block';
    }