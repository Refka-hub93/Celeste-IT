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
</head>

<body>

    <header>

        <div id="logonav">
            <a href="index.php"><img src="./images/logo final.png" alt="logo celest-it"></a>

            <?php
            require_once 'includes/nav.php';
         ?>

        </div>

    </header>
    <main>
        <section>
            <h1>Fonctionnalités offertes par Celeste-IT</h1>
            <div id="features">
                <article>
                    <img src="images/iStock-1313113103.jpg" alt="">
                    <div>
                        <h2><i class="bi bi-layout-text-window-reverse me-2"
                                style="color: #007bff; font-size: 2rem;"></i> Tableau de Bord</h2>
                        <p>Vue d’ensemble claire et structurée</p>
                        <ul>
                            <li>📊 Accès rapide aux projets en cours</li>
                            <li>📅 Organisation optimisée grâce à une hiérarchisation des priorités</li>
                            <li>🖥 Interface visuelle intuitive pour une meilleure gestion</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <img src="images/iStock-1144568268.jpg" alt="">
                    <div>
                        <h2><i class="bi bi-kanban me-2" style="color: #28a745; font-size: 2rem;"></i> Listes de Tâches
                            (Kanban)</h2>
                        <p>Méthode Kanban pour une gestion efficace</p>
                        <ul>
                            <li>✅ Suivi en temps réel de l’évolution des tâches</li>
                            <li>🔄 Facilité de réorganisation des priorités</li>
                            <li>👥 Collaboration améliorée grâce à une meilleure visibilité des actions</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <img src="images/iStock-1406459160.jpg" alt="">
                    <div>
                        <h2><i class="bi bi-card-checklist me-2" style="color: #6c63ff; font-size:2rem;"></i>
                            Cartes/Tâches</h2>
                        <p>Détaillez chaque tâche avec précision</p>
                        <ul>
                            <li>📝 Clarté et structuration des tâches</li>
                            <li>💬 Meilleure communication grâce aux commentaires intégrés</li>
                            <li>👤 Répartition efficace du travail</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <img src="images/iStock-2184686696.jpg" alt="">
                    <div>
                        <h2><i class="bi bi-arrows-move me-2" style="color: #ff3103; font-size: 2rem;"></i> Drag and
                            Drop</h2>
                        <p>Un déplacement intuitif pour plus de flexibilité</p>
                        <ul>
                            <li>⚡ Gain de temps</li>
                            <li>🎯 Manipulation intuitive et fluide</li>
                            <li>🔧 Organisation agile et adaptable</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <img src="images/iStock-1406459160.jpg" alt="">
                    <div>
                        <h2><i class="bi bi-search me-2" style="color: #00b4d8; font-size: 2rem;"></i> Recherche</h2>
                        <p>Trouvez ce dont vous avez besoin en un instant</p>
                        <ul>
                            <li>🚀 Accès instantané aux informations recherchées</li>
                            <li>📂 Filtrage rapide pour une navigation fluide</li>
                            <li>⏳ Gain de productivité en évitant les pertes de temps</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <img src="images/iStock-1406459160.jpg" alt="">
                    <div>
                        <h2> <i class="bi bi-bell me-2" style="color: #e01cc3; font-size: 2rem;"></i> Notifications</h2>
                        <p>Restez informé en temps réel</p>
                        <ul>
                            <li>🔔 Communication instantanée et efficace</li>
                            <li>❗ Réduction des oublis et des erreurs</li>
                            <li>🤝 Amélioration du travail collaboratif</li>
                        </ul>
                    </div>
                </article>
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