<template>
  <div class="admin">
    <navbar class="admin__nav"></navbar>
    <div class="admin__main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Admin/layout/Navbar';
import firebase from 'firebase';

export default {
  name: 'admin',
  components: {
    'navbar': Navbar
  },
  // prevent unauthenticated users from accessing the admin area
  // and direct them to the login page
  beforeRouteEnter(to, from, next) {
    // get the current logged in user
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // continue to /admin
        next();
      } else {
        // redirect to /login
        next('/login');
      }
    })
  }
};

</script>

<style lang="scss">
@import '../styles/admin';
.admin {
  display: flex;
  height: 100%;
  &__main {
    flex: 1;
    overflow: auto;
  }
}
</style>
