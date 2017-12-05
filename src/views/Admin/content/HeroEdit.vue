<template lang="html">
  <section>
    <h2>Edit</h2>
    <div class="container border border-dark bg-light p-3 mb-4">
      <div class="form-row">
        <div class="form-group col-2">
          <label for="order">Order</label>
          <input type="text" id="order" class="form-control" v-model="hero.order">
        </div>
        <div class="form-group col-10">
          <label for="text">Text</label>
          <input type="text" id="text" class="form-control" v-model="hero.text">
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <button type="submit" class="btn btn-primary" @click="update"><i class="fa fa-check"></i> Update</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
import { ubHeroRef } from '../../../config';

export default {
  name: 'hero-edit',
  props: ['heroes', 'update-hero'],
  data () {
    return {
      /* Here we are filtering out the post containing the provided key in the router params
       * we are using Object.assign to copy the post by value not by reference
       * to prevent updating the poste when typing */
      hero: Object.assign(
        {},
        (this.heroes.filter((hero) => {
          return (hero['.key'] === this.$route.params.key);
        }))[0]
      )
    }
  },
  methods: {
    update () {
      this.updateHero(this.hero)
    }
  }
}
</script>

<style lang="css">
</style>
