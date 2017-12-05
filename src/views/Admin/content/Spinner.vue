<template lang="html">
  <div class="container">
    <header class="row align-items-center">
      <div class="col">
        <h1>UB Spinner</h1>
      </div>
      <div class="col text-right">
        <!-- <router-link to="/admin/spinner/new" class="btn btn-primary"><i class="fa fa-plus"></i> Add New</router-link> -->
      </div>
    </header>

    <router-view :add-spinner="addSpinner" :update-spinner="updateSpinner" :spinners="ubSpinner" :key="$route.name + ($route.params.key || '')"/>

    <div v-for="(spinner, index) in ubSpinner" :key="index">
      <router-link class="btn btn-primary" :to="'/admin/spinner/edit/' + spinner['.key']">Edit</router-link>
    </div>
  </div>
</template>

<script>
import { ubSpinnerRef } from '../../../config';

export default {
  name: 'spinner',
  firebase: {
    ubSpinner: ubSpinnerRef
  },
  methods: {
    addSpinner (spinner) {
      this.$firebaseRefs.ubSpinner.push(spinner).then(() => {
        console.log('OK')
        this.$router.push('/admin/spinner');
        // this.showNotification('success', 'Post added successfully');
      })
    },
    updateSpinner(spinner) {
      console.log(JSON.stringify(spinner), spinner)
      // create a copy of the item
      let tempSpinner = { ...spinner };
      // remove the .key attribute
      delete tempSpinner['.key'];
      this.$firebaseRefs.ubSpinner.child(spinner['.key']).set(tempSpinner).then(() => {
        this.$router.push('/admin/spinner');
        console.log('Updated')
        // this.showNotification('success', 'Post updated successfully');
      });
    }
  }
}
</script>

<style lang="css">
</style>
