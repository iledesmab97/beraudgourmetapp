<template>
  <div class="container">
    <h2>Top Products</h2>
    <div class="top-products">
      <div class="top-products-img">
        <img src="" alt="" />
      </div>
      <div class="top-products-title">Berry Juice</div>
      <div class="top-products-price">$4</div>
      <div class="top-products-action">
        <v-icon>mdi-plus-circle</v-icon>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TopProducts extends Vue {}
</script>
<style >
h2 {
  font-weight: 400;
}
</style>