<template lang="html">
  <blockquote class="quote" v-if="body">
    <p v-if="!longQuote">{{ body }}</p>
    <p class="quote-sliced" v-if="longQuote" @click="expand = !expand" :class="{'expanded': expand}">
      <span class="first">{{ body1 }}</span>
      <span class="second">{{ body2 }}</span>
    </p>
    <footer class="quote-source">{{ source }}</footer>
  </blockquote>
</template>

<script>
export default {
  name: 'quote',
  props: {
    body: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      expand: false,
      threshold: 300
    }
  },
  computed: {
    longQuote () {
      if (this.body.length > this.threshold) {
        return true
      }
      return false
    },
    body1 () {
      return this.body.slice(0, this.threshold)
    },
    body2 () {
      return this.body.slice(this.threshold + 1)
    }
  },
}
</script>

<style lang="scss" scoped>
.quote-sliced {
  .first {
    &::after {
      content: ' ...';
    }
  }
  .second {
    display: none;
  }
  &.expanded {
    .first {
      &::after {
        content: '';
      }
    }
    .second {
      display: inline;
    }
  }
}
</style>
