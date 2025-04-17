
<?php

$errors = [];
$rempli = "";
$name = $message = $email = ""; // Initialisation des champs


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = htmlspecialchars(trim($_POST['name']));
    $email = $_POST['email'];
    $message = htmlspecialchars($_["message"]);

    if (empty($name) || empty($email) || empty($message)) {
        die('Vous devez remplir tous les champs');
    }

    if (strlen($name) > 100 || strlen($message) > 500 || filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Au moins un des champs est invalide');
    }
}

?>