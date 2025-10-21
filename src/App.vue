<template>
  <Navbar />
  <!-- <CartDrawer /> -->
  <Home />
  <Footer />
  <!-- <router-view /> -->
</template>

<script setup>
import Navbar from './components/navbar.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
// import CartDrawer from './components/CartDrawer.vue';



</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}
</style>
