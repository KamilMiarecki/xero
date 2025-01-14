<?php

// Replace this with your own email address
$to = 'janekfranek12345@int.pl'; // Wpisz tutaj swój adres e-mail

function url() {
    return sprintf(
        "%s://%s",
        isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
        $_SERVER['SERVER_NAME']
    );
}

if ($_POST) {

    // Pobieranie i czyszczenie danych z formularza
    $name = trim(stripslashes($_POST['name']));
    $email = trim(stripslashes($_POST['email']));
    $phone = trim(stripslashes($_POST['phone']));
    $format = trim(stripslashes($_POST['format']));
    $quantity = trim(stripslashes($_POST['quantity']));
    $contact_message = trim(stripslashes($_POST['message']));

    // Sprawdzanie brakujących danych i ustawianie domyślnych wartości
    if ($phone == '') { $phone = "N/A"; }
    if ($format == '') { $format = "N/A"; }
    if ($quantity == '') { $quantity = "N/A"; }

    // Tytuł wiadomości
    $subject = "Formularz kontaktowy wydruku";

    // Budowanie treści wiadomości
    $message = "";
    $message .= "Imię: " . $name . "<br />";
    $message .= "Email: " . $email . "<br />";
    $message .= "Numer telefonu: " . $phone . "<br />";
    $message .= "Format pracy: " . $format . "<br />";
    $message .= "Ilość sztuk: " . $quantity . "<br />";
    $message .= "Wiadomość: <br />";
    $message .= nl2br($contact_message);
    $message .= "<br /><br />-----<br />Ta wiadomość została wysłana z formularza na stronie: " . url() . "<br />";

    // Ustawianie nagłówków e-maila
    $from = $name . " <" . $email . ">";
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Wysyłanie e-maila
    ini_set("sendmail_from", $to); // Tylko na serwerach Windows
    $mail = mail($to, $subject, $message, $headers);

    // Wyświetlanie odpowiedzi
    if ($mail) {
        echo "OK"; // Wysłanie zakończone sukcesem
    } else {
        echo "Coś poszło nie tak. Spróbuj ponownie."; // Błąd wysyłania
    }
}

?>
