<template>
  <home />
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Home from '~/components/index/Home.vue'

@Component({
  components: {
    Home,
  },
})
export default class Index extends Vue {}
</script>
<style lang='css'>
</style>

