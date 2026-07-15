# Portfolio Game Boy — feuille de route

Cette liste est volontairement organisée par étapes. Finir une étape avant de complexifier la suivante permettra de garder un site rapide et facile à modifier.

## 1. Prototype 3D

- [x] Installer et configurer React Three Fiber / Drei
- [x] Charger une Game Boy Advance SP depuis les assets
- [x] Limiter la 3D à une section de la page
- [x] Ajouter une caméra, des lumières et des ombres
- [x] Autoriser la rotation à la souris et au tactile
- [x] Adapter le cadrage aux écrans mobiles
- [x] Choisir définitivement le modèle 3D
- [x] Corriger son orientation et son cadrage final
- [x] Ajouter un écran de chargement avec une progression visible
- [ ] Afficher un message de secours si WebGL est indisponible

## 2. Optimisation du modèle

- [ ] Compresser les textures et réduire leur résolution
- [ ] Convertir les textures en WebP ou KTX2
- [ ] Compresser la géométrie avec Meshopt ou Draco
- [ ] Supprimer les meshes et matériaux inutilisés
- [ ] Viser un modèle final inférieur à 10 Mo, idéalement 3–6 Mo
- [ ] Vérifier le rendu sur téléphone et connexion lente
- [ ] Créditer l'auteur du modèle et afficher sa licence CC BY 4.0

## 3. Écran de la Game Boy

- [ ] Définir le style de l'interface : pixel art, terminal 42 ou hybride
- [ ] Remplacer l'écran original du modèle par un écran dynamique
- [ ] Créer un menu piloté par des données TypeScript
- [ ] Ajouter les états : accueil, menu, liste, détail et retour
- [ ] Afficher la catégorie et l'élément actuellement sélectionnés
- [ ] Ajouter une animation courte entre deux écrans
- [ ] Tester la lisibilité et le contraste dans la scène 3D

## 4. Contrôles interactifs

- [ ] Rendre la croix directionnelle cliquable
- [ ] Utiliser haut/bas pour parcourir le menu
- [ ] Associer A à « ouvrir / valider »
- [ ] Associer B à « retour »
- [ ] Définir les actions de Start et Select
- [ ] Animer l'enfoncement des boutons
- [ ] Ajouter un retour sonore optionnel avec bouton mute
- [ ] Ajouter les équivalents clavier : flèches, Entrée et Échap
- [ ] Ajouter des contrôles HTML accessibles sur mobile
- [ ] Ne pas confondre la manipulation de la console avec les clics sur les boutons

## 5. Contenu du portfolio

- [ ] Écrire une courte présentation
- [ ] Choisir les catégories définitives
- [ ] Préparer les projets 42 à présenter
- [ ] Pour chaque projet : titre, description, technologies et difficultés
- [ ] Pour chaque projet : image, dépôt GitHub et démonstration si disponible
- [ ] Ajouter une section compétences
- [ ] Ajouter le CV en HTML
- [ ] Ajouter une version PDF téléchargeable du CV
- [ ] Ajouter les liens GitHub, LinkedIn et e-mail
- [ ] Relire tous les textes en français et en anglais si le site devient bilingue

## 6. Reste de la page

- [ ] Définir une direction artistique cohérente avec la console
- [ ] Ajouter une navigation classique en complément de la Game Boy
- [ ] Concevoir une section projets sous la scène 3D
- [ ] Tester l'idée de cartouches 3D pour représenter les projets
- [ ] Ajouter une section À propos
- [ ] Ajouter une section Contact
- [ ] Créer un footer avec crédits et licence du modèle
- [ ] Éviter de multiplier les objets 3D sans fonction claire

## 7. Responsive et accessibilité

- [ ] Tester à 320 px, 375 px, 768 px, 1024 px et grand écran
- [ ] Vérifier le site au clavier uniquement
- [ ] Ajouter des libellés accessibles aux contrôles
- [ ] Respecter `prefers-reduced-motion`
- [ ] Prévoir une version utilisable sans manipulation 3D
- [ ] Vérifier les contrastes WCAG
- [ ] Tester VoiceOver ou NVDA

## 8. Performance et qualité

- [ ] Charger la scène 3D uniquement lorsqu'elle devient visible
- [ ] Charger les images de projets à la demande
- [ ] Réduire le DPR et les effets sur les appareils modestes
- [ ] Lancer Lighthouse et corriger les problèmes principaux
- [ ] Ajouter une limite d'erreur React autour du canvas
- [ ] Supprimer les assets et styles devenus inutiles
- [ ] Exécuter `npm run lint`
- [ ] Exécuter `npm run build`

## 9. GitHub Pages et livraison

- [x] Ajouter un workflow GitHub Actions pour GitHub Pages
- [ ] Vérifier le nom exact du dépôt et la valeur `base` de Vite
- [ ] Vérifier que tous les assets sont inclus dans le build
- [ ] Activer GitHub Pages avec GitHub Actions dans les paramètres du dépôt
- [ ] Ajouter favicon, titre et description SEO
- [ ] Ajouter les métadonnées Open Graph
- [ ] Ajouter un nom de domaine personnalisé si souhaité
- [ ] Tester le site déployé sur ordinateur et téléphone
- [ ] Vérifier les liens externes et le PDF du CV après chaque livraison
