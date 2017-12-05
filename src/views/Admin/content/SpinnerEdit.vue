<template lang="html">
  <section>
    <h2>Edit</h2>
    <div class="container border border-dark bg-light p-3 mb-4">
      <div class="form-row">
        <div class="form-group col">
          <label>Body</label>
          <quill-editor class="bg-white" v-model="spinner.body" :options="editorOptions"/>
        </div>
      </div>
      <div class="form-row">
        <h3>Ranges</h3>
        <div class="form-group col-12">
          <label for="frontend">Years of frontend</label>
          <input type="text" id="fe" class="form-control" v-model="spinner.range.frontend">
        </div>
        <div class="form-group col-12">
          <label for="consult">Years of consulting</label>
          <input type="text" id="consult" class="form-control" v-model="spinner.range.consult">
        </div>
        <div class="form-group col-12">
          <label for="frameworks">Frameworks</label>
          <input type="text" id="consult" class="form-control" v-model="spinner.range.frameworks">
        </div>
      </div>
      <div class="form-row">
        <h3>Checkboxes</h3>
        <div class="form-group col-12">
          <label for="exp">Experience</label>
          <input type="text" id="exp" class="form-control" v-model="spinner.checkboxes.exp">
        </div>
        <div class="form-group col-12">
          <label for="node">NodeJS</label>
          <input type="text" id="node" class="form-control" v-model="spinner.checkboxes.node">
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-6">
          <router-link class="btn btn-danger" to="/admin/spinner"><i class="fa fa-close"></i> Cancel</router-link>
        </div>
        <div class="col-6 text-right">
          <button type="submit" class="btn btn-primary" @click="update"><i class="fa fa-check"></i> Update</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
import { ubSectionsRef } from '../../../config';
import VueQuillEditor from 'vue-quill-editor';
import editorOptions from './editor-options';

export default {
  name: 'spinner-edit',
  props: ['spinners', 'update-spinner'],
  data () {
    return {
      /* Here we are filtering out the post containing the provided key in the router params
       * we are using Object.assign to copy the post by value not by reference
       * to prevent updating the poste when typing */
      spinner: Object.assign(
        {},
        (this.spinners.filter((spinner) => {
          return (spinner['.key'] === this.$route.params.key);
        }))[0]
      ),
      editorOptions
    }
  },
  methods: {
    update() {
      this.updateSpinner(this.spinner)
    }
  }
}
</script>

<style lang="css">
</style>
