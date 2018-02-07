<template lang="html">
  <nav class="scroll-nav" ref="scroll-nav-wrap">
    <slot></slot>
  </nav>
</template>

<script>
import bezierEasing from 'bezier-easing'
export default {
  props: {
    bezierEasingValue: {
      type: String,
      default: '.5,0,.35,1'
    },
    offset: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      items: [],
      currentItem: null,
      lastActiveItem: null,
      scrollAnimationFrame: null,
      bezierEasing
    }
  },
  computed: {
    cubicBezierArray () {
      return this.bezierEasingValue.split(',')
    }
  },
  mounted () {
    this.initScrollItems()
    this.removeActiveClass()
    this.currentItem = this.getItemInsideWindow()
    if (this.currentItem) {
      this.currentItem.classList.add('active')
    }
    window.addEventListener('scroll', this.onScroll)
  },
  updated () {
    this.initScrollItems()
    const hash = window.location.hash
    if (hash) {
      const target = document.getElementById(hash.substr(1))
      this.scrollTo(target)
      history.pushState('', document.title, window.location.pathname + window.location.search)
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
    window.cancelAnimationFrame(this.scrollAnimationFrame)
  },
  methods: {
    initScrollItems () {
      this.items = this.$el.querySelectorAll('.scroll-item')
      Array.prototype.forEach.call(this.items, (item) => {
        item.addEventListener('click', this.handleClick)
      })
    },
    onScroll (event) {
      this.currentItem = this.getItemInsideWindow()
      if (this.currentItem !== this.lastActiveItem) {
        this.removeActiveClass()
        this.lastActiveItem = this.currentItem
      }
      if (this.currentItem) {
        this.currentItem.classList.add('active')
      }
    },
    getItemInsideWindow () {
      let currentItem
      Array.prototype.forEach.call(this.items, (item) => {
        const target = document.getElementById(item.hash.substr(1))
        if (window.pageYOffset >= this.getOffsetTop(target) - this.offset) {
          currentItem = item
        }
      })
      return currentItem
    },
    handleClick (event) {
      event.preventDefault()
      const { hash } = event.currentTarget
      const target = document.getElementById(hash.substr(1))
      if (!target) {
        console.warn(`[scroll-nav] Element '${hash}' was not found. Make sure it is set in the DOM.`)
        return
      }
      window.removeEventListener('scroll', this.onScroll)
      window.cancelAnimationFrame(this.scrollAnimationFrame)
      this.removeActiveClass()
      event.currentTarget.classList.add('active')
      this.scrollTo(target)
    },
    scrollTo (target) {
      return new Promise((resolve) => {
        const easing = this.bezierEasing(...this.cubicBezierArray)
        let duration = 600

        const targetDistanceFromTop = this.getOffsetTop(target)
        const startingY = window.pageYOffset
        const diff = targetDistanceFromTop - startingY

        let start = null

        const step = (timestamp) => {
          if (!start) start = timestamp
          let progress = timestamp - start
          let progressPercentage = progress / duration

          if (progress >= duration) progress = duration
          if (progressPercentage >= 1) progressPercentage = 1

          const perTick = startingY + (easing(progressPercentage) * (diff - this.offset))

          window.scrollTo(0, perTick)

          if (progress < duration) {
            this.scrollAnimationFrame = window.requestAnimationFrame(step)
          } else {
            window.addEventListener('scroll', this.onScroll)
            resolve()
          }
        }
        window.requestAnimationFrame(step)
      })
    },
    getOffsetTop (element) {
      let yPosition = 0
      let nextElement = element
      while (nextElement) {
        yPosition += (nextElement.offsetTop)
        nextElement = nextElement.offsetParent
      }
      return yPosition
    },
    removeActiveClass () {
      Array.prototype.forEach.call(this.items, (item) => {
        item.classList.remove('active')
      })
    }
  }
}
</script>
