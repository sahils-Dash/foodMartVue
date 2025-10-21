<template>
  <div class="promo-wrapper">
    <PromoCard badge="Upto 25% Off" title="Luxa Dark Chocolate"
      description="Very tasty & creamy vanilla flavour creamy muffins." :image="chocolate" bgColor="#faece9"
      button-text="SHOW NOW" />

    <PromoCard badge="Upto 25% Off" title="Creamy Muffins"
      description="Very tasty & creamy vanilla flavour creamy muffins." :image="muffins" bgColor="#eaf6fc"
      button-text="SHOW NOW" />
  </div>
</template>

<script setup>
import PromoCard from '../ReuseableComponents/PromoCard.vue'

import chocolate from '../../assets/sweets.png'
import muffins from '../../assets/Muffins.png'
</script>

<style scoped>
.promo-wrapper {
  display: flex;
  gap: 1.8rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 7%;
  padding: 10px 0;
}
</style>
