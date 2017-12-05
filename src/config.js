/* This is the Firebase configuration file*/

import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyDrSRiG3yXWtNNw219uQrCST92w8t5dOQg',
  authDomain: 'utvecklarbolaget-2e215.firebaseapp.com',
  databaseURL: 'https://utvecklarbolaget-2e215.firebaseio.com',
  projectId: 'utvecklarbolaget-2e215',
  storageBucket: 'utvecklarbolaget-2e215.appspot.com',
  messagingSenderId: '1045194096281'
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
