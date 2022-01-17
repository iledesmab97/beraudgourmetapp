<template>
  <div class="navbar-container">
    <div class="navbar-content">
      <NuxtLink to="/"> <v-icon x-large>mdi-home</v-icon> </NuxtLink>
      <NuxtLink to="/cart"> <v-icon x-large>mdi-cart</v-icon> </NuxtLink>
      <NuxtLink to="/profile"> <v-icon x-large>mdi-account</v-icon> </NuxtLink>
      <NuxtLink to="/history"> <v-icon x-large>mdi-history</v-icon> </NuxtLink>
    </div>
  </div>
</template>

<style >
.navbar-container {
  width: 100%;
  position: fixed;
  bottom: 10px;
}
.navbar-content {
  display: flex;
  justify-content: space-between;
}

a.active-exact-link .v-icon {
  color: rgb(255, 131, 62);
}
</style>