<template>
  <section>
    <h2>New section</h2>
    <div class="container border border-dark bg-light p-3 mb-4">
      <div class="form-row">
        <div class="form-group col-10">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="title">
          <div class="form-check">
            <label for="showTitle" class="form-check-label">
              <input type="checkbox" id="showTitle" class="form-check-input" v-model="showTitle"> Show title
            </label>
          </div>
        </div>
        <div class="form-group col-2">
          <label for="order">Order</label>
          <input type="number" class="form-control" id="order" v-model="order">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-8">
          <h3>Content</h3>
          <label>Content</label>
          <quill-editor class="bg-white" v-model="body" :options="editorOptions"/>

          <label for="file">Attach files</label>
          <input id="file" @change="uploadFeaturedImage" class="form-control-file" type="file" name="resume">
          <img v-if="featuredImage" :src="featuredImage" class=" mx-auto d-block" style="max-width: 50%">
        </div>
        <div class="form-group col-4">
          <h3>Quotes</h3>
          <label for="quote">Quote</label>
          <textarea id="quote" class="form-control" v-model="quote.body"></textarea>
          <label for="source">Source</label>
          <input type="text" id="source" class="form-control" v-model="quote.source">
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-6">
          <router-link class="btn btn-danger" to="/admin/ubSections"><i class="fa fa-close"></i> Cancel</router-link>
        </div>
        <div class="col-6 text-right">
          <button type="submit" class="btn btn-primary" @click="add"><i class="fa fa-check"></i> Add</button>
        </div>
      </div>
    </div>

    <aside class="border border-dark p-3 mb-4">
      <p class="badge badge-pill badge-secondary">Preview</p>
      <h1>{{title}}</h1>
      <div v-html="body"></div>
      <div v-if="quote.body">
        <blockquote>
          {{ quote.body }}
          <footer>{{ quote.source }}</footer>
        </blockquote>
      </div>
    </aside>
  </section>




  <!-- <div>
    <h3>Add new section</h3>
    <div>
      <input type="number" v-model="order" placeholder="order">
    </div>
    <div>
      <input type="text" v-model="title" placeholder="title">
      <label for="showTitle">show title
        <input type="checkbox" v-model="showTitle">
      </label>
    </div>

    <div>
      <quill-editor v-model="body" :options="editorOptions">
      </quill-editor>
      <input type="file" id="getImage" style="display: none;" @change="uploadImage">
    </div>

    <div class="field">
      <label class="label">Image</label>
      <img :src="featuredImage">
      <label>
        <input @change="uploadFeaturedImage" type="file" name="resume">
        Fil
      </label>
    </div>

    <div>
      <input type="text" v-model="quote.source" placeholder="source">
      <textarea v-model="quote.body"></textarea>
    </div>

    <button type="submit" @click="add">Add</button>
    <router-link to="/admin/ubSections">Cancel</router-link>
  </div> -->
</template>

<script>
import firebase from 'firebase'

import { mediaRef } from '../../../config';
import VueQuillEditor from 'vue-quill-editor';
import editorOptions from './editor-options';
import imageLoader from '../../../mixins/image-loader';
// import notifier from '../../../mixins/notifier';

export default {
  name: 'ubSections-new',
  data() {
    return {
      order: '0',
      title: '',
      showTitle: true,
      quote: {
        body: '',
        source: ''
      },
      body: '',
      featuredImage: '',
      editorOptions
    }
  },
  firebase: {
    media: mediaRef
  },
  props: ['add-section'],
  mixins: [imageLoader],
  methods: {
    add() {
      if (this.title) {
        this.addSection ({
          order: this.order,
          title: this.title,
          showTitle: this.showTitle,
          body: this.body,
          quote: {
            body: this.quote.body,
            source: this.quote.source
          },
          img: this.featuredImage,
          created: Date.now(),
          updated: Date.now()
        })
      } else {
        // this.showNotification('warning', 'The title field can not be empty');
      }

    },
    uploadFeaturedImage (e) {
      let file = e.target.files[0];
      let storageRef = firebase.storage().ref('images/' + file.name);

      storageRef.put(file).then((function (snapshot) {
        console.log(snapshot)
        this.featuredImage = snapshot.downloadURL;
        if (Object.values(this.media).find(e => e.path === snapshot.ref.fullPath)) return // this prevents duplicate entries in the media object
        this.$firebaseRefs.media.push({
          src: snapshot.downloadURL,
          path: snapshot.ref.fullPath,
          name: snapshot.metadata.name
        })
      }).bind(this));
    }
  }
}

</script>
