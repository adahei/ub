<template lang="html">
  <section>
    <h2>New</h2>
    <div class="container border border-dark bg-light p-3 mb-4">
      <div class="form-row">
        <div class="form-group col-2">
          <label for="order">Order</label>
          <input type="text" id="order" class="form-control" v-model="order">
        </div>
        <div class="form-group col-10">
          <label for="text">Text</label>
          <input type="text" id="text" class="form-control" v-model="text">
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <button type="submit" class="btn btn-primary" @click="add"><i class="fa fa-check"></i> Add</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
import { ubHeroRef } from '../../../config';

export default {
  name: 'hero-new',
  props: ['add-hero'],
  data () {
    return {
      order: 0,
      text: ''
    }
  },
  methods: {
    add () {
      this.addHero ({
        order: this.order,
        text: this.text
      })
    }
  }
}
</script>

<style lang="css">
</style>
