<template lang="html">
  <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__text">
        <span class="" v-if="beforeLoad">Tillsammans bygger vi framtiden - i kod, i människa, i bolag.</span>
        <span class="type"></span>
      </h1>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { ubHeroRef } from '../../config'
// import Type from '@/components/UB/Type'
import Typed from 'typed.js'

export default {
  name: 'hero-component',
  data () {
    return {
      loading: false,
      beforeLoad: true
    }
  },
  created () {
    this.loading = true
    this.beforeLoad = false
  },
  firebase: {
    heroes: {
      source: ubHeroRef,
      asObject: false,
      readyCallback: function () {
        this.loading = false
        this.startType()
      },
      cancelCallback(erro) {
        this.loading = false
      }
    }
  },
  computed: {
    texts () {
      var heroes = this.heroes
      heroes = _.sortBy(heroes, 'order')
      var text = []
      for (let i = 0; i < heroes.length; i++) {
        text.push(this.heroes[i].text)
      }
      return text
    }
  },
  methods: {
    startType () {
      var typed = new Typed('.type', {
        strings: this.texts,
        typeSpeed: 35,
        backSpeed: 10,
        backDelay: 1300,
        startDelay: 0,
        smartBackspace: false
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/ub/variables';
.type {
  display: inline;
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: -1.1px;
  margin: 0;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  @media (min-width: $screen-sm) {
    font-size: 2.3rem;
  }
  @media (min-width: $screen-md) {
    font-size: 3rem;
  }
}
.typed-cursor {
  font-weight: bold;
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 100%   {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
