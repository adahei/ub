/* This is the Firebase configuration file*/

import Firebase from 'firebase';

let config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

let app = Firebase.initializeApp(config);
let db = app.database();

// create a database references
const ubSectionsRef = db.ref('ubSections');
const ubSpinnerRef = db.ref('ubSpinner');
const ubHeroRef = db.ref('ubHero');
const settingsRef = db.ref('settings');
const pagesRef = db.ref('pages');
const postsRef = db.ref('posts');
const usersRef = db.ref('users');
const mediaRef = db.ref('media');

export { ubSectionsRef, ubSpinnerRef, ubHeroRef, postsRef, usersRef, settingsRef, pagesRef, mediaRef };
