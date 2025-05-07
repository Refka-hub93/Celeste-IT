<?php

session_start();
// include_once 'includes/verify_session.php';


?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page de connexion</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

    <link rel="stylesheet" href="css/scripts.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="javascript/connexion.js" defer></script>
</head>

<body>


    <header>

        <div id="logonav">
            <a href="index.php"><img src="./images/logo final.png" alt="logo celest-it"></a>

            <?php require_once 'includes/nav.php'; ?>
        </div>

    </header>
    <main>

    <?php if(isset($_SESSION['message'])) : ;?>
        <div class="bg-warning fs-3 rounded-3 text-center">
            <?= $_SESSION['message'];?>
        </div>
        <?php endif;?>
        <section class="formulaire container py-5" id="connexion">

            <form action="connexion_traitement.php" method="post" class="row g-4" id="loginForm">
                <h2 class="text-center mb-4"> Se connecter</h2>
                <!-- Champ Email -->
                <div class="col-12">
                    <label for="email" class="form-label">Email :</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="Entrez votre email"
                    value="<?= $_SESSION['data']['email'] ?? '';?>">
                    <small class="text-danger" id="emailError"></small>
                </div>

                <!-- Champ Mot de passe -->
                <div class="col-12">
                    <label for="password" class="form-label">Mot de passe :</label>
                    <input type="password" id="password" name="password" class="form-control"
                        placeholder="Entrez votre mot de passe" required>
                    <div class="error" id="passError"></div>

                    <small class="text-danger" id="passError"></small>
                </div>
                <div class="my-3">
                <a  href="password-reset-request.php">Mots de passe oublié</a>
            </div>
                <!-- Bouton -->
                <div class="col-12">
                    <button type="submit" class="btn btn-primary px-4 py-2">Se connecter</button>
                </div>
            </form>
        </section>


        <!-- Section Accroche -->
        <section id="secondaire" class="text-center pb-5">
            <div>
                <h2>🚀 Rejoignez la communauté Céleste IT</h2>
                <p>Accédez à votre espace personnel et gérez vos projets en toute simplicité.</p>
                <ul >
                    <li>✔ Suivi en temps réel de vos tâches</li>
                    <li>✔ Collaboration fluide avec votre équipe</li>
                    <li>✔ Notifications et rappels intelligents</li>
                </ul>
                <p>Pas encore de compte ? </p>
                
                <a href="nouveaucompte.php"> <p>Créez-en un maintenant</a> et boostez votre
                    productivité !</p>
            </div>
        </section>

    </main>
    <footer>
        <ul>
            <li>
                Confidentialité
            </li>
            <li>Conditions légales</li>
            <li>CGV</li>
            <li>Contact</li>
        </ul>
        <p id="copy"> © 2025 Celeste-It - Tous droits résevés</p>
    </footer>
</body>

</html>