# 🎓 Major de promo

Le jeu de cartes à collectionner des écoles supérieures de France : ouvre des pochettes gratuites, complète ton album de plus de 7 000 écoles et lycées, échange avec tes amis et grimpe dans le classement. bahhhhhhhh

- **Partout** : pochettes payées en diplômes 🎓 (1 diplôme offert toutes les 10 minutes, d’autres avec les succès), ouverture par 1, 2, 5 ou 10, album, souhaits, favoris, collections et succès, vitrine, banque et boutique.
- **En ligne pour tous les joueurs** (avec Firebase) : pseudos uniques, demandes d’amis, classements, profils avec vitrine, échanges de cartes entre amis, marché entre joueurs et sauvegarde de l’album.
- **Installable sur mobile** : depuis le navigateur, « Ajouter à l’écran d’accueil » installe Major de promo comme une application, avec son icône.

Données des établissements : Onisep, jeu « Idéo-Structures d’enseignement supérieur » (data.gouv.fr), licence ODbL.

---

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Le jeu complet (une seule page). |
| `firebase-config.js` | La configuration de ton projet Firebase, à remplir. |
| `firestore.rules` | Les règles de sécurité de la base de données, à copier dans Firebase. |
| `manifest.webmanifest`, `sw.js` | L’installation sur mobile (icône, plein écran). |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Les icônes de l’application. |
| `og-image.jpg` | L’image affichée quand le lien est partagé (messageries, réseaux sociaux). |
| `README.md` | Ce guide. |

---

## Mise en ligne en 3 étapes (environ 15 minutes)

### Étape 1 : déposer les fichiers sur GitHub

1. Ouvre le dépôt `https://github.com/ocrafix/Grand_oral`.
2. Clique sur **Add file**, puis **Upload files**.
3. Glisse tous les fichiers de ce dossier (10 fichiers), puis clique sur **Commit changes**.

### Étape 2 : activer GitHub Pages

1. Dans le dépôt, va dans **Settings**, puis **Pages** (menu de gauche).
2. Sous **Build and deployment**, choisis **Source : Deploy from a branch**.
3. Choisis la branche **main** et le dossier **/ (root)**, puis **Save**.
4. Au bout d’une à deux minutes, le lien du jeu s’affiche en haut de la page :
   **`https://ocrafix.github.io/Grand_oral/`**

À ce stade, le jeu fonctionne déjà en mode local pour tout le monde.

### Étape 3 : activer le mode en ligne avec Firebase (gratuit)

1. Va sur **https://console.firebase.google.com** et connecte-toi avec un compte Google.
2. Clique sur **Créer un projet**, nomme-le `grand-oral`, et désactive Google Analytics (inutile ici).
3. **Activer la connexion des joueurs**
   - Menu **Build**, puis **Authentication**, puis **Commencer**.
   - Onglet **Sign-in method** : active **Anonyme**, puis **Enregistrer**.
   - Onglet **Settings**, puis **Domaines autorisés** : ajoute `ocrafix.github.io`.
4. **Créer la base de données**
   - Menu **Build**, puis **Firestore Database**, puis **Créer une base de données**.
   - Choisis l’emplacement **europe-west** et le **mode production**.
   - Onglet **Règles** : remplace tout le contenu par celui du fichier `firestore.rules`, puis clique sur **Publier**.
5. **Récupérer la configuration**
   - Clique sur la roue dentée ⚙️, puis **Paramètres du projet**.
   - En bas, dans **Vos applications**, clique sur l’icône **</>** (Web), donne un nom (`Major de promo`), puis **Enregistrer l’application**.
   - Copie les valeurs affichées (`apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`).
6. **Les coller dans le jeu**
   - Sur GitHub, ouvre `firebase-config.js`, clique sur le crayon ✏️ pour le modifier.
   - Remplace chaque `À_REMPLIR` par la bonne valeur, puis **Commit changes**.
7. Attends une minute, recharge `https://ocrafix.github.io/Grand_oral/` : le mode en ligne est actif.

Les clés de `firebase-config.js` ne sont pas secrètes : c’est normal qu’elles soient visibles. La sécurité repose sur les règles de `firestore.rules`.

---

## Comment fonctionnent les comptes

- Chaque joueur est connecté automatiquement et anonymement à Firebase, puis choisit un **pseudo unique** parmi tous les joueurs.
- L’album est **sauvegardé en ligne** et lié au navigateur utilisé. Si le joueur efface les données de son navigateur ou change d’appareil, il repart avec un nouveau compte.
- Le premier compte créé sur un appareil récupère l’album déjà commencé hors ligne.

## Mettre à jour le jeu

Pour publier une nouvelle version, dépose les nouveaux fichiers sur GitHub (**Add file**, puis **Upload files**), sauf `firebase-config.js`, pour garder ta configuration. Si `firestore.rules` a changé, recopie-le aussi dans Firebase (**Firestore Database**, puis **Règles**, puis **Publier**).

## Réglages du jeu

Au début du script de `index.html` :
- `DIP_INFINITE=true` : les diplômes sont illimités pour le moment. Passe-le à `false` pour que chaque pochette payée en diplômes en consomme un.
- `GOD_CHANCE` : la chance qu’une pochette devienne un God pack (1 %).

## Limites de l’offre gratuite Firebase

L’offre Spark permet environ 50 000 lectures et 20 000 écritures par jour, ce qui suffit pour plusieurs centaines de joueurs actifs chaque jour. Le suivi se fait dans Firebase, menu **Usage and billing**.
