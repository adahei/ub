<template>
  <div class="container">
    <header class="row align-items-center">
      <div class="col">
        <h1>UB Sections</h1>
      </div>
      <div class="col text-right">
        <router-link to="/admin/ubSections/new" class="btn btn-primary"><i class="fa fa-plus"></i> Add New</router-link>
      </div>
    </header>

    <router-view :add-section="addSection" :update-section="updateSection" :sections="ubSections" :key="$route.name + ($route.params.key || '')"/>

    <div class="row">
      <div class="col">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(section, index) in sortedSections" :key="index" :class="{'table-info': isCurrent(section['.key'])}">
              <td>{{ section.order }}</td>
              <td>
                <router-link :to="'/admin/ubSections/edit/' + section['.key']">{{section.title}}</router-link>
              </td>
              <td>{{ section.updated }}</td>
              <td class="text-right">
                <router-link class="btn btn-light" :to="'/admin/ubSections/edit/' + section['.key']"><i class="fa fa-pencil"></i> Edit</router-link>
                <a href="#" class="btn btn-danger" @click.prevent="deleteSection(section)"><i class="fa fa-trash"></i> Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { ubSectionsRef } from '../../../config';
// import notifier from '../../../mixins/notifier';

export default {
  name: 'ubSections',
  firebase: {
    ubSections: ubSectionsRef
  },
  // mixins: [notifier],
  computed: {
    sortedSections () {
      var sections = this.ubSections
      sections = _.sortBy(sections, 'order')
      return sections
    }
  },
  methods: {
    isCurrent (key) {
      let path = '/admin/ubSections/edit/' + key
      if (path === this.$route.path) {
        return true
      }
      return false
    },
    addSection (section) {
      this.$firebaseRefs.ubSections.push(section).then(() => {
        console.log('OK')
        this.$router.push('/admin/ubSections');
        // this.showNotification('success', 'Post added successfully');
      })
    },
    deleteSection(section) {
      // delete post form firebase
      if (confirm("Do you really want to delete this section ?")) {
        this.$firebaseRefs.ubSections.child(section['.key']).remove().then(() => {
          console.log('Deleted')
          // this.showNotification('success', 'Post deleted successfully');
        })
      }
    },
    updateSection(section) {
      console.log(JSON.stringify(section), section)
      // create a copy of the item
      let tempSection = { ...section };
      // remove the .key attribute
      delete tempSection['.key'];
      this.$firebaseRefs.ubSections.child(section['.key']).set(tempSection).then(() => {
        this.$router.push('/admin/ubSections');
        console.log('Updated')
        // this.showNotification('success', 'Post updated successfully');
      });
    }
  }
}

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
