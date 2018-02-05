# Utvecklarbolaget
Utvecklarbolaget site

## Development
Utvecklarbolaget is written in [Vue.js](https://vuejs.org/) with some additional packages:
- [Vue Router](https://router.vuejs.org/en/) - For routing
- [Vue Quill Editor](https://github.com/surmon-china/vue-quill-editor) - For rich text editor in CMS
- [Vue Analytics](https://github.com/MatteoGabriele/vue-analytics) - For handle analytics
- [FontAwesome](https://fontawesome.com/) - For icons
- [Axios](https://github.com/axios/axios) - For XMLHttpRequests with promises
- [Lodash](https://lodash.com/) - For helpful some helpful utilities
- [Typed JS](https://github.com/mattboldt/typed.js/) - For the dynamic typing on start page
- [Bezier Easing](https://github.com/gre/bezier-easing) - For some cubic-bezier calculations when scrolling

Utvecklarbolaget uses [Firebase](https://firebase.google.com/) for:
- Authentication to CMS
- Database
- Storage images
- Hosting the demo-site.

## Deploy changes to firebase (demo site)

1. Install [firebase-tools](https://github.com/firebase/firebase-tools) - `npm i -g firebase-tools`
2. Run `firebase login`
3. Browser window will be opened - you need to log in with the credentials provided in email
4. Build project `npm run build`. (With report) `npm run build --report`
5. Deploy project to firebase `firebase deploy`
6. Check that the changes are available on the [demo site](https://utvecklarbolaget-2.firebaseapp.com)

## Deploy to prod
Use an FTP client and upload the content in the `/dist` folder:
  1. `index.html`
  2. `/static/`
