<template>
  <div class="banner">
    <div class="text">
      <h3>{{ productPromotion.title }}</h3>
      <p>{{ productPromotion.text }}</p>
    </div>
    <div class="img">
      <img :src="imagePromo" alt="comida entrega descuento" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IProductPromotion } from '../../store/products/types'

@Component
export default class PromotionBanner extends Vue {
  @Prop() productPromotion!: IProductPromotion

  get imagePromo(): string | undefined {
    return this.productPromotion.product.img
  }

  getSrc(name: string) {
    return '../../assets/' + name + '.png'
  }
}
</script>
<style >
.banner {
  background-color: rgba(74, 174, 84);
  color: white;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.banner .text {
  width: 50%;
}
.banner .text h3 {
  font-weight: 400;
}
.banner .text p {
  font-weight: 300;
}
.img {
  width: 25%;
  min-width: 100px;
}
.img img {
  width: 100%;
  max-width: 300px;
  min-width: 100px;
  object-fit: cover;
}
</style>