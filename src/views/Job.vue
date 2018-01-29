<template>
  <div class="app">
    <ub-navbar ref="nav" class="job" :nav="navigation" @navigate="val => { navigateTo(val) }" :hasSpinner="true" :class="{'scrolledPast': scrolledPastNav}" v-show="!loading"/>
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
      <ub-quote :body="section.quote.body" :source="section.quote.source" :compact="section.quote.compact" />
    </section>
    <ub-spinner id="lonesnurra"/>
    <footer class="footer" role="contentinfo">
      <div class="footer__contact">
        <p>Ett utvecklingsbolag för senior spetskompetens inom webbprogrammering.</p>
        <div>
          <h3 class="nomargin">Kontakta oss</h3>
          <a href="mailto:info@utvecklarbolaget.se">info@utvecklarbolaget.se</a> <br/>
          <a href="tel:087032588">08-703 25 88</a>
        </div>
      </div>
      <h3 class="nomargin text-center">Dela oss</h3>
      <share/>
      <p class="text-center"><em>Tillsammans bygger vi framtiden - i kod, i människa, i bolag</em></p>
    </footer>
  </div>
</template>

<script>
import _ from 'lodash'
import { jobSectionsRef } from '../config'
import Navbar from '@/components/UB/Navbar'
import Quote from '@/components/UB/Quote'
import Spinner from '@/components/UB/Spinner'
import Share from '@/components/UB/Share'
import StringHandler from '@/mixins/stringHandler'

export default {
  mixins: [StringHandler],
  name: 'home',
  components: {
    'ub-navbar': Navbar,
    'ub-quote': Quote,
    'ub-spinner': Spinner,
    Share
  },
  data () {
    return {
      loading: false,
      scrolledPastNav: false,
      openContact: false,
      navLoaded: false,
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
        this.checkCalculatorLinks()
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
      var items = this.sortedSections
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
    },
    checkCalculatorLinks () {
      var calculatorLinks = []
      var self = this
      setTimeout(function () {
        calculatorLinks = document.querySelectorAll('a[href="#custom-lonesnurra"]')
        for (let i = 0; i < calculatorLinks.length; i++) {
          calculatorLinks[i].addEventListener('click', event => {
            event.preventDefault()
            const link = document.querySelector('.custom-lonenurra')
            link.click()
          }, false)
        }
      }, 600)
    }
  }
}

</script>

<style lang="scss">
@import '../styles/ub';
#hem {
  padding-top: 80px;
}
.footer__contact {
  text-align: center;
  margin: 2rem 0;
  a {
    color: #fff;
    &:hover, &:focus {
      text-decoration: underline;
    }
  }
}
.footer {
  padding: 1rem 0;
  .section-loader {
    height: 100vh;
  }
}
.section-loader-enter-active, .section-loader-leave-active {
  transition: height .4s ease-out;
}
.section-loader-enter, .section-loader-leave-to {
  height: 0;
}
</style>
