<template>
  <section>
    <h2>Edit section</h2>
    <div class="container border border-dark bg-light p-3 mb-4">
      <div class="form-row">
        <div class="form-group col-10">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="section.title">
          <div class="form-check">
            <label for="showTitle" class="form-check-label">
              <input type="checkbox" id="showTitle" class="form-check-input" v-model="section.showTitle"> Show title
            </label>
          </div>
        </div>
        <div class="form-group col-2">
          <label for="order">Order</label>
          <input type="number" class="form-control" id="order" v-model="section.order">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-8">
          <h3>Content</h3>
          <label>Content</label>
          <quill-editor class="bg-white" v-model="section.body" :options="editorOptions"/>

          <label for="file">Attach files</label>
          <input id="file" @change="uploadFeaturedImage" class="form-control-file" type="file" name="resume">
          <img v-if="section.img" :src="section.img" class=" mx-auto d-block" style="max-width: 50%">
        </div>
        <div class="form-group col-4">
          <h3>Quotes</h3>
          <label for="quote">Quote</label>
          <textarea id="quote" class="form-control" v-model="section.quote.body"></textarea>
          <label for="source">Source</label>
          <input type="text" id="source" class="form-control" v-model="section.quote.source">
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-6">
          <router-link class="btn btn-danger" to="/admin/ubSections"><i class="fa fa-close"></i> Cancel</router-link>
        </div>
        <div class="col-6 text-right">
          <button type="submit" class="btn btn-primary" @click="update"><i class="fa fa-check"></i> Update</button>
        </div>
      </div>
    </div>

    <aside class="border border-dark p-3 mb-4">
      <p class="badge badge-pill badge-secondary">Preview</p>
      <h1>{{section.title}}</h1>
      <div v-html="section.body"></div>
      <div v-if="section.quote.body">
        <blockquote>
          {{ section.quote.body }}
          <footer>{{ section.quote.source }}</footer>
        </blockquote>
      </div>
    </aside>
  </section>
</template>

<script>
import firebase from 'firebase'

import { mediaRef } from '../../../config';
import VueQuillEditor from 'vue-quill-editor';
import editorOptions from './editor-options';
import imageLoader from '../../../mixins/image-loader';
// import notifier from '../../../mixins/notifier';

export default {
  name: 'ubSections-edit',
  data() {
    return {
      /* Here we are filtering out the post containing the provided key in the router params
       * we are using Object.assign to copy the post by value not by reference
       * to prevent updating the poste when typing */
      section: Object.assign(
        {},
        (this.sections.filter((section) => {
          return (section['.key'] === this.$route.params.key);
        }))[0]
      ),
      editorOptions
    }
  },
  firebase: {
    media: mediaRef
  },
  props: ['sections', 'update-section'],
  mixins: [imageLoader],
  methods: {
    // call the updatePost method passed through props
    update() {
      if (this.section.title) {
        this.updateSection(this.section)
      } else {
        // this.showNotification('warning', 'The title field can not be empty');
      }
    },
    uploadFeaturedImage (e) {
      let file = e.target.files[0];
      let storageRef = firebase.storage().ref('images/' + file.name);
      storageRef.put(file).then((function (snapshot) {
        this.section.img = snapshot.downloadURL;
        if (Object.values(this.media).find(e => e.path === snapshot.ref.fullPath)) return // this prevents duplicate entries in the media object
        this.$firebaseRefs.media.push({
          src: snapshot.downloadURL,
          path: snapshot.ref.fullPath,
          name: snapshot.metadata.name
        })
      }).bind(this));
    }
  },
  computed: {
  }
}

</script>
