<template>
  <div class="card">
    <button class="favBtn" @click="$emit('toggleFav')" :class="{ active: product.fav }">
      <i class="fa-regular fa-heart"></i>
    </button>

    <div class="prodImage">
      <img :src="product.img" :alt="product.name" />
    </div>

    <h3>{{ product.name }}</h3>
    <p>⭐{{ product.rating }}</p>
    <p class="price" style="font-size: 30px; font-weight: 600;">{{ product.price }}</p>

    <span class="qnt">
      <p>
        Quantity: <br><br>
        <button @click="$emit('decrement')" class="qbtnl">-</button>
        {{ product.quant }}
        <button @click="$emit('increment')" class="qbtnm">+</button>
      </p>
      <button :disabled="product.quant === 0" @click="$emit('addToCart')" class="add-cart-btn">
        Add to cart
      </button>
    </span>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['toggleFav', 'increment', 'decrement', 'addToCart'])
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #eee;
  padding: 16px;
  text-align: center;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
}

.favBtn {
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  z-index: 1;
  transition: all 0.2s ease;
}

.favBtn:hover {
  transform: scale(1.05);
  background-color: rgb(255, 0, 0);
  color: white;
}

.favBtn.active {
  background-color: rgb(255, 0, 0);
  color: white;
}

.prodImage {
  width: 100%;
  height: 200px;
  border-radius: 16px;
  background-color: #faf7f7;
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.prodImage img {
  width: 150%;
  height: 150%;
  object-fit: contain;
}

.card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 6px;
  text-align: left;
}

.card p {
  margin: 4px 0;
  color: #555;
  font-size: 0.9rem;
  text-align: left;
  font-weight: 400;
}

.price {
  font-size: 25px;
  font-weight: 900;
  color: #000;
}

.qnt {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
}

.qbtnl {
  background: #ffffff;
  padding: 2px 9px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid rgb(184, 184, 184);
  font-size: large;
}

.qbtnm {
  background: #ffffff;
  padding: 2px 7px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid rgb(184, 184, 184);
  font-size: large;
}

.add-cart-btn {
  background: #f5faff;
  color: rgb(26, 26, 26);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 8px;
}

.add-cart-btn:disabled {
  background: #ffffff;
  color: #555;
  cursor: not-allowed;
}
</style>
