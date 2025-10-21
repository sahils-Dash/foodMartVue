<template>
  <CarouselSlider title="Newly Arrived Brands" view-all-text="View All Categories" view-all-link="/categories"
    :scroll-amount="400">
    <div class="card" v-for="(cat, index) in categories" :key="index">
      <img :src="cat.icon" alt="icon" class="icon" />
      <div class="des12">
        <h4>{{ cat.name }}</h4>
        <p>{{ cat.descp }}</p>
      </div>
    </div>
  </CarouselSlider>
</template>

<script setup>
import CarouselSlider from "../ReuseableComponents/CarouselSlider.vue"
import new1 from "../../assets/newA1.jpg"
import new2 from "../../assets/newA2.jpg"
import new3 from "../../assets/newA3.jpg"
import new4 from "../../assets/newA4.jpg"

const categories = [
  { name: "Amber Jar", descp: "Honey Best Nectar you wish to get", icon: new1 },
  { name: "Amber Jar", descp: "Honey Best Nectar you wish to get", icon: new4 },
  { name: "Amber Jar", descp: "Honey Best Nectar you wish to get", icon: new3 },
  { name: "Amber Jar", descp: "Honey Best Nectar you wish to get", icon: new4 },
  { name: "Amber Jar", descp: "Honey Best Nectar you wish to get", icon: new1 },
  { name: "Amber Jar", descp: "Honey Best Nectar you wish to get", icon: new2 },
  { name: "Amber Jar", descp: "Honey Best Nectar you wish to get", icon: new3 }
]
</script>

<style scoped>
.card {
  min-width: 400px;
  height: 120px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.icon {
  height: 100px;
  margin: 8px 10px;
  margin-right: 12px;
  border-radius: 7px;
}

.des12 p {
  font-size: 20px;
  white-space: normal;
  width: 90%;
  margin-top: 2px;
  color: #666;
}

.des12 h4 {
  white-space: normal;
  width: 90%;
  margin-bottom: 2px;
}
</style>
