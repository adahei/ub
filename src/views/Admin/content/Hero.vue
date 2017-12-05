<template lang="html">
  <div class="container">
    <header class="row align-items-center">
      <div class="col">
        <h1>UB Hero</h1>
      </div>
      <div class="col text-right">
        <router-link to="/admin/hero/new" class="btn btn-primary"><i class="fa fa-plus"></i> Add New</router-link>
      </div>
    </header>

    <router-view :add-hero="addHero" :update-hero="updateHero" :heroes="ubHero" :key="$route.name + ($route.params.key || '')"/>

    <div class="row">
      <div class="col">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Text</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(hero, index) in sortedHeroes" :key="index" :class="{'table-info': isCurrent(hero['.key'])}">
              <td>{{ hero.order }}</td>
              <td>
                <router-link :to="'/admin/hero/edit/' + hero['.key']">{{heroText(hero.text)}}</router-link>
              </td>
              <td class="text-right">
                <router-link class="btn btn-light" :to="'/admin/hero/edit/' + hero['.key']"><i class="fa fa-pencil"></i> Edit</router-link>
                <a href="#" class="btn btn-danger" @click.prevent="deleteHero(hero)"><i class="fa fa-trash"></i> Delete</a>
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
import { ubHeroRef } from '../../../config';

export default {
  name: 'hero',
  firebase: {
    ubHero: ubHeroRef
  },
  computed: {
    sortedHeroes () {
      var heroes = this.ubHero
      heroes = _.sortBy(heroes, 'order')
      return heroes
    }
  },
  methods: {
    heroText (str) {
      var max = 40
      var div = document.createElement('div')
      div.innerHTML = str
      var text = div.textContent || div.innerText || ''
      if (text.length > max) {
        return text.substring(0, max) + '...'
      }
      return text
    },
    isCurrent (key) {
      let path = '/admin/hero/edit/' + key
      if (path === this.$route.path) {
        return true
      }
      return false
    },
    addHero (hero) {
      this.$firebaseRefs.ubHero.push(hero).then(() => {
        console.log('OK')
        this.$router.push('/admin/hero');
        // this.showNotification('success', 'Post added successfully');
      })
    },
    deleteHero(hero) {
      // delete post form firebase
      if (confirm("Do you really want to delete this hero ?")) {
        this.$firebaseRefs.ubHero.child(hero['.key']).remove().then(() => {
          console.log('Deleted')
          // this.showNotification('success', 'Post deleted successfully');
        })
      }
    },
    updateHero(hero) {
      console.log(JSON.stringify(hero), hero)
      // create a copy of the item
      let tempHero = { ...hero };
      // remove the .key attribute
      delete tempHero['.key'];
      this.$firebaseRefs.ubHero.child(hero['.key']).set(tempHero).then(() => {
        this.$router.push('/admin/hero');
        console.log('Updated')
        // this.showNotification('success', 'Post updated successfully');
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
