<template>
  <div class="header">
    <h2>Hi <b>Manet!</b></h2>
    <div v-if="showNavbar" class="input">
      <input
        type="text"
        placeholder="Busca algo que se te antoje..."
        class="text"
      />
      <div class="icon-input">
        <v-icon>mdi-magnify</v-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class Main extends Vue {
  @Prop() showNavbar!: boolean
}
</script>

<style >
.header {
  margin: 20px;
  width: 100%;
}
.header input {
  width: calc(100% - 40px);
  background-color: rgba(250, 248, 248);
  border: 0;
  outline: none;
  padding: 10px;
  padding-left: 35px;
  border-radius: 10px;
}
.input {
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
}
.icon-input {
  position: absolute;
  margin-left: 8px;
}
</style>
