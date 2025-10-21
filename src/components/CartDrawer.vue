<template>
  <transition name="fade">
    <div v-if="isOpen" class="cart-backdrop" @click="$emit('close')"></div>
  </transition>

  <transition name="slide">
    <div v-if="isOpen" class="cart-drawer">
      <button class="close-btn" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>
      <div class="cartHead">
        <h2 style="color: orange;">Your Cart</h2>
        <h2
          style="background-color:rgb(255, 190, 70) ; color: antiquewhite; border-radius: 50%; min-width: 45px; text-align: center; padding-top: 2px;">
          {{ totalQuantity }}
        </h2>
      </div>

      <div v-if="cart.items.length === 0">
        <p>Your cart is empty<i class="far fa-frown"></i></p>
      </div>

      <ul v-else>
        <li v-for="item in cart.items" :key="item.id">
          <div class="itembox">
            <div class="item-info">
              <strong>{{ item.name || item.title }}</strong>
              <span>Qty: {{ item.quant }} × ${{ parseFloat(item.price.replace('$', '')).toFixed(2) }}</span>
            </div>
            <div>
              <span style="color:#666;">${{ item.quant * parseFloat(item.price.replace('$', '')).toFixed(2) }}</span>
            </div>
          </div>
          <button class="remove-btn" @click="cart.removeFromCart(item.id)">Remove</button>
        </li>
      </ul>

      <div class="cart-total">
        <strong>Total(USD)</strong>
        <strong>${{ cart.totalPrice.toFixed(2) }}</strong>
      </div>
      <button class="checkout">Continue to checkout</button>
    </div>
  </transition>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { ref } from 'vue'
import { computed } from 'vue'

const cart = useCartStore()
const isOpen = ref(true)

const totalQuantity = computed(() => {
  return cart.items.reduce((sum, item) => sum + item.quant, 0)
})

</script>

<style scoped>
/* Backdrop */
.cart-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 49;
  cursor: pointer;
}

/* Fade transition for backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* The drawer itself */
.cart-drawer {
  position: fixed;
  right: 0;
  top: 0;
  width: 320px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  z-index: 50;
  overflow-y: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Slide transition for drawer - CORRECTED */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  /* Starts/ends off-screen to the right */
}

.close-btn {
  padding: 8px;
  margin: 6px auto 15px auto;
  cursor: pointer;
  background: transparent;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.close-btn:hover {
  background: #b8b8b8;
}

.cartHead {
  display: flex;
  justify-content: space-between;
}

.cart-drawer h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.cart-drawer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-drawer li {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.itembox {
  display: flex;
  justify-content: space-between;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
}

.item-info strong {
  font-size: 16px;
}

.item-info span {
  font-size: 14px;
  color: #666;
}

.remove-btn {
  padding: 5px 10px;
  cursor: pointer;
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 12px;
}

.remove-btn:hover {
  background: #ff6233;
}

.cart-total {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #c9c9c9;
  font-size: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
}

.checkout {
  text-align: center;
  background-color: rgb(255, 190, 70);
  height: 50px;
  width: 100%;
  border-radius: 10px;
  font-size: 18px;
  border: none;
  color: #fff2f2;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
}

.checkout:hover {
  background-color: #d9e748;
}
</style>
