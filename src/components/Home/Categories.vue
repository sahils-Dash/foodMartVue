<template>
  <CarouselSlider title="Category" view-all-text="View All Categories" view-all-link="/categories" :scroll-amount="300">
    <div class="card" v-for="(cat, index) in categories" :key="index">
      <img :src="cat.icon" alt="icon" class="icon" />
      <p><b>{{ cat.name }}</b></p>
    </div>
  </CarouselSlider>
</template>

<script setup>
import CarouselSlider from "../ReuseableComponents/CarouselSlider.vue"
import fruits from "../../assets/icon-bread-herb-flour.png"
import breads from "../../assets/icon-vegetables-broccoli.png"

const categories = [
  { name: "Fruits & Veges", icon: fruits },
  { name: "Breads & Sweets", icon: breads },
  { name: "Drinks", icon: fruits },
  { name: "Meat", icon: breads },
  { name: "Supplements", icon: fruits },
  { name: "Fruits & Veges", icon: fruits },
  { name: "Breads & Sweets", icon: breads },
  { name: "Drinks", icon: fruits },
  { name: "Meat", icon: breads },
  { name: "Supplements", icon: fruits },
  { name: "Fruits & Veges", icon: fruits },
  { name: "Breads & Sweets", icon: breads },
  { name: "Drinks", icon: fruits },
  { name: "Meat", icon: breads },
  { name: "Supplements", icon: fruits },
  { name: "Fruits & Veges", icon: fruits },
  { name: "Breads & Sweets", icon: breads },
  { name: "Drinks", icon: fruits },
  { name: "Meat", icon: breads },
  { name: "Supplements", icon: fruits }
]
</script>

<style scoped>
.card {
  min-width: 230px;
  height: 200px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.icon {
  height: 40px;
  margin-bottom: 10px;
}
</style>
