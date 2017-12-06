<template>
  <nav>
    <!-- <span class="nav__name">{{currentUser.email}}</span> -->
    <ul class="list-group">
      <router-link
        class="list-group-item list-group-item-action"
        :to="item.path"
        v-if="item.path"
        v-for="(item, index) in menu"
        :key="index"
      >
        <i :class="['fa fa-fw', item.icon]"></i> {{ item.name }}
      </router-link>
      <a href="#" class="list-group-item list-group-item-action" @click.prevent="signOut"><i class="fa fa-sign-out fa-fw"></i>Logout</a>
    </ul>
  </nav>
</template>

<script>
import firebase from 'firebase';
import { usersRef } from '../../../config';

export default {
  name: 'navbar',
  data() {
    return {
      currentUser: firebase.auth().currentUser,
      menu: [
        {
          name: 'UB Sections',
          path: '/admin/ubSections',
          icon: 'fa-file-text'
        },
        {
          name: 'UB Spinner',
          path: '/admin/spinner',
          icon: 'fa-sliders'
        },
        {
          name: 'UB Hero',
          path: '/admin/hero',
          icon: 'fa-header'
        },
        // {
        //   name: 'posts',
        //   path: '/admin/posts',
        //   icon: 'fa-file-text'
        // },
        // {
        //   name: 'Pages',
        //   path: '/admin/pages',
        //   icon: 'fa-archive'
        // },
        // {
        //   name: 'Media',
        //   path: '/admin/media',
        //   icon: 'fa-picture-o'
        // },
        // {
        //   name: 'Settings',
        //   path: '/admin/settings',
        //   icon: 'fa-gear'
        // },
      ]
    }
  },
  firebase: {
    users: usersRef
  },
  methods: {
    signOut() {
      // sign the current user out
      firebase.auth().signOut()
        .then(() => {
          this.$router.push('/');
        })
        .catch(() => {
          console.log('sign out fails');
        })
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../../../styles/admin/variables';
.admin__nav {
  background-color: $gray-100;
  overflow: auto;
  border-right: 1px solid $gray-200;
  padding: 1rem .5rem;

  .list-group-item.router-link-active {
    z-index: 2;
    color: $white;
    background-color: $blue;
    border-color: $blue;
  }
}
// .nav {
//   &__name {
//     display: none;
//     text-align: center;
//     color: $secondary;
//     font-size: .8rem;
//   }
//   &__list {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     &__item {
//       display: block;
//       text-decoration: none;
//       color: lighten($nav-color, 30);
//       padding: 1rem .5rem;
//       &:hover, &:focus {
//         background-color: darken($nav-color, 5);
//         color: lighten($nav-color, 50);
//       }
//
//       &.router-link-active {
//         background-color: darken($primary, 10);
//         color: lighten($nav-color, 50);
//       }
//     }
//   }
// }
</style>
