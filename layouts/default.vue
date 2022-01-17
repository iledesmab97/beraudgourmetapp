<template>
  <div>
    <nav-bar-top :show-navbar="showNavbar" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import NavBarTop from '~/components/NavBarTop.vue'
import NavBar from '~/components/NavBar.vue'

@Component({
  components: {
    NavBar,
    NavBarTop,
  },
})
export default class Main extends Vue {
  clipped = true
  drawer = true
  fixed = true

  items = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/',
    },
  ]

  miniVariant = true
  right = true
  rightDrawer = false
  title = 'Bgourmet'

  showNavbar = true
  lastScrollPosition = 0

  onScroll() {
    // Get the current scroll position
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
    if (currentScrollPosition < 0) {
      return
    } // Here we determine whether we need to show or hide the navbar
    this.showNavbar = currentScrollPosition < this.lastScrollPosition // Set the current scroll position as the last scroll position
    this.lastScrollPosition = currentScrollPosition
  }

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
* {
  font-family: 'Josefin Sans', sans-serif;
}
.body {
  position: absolute;
  top: 50px;
  bottom: 30px;
  right: 0;
  left: 0;
  overflow-y: auto;
}
</style>
