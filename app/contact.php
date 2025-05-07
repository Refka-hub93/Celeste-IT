<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page des fonctionnalitésl</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

    <link rel="stylesheet" href="css/scripts.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="javascript/contact.js" defer></script>
</head>

<body>

    <header>

        <div id="logonav">
            <a href="index.php"><img src="./images/logo final.png" alt="logo celest-it"></a>
            
            <?php require_once 'includes/nav.php'; ?>

        </div>

    </header>

    <main>
        <section class="formulaire container py-4">
            <form id="contactForm" action="" method="post">
                <h2 class="text-center mb-4"> Formulaire de contact</h2>

                <!-- Nom -->
                <div class="mb-3">
                    <label for="name" class="form-label">Nom :</label>
                    <input type="text" id="name" name="name" class="form-control" required>
                    <small id="nameError" class="text-danger"></small>
                </div>

                <!-- Email -->
                <div class="mb-3">
                    <label for="email" class="form-label">Email :</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                    <small id="emailError" class="text-danger"></small>
                </div>

                <!-- Message -->
                <div class="mb-3">
                    <label for="message" class="form-label">Message :</label>
                    <textarea id="message" name="message" class="form-control" placeholder="Écrivez votre texte ici..." rows="4" required></textarea>
                    <small id="messageError" class="text-danger"></small>
                </div>

                <!-- RGPD -->
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="rgpd" name="accept_terms" required>
                    <label for="rgpd" class="form-check-label">
                        J'accepte la collecte de mes données et les <a href="conditions.html">conditions générales</a>
                    </label>
                    <small id="rgpdError" class="text-danger"></small>
                </div>

                <!-- Bouton -->
                <div class="col-12">
                    <button type="submit" class="btn btn-primary px-4 py-2">Se connecter</button>
                </div>
            </form>
        </section>




        <!-- Section Coordonnées -->
        <section id="secondaire" class="text-center">
            <div>
                <h2>📍 Nos coordonnées</h2>
                <ul>
                    <li class="m-3"><strong>Céleste IT</strong></li>
                    <li>🏢 Adresse : 42 Avenue du Numérique, 75000 Paris, France</li>
                    <li>📞 Téléphone : +33 1 23 45 67 89</li>
                    <li>📧 Email : contact@celeste-it.com</li>

                </ul>
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