<template lang="html">
  <section>
    <h2>New</h2>
    <div class="container border border-dark bg-light p-3 mb-4">
      <div class="form-row">
        <div class="form-group col">
          <label>Body</label>
          <quill-editor class="bg-white" v-model="body" :options="editorOptions"/>
        </div>
      </div>
      <div class="form-row">
        <h3>Ranges</h3>
        <div class="form-group col-12">
          <label for="frontend">Years of frontend</label>
          <input type="text" id="fe" class="form-control" v-model="range.frontend">
        </div>
        <div class="form-group col-12">
          <label for="consult">Years of consulting</label>
          <input type="text" id="consult" class="form-control" v-model="range.consult">
        </div>
        <div class="form-group col-12">
          <label for="frameworks">Frameworks</label>
          <input type="text" id="consult" class="form-control" v-model="range.frameworks">
        </div>
      </div>
      <div class="form-row">
        <h3>Checkboxes</h3>
        <div class="form-group col-12">
          <label for="exp">Experience</label>
          <input type="text" id="exp" class="form-control" v-model="checkboxes.exp">
        </div>
        <div class="form-group col-12">
          <label for="node">NodeJS</label>
          <input type="text" id="node" class="form-control" v-model="checkboxes.node">
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
import { ubSectionsRef } from '../../../config';
import VueQuillEditor from 'vue-quill-editor';
import editorOptions from './editor-options';

export default {
  name: 'spinner-new',
  props: ['add-spinner'],
  data () {
    return {
      body: '',
      editorOptions,
      range: {
        frontend: '',
        consult: '',
        frameworks: ''
      },
      checkboxes: {
        exp: '',
        node: ''
      }
    }
  },
  methods: {
    add () {
      this.addSpinner ({
        body: this.body,
        range: {
          frontend: this.range.frontend,
          consult: this.range.consult,
          frameworks: this.range.frameworks
        },
        checkboxes: {
          exp: this.checkboxes.exp,
          node: this.checkboxes.node
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
