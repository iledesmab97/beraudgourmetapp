<template>
  <div class="scroll-menu">
    <div class="scroll-content">
      <div v-for="(category, index) in categorySvg" :key="index" class="avatar">
        <v-avatar>
          <img :src="category.svg" alt="food category delivery" />
        </v-avatar>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class ScrollMenu extends Vue {
  @Prop() categories!: string[]

  get categorySvg() {
    const item: any = []
    for (let i = 0, length = this.categories.length; i < length; i++) {
      const category = {
        svg: '',
      }
      category.svg = this.categories[i]
      item.push(category)
    }
    return item
  }
}
</script>
<style >
.scroll-menu {
  margin-top: 15px;
}
.scroll-menu .scroll-content {
  display: flex;
  overflow-y: auto;
}
.scroll-menu .scroll-content .avatar {
  padding: 20px;
  background-color: rgb(250, 248, 248);
  border-radius: 10px;
  margin: 5px;
}
.category-content {
  text-align: center;
}
.avatar .icon {
  color: rgb(255, 131, 62);
}
</style>