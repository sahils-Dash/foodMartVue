<template>
  <div class="category-wrapper">
    <div class="header">
      <h2 :style="{ fontSize: titleSize }">{{ title }}</h2>
      <div class="right-section">
        <a :href="viewAllLink">{{ viewAllText }} &#10140;</a>
        <div class="nav-buttons">
          <button @click="scrollLeft">‹</button>
          <button @click="scrollRight">›</button>
        </div>
      </div>
    </div>
    <div class="slider-container" ref="slider">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  titleSize: {
    type: String,
    default: 'xx-large'
  },
  viewAllText: {
    type: String,
    default: 'View All'
  },
  viewAllLink: {
    type: String,
    default: '#'
  },
  scrollAmount: {
    type: Number,
    default: 300
  }
})

const slider = ref(null)

const scrollLeft = () => {
  slider.value.scrollBy({ left: -props.scrollAmount, behavior: "smooth" })
}

const scrollRight = () => {
  slider.value.scrollBy({ left: props.scrollAmount, behavior: "smooth" })
}
</script>

<style scoped>
.category-wrapper {
  position: relative;
  margin: 20px 9%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.6% 1rem 1.6%;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.right-section a {
  color: #666;
  font-size: 15px;
  text-decoration: none;
}

.right-section a:hover {
  color: #000;
  font-size: 14px;
  font-weight: bold;
  transition: step-start;
}

/* .slider-container {
  height: 200px;
  display: flex;
  gap: 3rem;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 10px 30px 20px 30px;
  align-items: center;
} */

.slider-container {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  align-items: flex-start;
  padding: 20px 20px;
}

.slider-container>* {
  flex-shrink: 0;
  /* prevent cards from shrinking */
  width: 220px;
  /* set a fixed width for all cards */
}

.slider-container::-webkit-scrollbar {
  display: none;
}

.nav-buttons {
  display: flex;
  gap: 0.5rem;
}

.nav-buttons button {
  border: none;
  background: #f5f5f5;
  border-radius: 10%;
  width: 32px;
  height: 32px;
  font-size: 30px;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
}

.nav-buttons button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
