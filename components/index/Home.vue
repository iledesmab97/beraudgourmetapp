<template>
  <div class="home">
    <promotion-banner :product-promotion="productPromotion" />
    <scroll-menu :categories="categories" />
    <top-products :products="products" />

    <!-- <user :payload="user" />
    <user-2 :payload="user" /> -->
  </div>
</template>
<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator'
import PromotionBanner from '~/components/index/PromotionBanner.vue'
import ScrollMenu from '~/components/index/ScrollMenu.vue'
import TopProducts from '~/components/index/TopProducts.vue'
// import User from '~/components/User.vue'
// import User2 from '~/components/User2.vue'

import {
  IProduct,
  IProductPromotion,
  IProductState,
} from '~/store/products/types'

@Component({
  components: {
    PromotionBanner,
    ScrollMenu,
    TopProducts,
    // User,
    // User2,
  },
})
export default class Home extends Vue {
  @State((products) => products, { namespace: 'products' })
  productsState!: IProductState

  get productPromotion(): IProductPromotion {
    return this.productsState.promotion
  }

  get products(): IProduct[] {
    return this.productsState.products
  }

  get categories(): string[] {
    return this.products.map((a) => a.category)
  }
  mounted() {
    console.log(this.products)
  }
}
</script>
<style >
.home {
  top: 300px;
  margin: 20px;
}
</style>