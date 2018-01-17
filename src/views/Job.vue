<template>
  <div id="app">
    <ub-navbar ref="nav" class="job" :nav="navigation" @navigate="val => { navigateTo(val) }" :class="{'scrolledPast': scrolledPastNav}"/>
    <transition name="section-loader">
      <div class="section-loader" v-if="loading"></div>
    </transition>
    <div id="hem"></div>
    <section class="section" v-for="section in sortedSections" :id="friendlyURL(section.title)">
      <h2 class="section-title" v-if="section.showTitle" :ref="section['.key']" >{{ section.title }}</h2>
      <div class="section-img" v-if="section.img">
        <img :src="section.img" :alt="section.title">
      </div>
      <div v-html="section.body"></div>
      <ub-quote :body="section.quote.body" :source="section.quote.source" />
    </section>
    <ub-spinner id="lonesnurra"/>
    <footer class="footer" role="contentinfo">
      <div class="hello" itemscope itemtype="http://data-vocabulary.org/Person">
        <img class="face" src="https://utvecklarbolaget.firebaseapp.com/images/emanuel_fratini.jpg" alt="Emanuel Fratini">
        <div class="data">
          <h2 itemprop="name">Emanuel Fratini</h2>
          <span class="small" itemprop="jobtitle">VD och Kapten</span>
          <p itemprop="description">
            Jag har arbetat med affärsutveckling inom IT i <br/>10 år och varit kapten sedan barnsben.
          </p>
          <a href="mailto:ef@utvecklarbolaget.se" itemprop="email">ef@utvecklarbolaget.se</a><br/>
          <a href="tel:087032588" itemprop="telephone">08-703 25 88</a>

          <div itemscope itemtype="http://schema.org/Organization">
            <span class="hidden" itemprop="name">Utvecklarbolaget</span>
            <address itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
              <a href="https://www.google.com/maps/place/Torsgatan+8A,+111+23+Stockholm/@59.3356769,18.0495805,17z" target="_blank">
                <span itemprop="streetAddress">Torsgatan 8A</span>
                <span itemprop="postalCode">111 23</span>,
                <span itemprop="addressRegion">Stockholm</span>
              </a>
              <span itemprop="geo" itemscope itemtype="http://schema.org/GeoCoordinates">
                <br/>Lat Long<br/>
                <span itemprop="latitude">59.335677</span>,
                <span itemprop="longitude">18.051774</span>
              </span>
            </address>
          </div>
        </div>
      </div>
      <div class="social-buttons">
        <a href="https://www.facebook.com/utvecklarbolaget/" class="icon-social icon-facebook" target="_blank">
          <svg enable-background="new 0 0 144.083 144" height="144px" id="Facebook" version="1.1" viewBox="0 0 144.083 144" width="144.083px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M72.041,11.166c-33.543,0-60.833,27.29-60.833,60.834c0,33.545,27.29,60.834,60.833,60.834  c33.544,0,60.835-27.289,60.835-60.834C132.875,38.456,105.584,11.166,72.041,11.166z M72.041,126.834  c-30.235,0-54.833-24.598-54.833-54.834c0-30.235,24.598-54.834,54.833-54.834c30.235,0,54.835,24.599,54.835,54.834  C126.875,102.236,102.276,126.834,72.041,126.834z"/>
            <path d="M90.792,36.304H77.596c-0.031,0-0.061,0.001-0.09,0.004c-13.323,0.042-15.063,9.345-15.07,17.476  c-0.018,0.076-0.028,0.154-0.028,0.235v5.708h-9.118c-0.552,0-1,0.448-1,1v14.077c0,0.553,0.448,1,1,1h9.118v30.891  c0,0.553,0.448,1,1,1h13.307c0.553,0,1-0.447,1-1V75.805h13.076c0.553,0,1-0.447,1-1V60.728c0-0.552-0.447-1-1-1H76.715v-7.567  h14.076c0.553,0,1-0.448,1-1V37.304C91.792,36.752,91.344,36.304,90.792,36.304z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/utvecklarbolaget" class="icon-social icon-linkedin" target="_blank">
          <svg enable-background="new 0 0 144.083 144" height="144px" id="linkedin" version="1.1" viewBox="0 0 144.083 144" width="144.083px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M72.041,11.166c-33.543,0-60.833,27.29-60.833,60.834c0,33.545,27.29,60.834,60.833,60.834  c33.544,0,60.835-27.289,60.835-60.834C132.875,38.456,105.584,11.166,72.041,11.166z M72.041,126.834  c-30.235,0-54.833-24.598-54.833-54.834c0-30.235,24.598-54.834,54.833-54.834c30.235,0,54.835,24.599,54.835,54.834  C126.875,102.236,102.276,126.834,72.041,126.834z"/>
            <rect height="36.734" width="14.078" x="41.143" y="59.11"/>
            <ellipse cx="48.042" cy="46.75" rx="7.125" ry="6.5"/>
            <path d="M90.608,58.28c-2.883,0-5.326,0.525-7.334,1.574c-2.006,1.05-3.988,2.796-5.949,5.24V59.11H64.215v36.734h14.078V78.203  c0-3.344,0.531-5.66,1.592-6.952c1.061-1.291,2.443-1.937,4.15-1.937c1.545,0,2.744,0.479,3.598,1.436  c0.854,0.957,1.279,2.588,1.279,4.895v20.199h14.148V72.497c0-4.843-1.102-8.423-3.305-10.741  C97.555,59.438,94.504,58.28,90.608,58.28z"/>
          </svg>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import _ from 'lodash'
import { jobSectionsRef } from '../config'
import Navbar from '@/components/UB/Navbar'
import Quote from '@/components/UB/Quote'
import Spinner from '@/components/UB/Spinner'
import StringHandler from '@/mixins/stringHandler'

export default {
  mixins: [StringHandler],
  name: 'home',
  components: {
    'ub-navbar': Navbar,
    'ub-quote': Quote,
    'ub-spinner': Spinner
  },
  data () {
    return {
      loading: false,
      scrolledPastNav: false,
      openContact: false,
      range: {
        frontend: 4,
        consult: 0,
        frameworks: 0
      }
    }
  },
  created () {
    this.loading = true
    window.addEventListener('scroll', this.scroll);
  },
  mounted () {
    window.scrollTo(0,0)
  },
  firebase: {
    sections: {
      source: jobSectionsRef,
      asObject: false,
      readyCallback: function () {
        this.loading = false
        this.checkContactLinks()
      },
      cancelCallback(erro) {
        this.loading = false
      }
    }
  },
  computed: {
    sortedSections () {
      var sections = this.sections
      sections = _.sortBy(sections, 'order')
      return sections
    },
    navigation () {
      var items = this.sections
      var navs = []
      for (let i = 0; i < items.length; i++) {
        if (items[i].showTitle) {
          navs.push({ title: items[i].title, key: items[i]['.key'] })
        }
      }
      return navs
    }
  },
  methods: {
    navigateTo (ref) {
      let el = this.$refs[ref][0]
      let top = el.offsetTop
      window.scrollTo(0, top)
    },
    handleContact () {
      this.$refs.nav.open = !this.$refs.nav.open
      this.$refs.nav.contactOpen = !this.$refs.nav.contactOpen
    },
    scroll: _.debounce(function () {
      // var hero = document.querySelector('.section')
      // console.log(hero)
      if (window.scrollY > 0) {
        this.scrolledPastNav = true
      } else {
        this.scrolledPastNav = false
      }
    }, 20),
    checkContactLinks () {
      var contactLinks = []
      var self = this
      setTimeout(function () {
        contactLinks = document.querySelectorAll('a[href="#kontakt"]')
        for (let i = 0; i < contactLinks.length; i++) {
          contactLinks[i].addEventListener('click', event => {
            event.preventDefault()
            self.handleContact()
          }, false)
        }
      }, 1000)
    }
  }
}

</script>

<style lang="scss">
@import '../styles/ub';
#hem {
  padding-top: 80px;
}
.section-loader {
  height: 100vh;
}
.section-loader-enter-active, .section-loader-leave-active {
  transition: height .4s ease-out;
}
.section-loader-enter, .section-loader-leave-to {
  height: 0;
}
</style>
