<template>
  <div class="gridContainer">
    <div class="slider">
      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{
        active: index === activeIndex,
        'slide-next': direction === 'next' && index === activeIndex,
        'slide-prev': direction === 'prev' && index === activeIndex
      }">
        <div class="text-box">
          <span class="badge">{{ slide.badge }}</span>
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
          <button class="btn">SHOP NOW</button>
        </div>

        <div class="image-box">
          <img :src="slide.image" alt="product" />
        </div>
      </div>

      <button @click="prevSlide" class="nav prev">‹</button>
      <button @click="nextSlide" class="nav next">›</button>
    </div>

    <!-- Right Cards -->
    <div class="card fruits">
      <div class="card-content">
        <h2>20% Off</h2>
        <p>Fruits & Vegetables</p>
        <a href="#">Shop Collection &#10140</a>
      </div>
      <img :src="veggies" alt="fruits" />
    </div>

    <div class="card baked">
      <div class="card-content">
        <h2>15% Off</h2>
        <p>Baked Products</p>
        <a href="#">Shop Collection &#10140</a>
      </div>
      <img :src="bread" alt="bread" />
    </div>
  </div>
  <Categories style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;" />
  <newArrived style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;" />
  <TrendingProducts style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;" />
  <BannerSpace />
  <BestSelling />
  <EnquireForm />
  <MostPopular />
  <JustArrived />
  <BlogPost />
  <AppStore />
</template>

<script setup>
import juice from "../assets/juice.png"
import veggies from "../assets/veggies.png"
import ketchup from "../assets/ketchup.png"
import bread from "../assets/bread.png"
import { ref } from "vue"

import Categories from "./Home/Categories.vue"
import newArrived from "./Home/newArrived.vue"
import TrendingProducts from "./Home/TrendingProducts.vue"
import EnquireForm from "./Home/EnquireForm.vue"
import AppStore from "./Home/AppStore.vue"
import BestSelling from "./Home/BestSelling.vue"
import MostPopular from "./Home/MostPopular.vue"
import JustArrived from "./Home/JustArrived.vue"
import BannerSpace from "./Home/BannerSpace.vue"
import BlogPost from "./Home/BlogPost.vue"
const slides = [
  {
    badge: "100% Natural",
    title: "Fresh Smoothie & Summer Juice",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet.",
    image: juice,
  },
  {
    badge: "20% Off",
    title: "Fruits & Vegetables",
    description: "Shop the best organic fruits & veggies today.",
    image: juice,
  },
  {
    badge: "15% Off",
    title: "Baked Products",
    description: "Delicious breads and more baked with love.",
    image: ketchup,
  },
]

const activeIndex = ref(0)
const direction = ref("next")

const nextSlide = () => {
  direction.value = "next"
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

const prevSlide = () => {
  direction.value = "prev"
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}
</script>

<style scoped>
.gridContainer {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  max-width: 1500px;
  height: 700px;
  margin: 0 8% 0 9%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.slider {
  grid-row: 1 / span 2;
  grid-column: 1 / 2;
  background: #f2f8ff;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slide {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f8ff;
  padding: 2rem;
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 0.6s ease;
}

.slide.active {
  opacity: 1;
}

.slide-next {
  animation: slideInFromRight 0.6s ease forwards;
}

.slide-prev {
  animation: slideInFromLeft 0.6s ease forwards;
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.text-box {
  flex: 1;
  padding-right: 2rem;
  text-size-adjust: inherit;
}

.text-box h2 {
  font-size: 3.3rem;
  font-weight: 700;
}

.text-box p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.text-box span {
  font-size: 2.5rem;
  font-weight: 100;
  font-family: 'Lucida Sans';
}

.badge {
  color: orange;
  font-weight: bold;
  display: block;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  color: #555;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: 1px solid #e93434;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
  height: 60px;
  width: 30%;
  font-size: large;
}

.btn:hover {
  color: #f2f8ff;
  background-color: #000;
}

/* Image section */
.image-box {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-box img {
  max-height: 500px;
  object-fit: contain;
}

/* Navigation buttons */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
  border-radius: 50%;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* ------------------------------------------------------------------- */
.card {
  position: relative;
  /* needed for absolute child */
  border-radius: 12px;
  padding: 2rem;
  overflow: hidden;
  /* keeps image inside rounded border */
  background: #f8f8f8;
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-content h2 {
  font-size: 2rem;
  font-weight: 100;
  font-family: 'Lucida Sans';
}

.card-content p {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  row-gap: 2;
}

.card-content a {
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: #555;
}

.card img {
  position: absolute;
  bottom: 0;
  right: 0;
  max-height: 250px;
  object-fit: contain;
  z-index: 1;
}

.fruits {
  background: #eef8e6;
}

.baked {
  background: #fdeaea;
}
</style>
