<template>
  <form @submit.prevent="login">
    <label for="email">E-mail</label>
    <input type="email" id="email" v-model="email">

    <label for="password">Password</label>
    <input type="password" id="password" v-model="password">
    <button type="submit" class="button" @click="login">Login</button>
  </form>
</template>

<script>
import firebase from 'firebase';
import notifier from '../../mixins/notifier';

export default {
  name: 'log-in',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mixins: [notifier],
  methods: {
    login() {
      // login to firebase with email and password
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // redirect to the admin page
          this.$router.push('/admin');
        })
        .catch((error) => {
          // display an warning notification
          this.showNotification('warning', error.message);
        })
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
