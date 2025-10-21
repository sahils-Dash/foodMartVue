<template>
  <div class="promo-card" :style="{ backgroundColor: bgColor }">
    <!-- Left Content -->
    <div class="text-box">
      <h4 class="badge">{{ badge }}</h4>
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <button class="btn">{{ buttonText }}</button>
    </div>

    <div class="image-box">
      <img :src="image" alt="promo product" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  badge: String,
  title: String,
  description: String,
  image: String,
  bgColor: {
    type: String,
    default: '#f9f9f9'
  },
  buttonText: {
    type: String,
    default: 'SHOW NOW'
  }
})
</script>

<style scoped>
.promo-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 1rem 2rem;
  gap: 1rem;
  max-width: 650px;
  flex: none;
}


.text-box {
  flex: 1;
}

.badge {
  font-size: 1.2rem;
  font-weight: bold;
  color: #f5a623;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  border: none;
  background: #222;
  color: #fff;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background: #000;
}

.image-box {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.image-box img {
  min-height: 300px;
  object-fit: contain;
}

.image-box img {
  max-height: 180px;
  object-fit: contain;
}
</style>
