<template>
  <nav class="navbar">
    <img :src="logo" alt="FoodMart Logo" class="logo" />

    <!-- Center: Search bar -->
    <div class="search-area">
      <select class="categories">
        <option>All Categories</option>
        <option>Groceries</option>
        <option>Drinks</option>
        <option>Chocolate</option>
      </select>
      <input class="searchbox" type="search" placeholder="Search for more than 20,000 products" />
      <button class="src">
        <img :src="search" alt="search button" class="src2" />
      </button>
    </div>

    <!-- Right: Support + icons -->
    <div class="right-area">
      <div class="support">
        <h3>For Support?</h3>
        <h2>+980-34984089</h2>
      </div>
      <button class="icon-btn">
        <img :src="user" alt="user Logo" class="user" />
      </button>
      <button class="icon-btn">
        <img :src="heart" alt="heart Logo" class="heart" />
      </button>
    </div>
    <button class="crtbtn" @click="cart.toggleCart">
      Your Cart &#9662;<br>
      <b>${{ cart.totalPrice.toFixed(2) }}</b>
    </button>
    <Transition name="cart">
      <CartDrawer v-if="cart.showCart" @close="cart.toggleCart" />
    </Transition>

  </nav>

  <nav class="subnavbar">
    <div class="departments">
      <select>
        <option>Shop by Departments</option>
        <option>Groceries</option>
        <option>Drinks</option>
        <option>Chocolate</option>
      </select>
    </div>
    <ul class="menu-links">
      <li><a href="#">Women</a></li>
      <li><a href="#">Men</a></li>
      <li><a href="#">Kids</a></li>
      <li><a href="#">Accessories</a></li>

      <li class="dropdown">
        <a href="#">Pages ▼</a>
        <ul class="submenu">
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </li>

      <li><a href="#">Brand</a></li>
      <li><a href="#">Sale</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </nav>
</template>

<script setup>
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import user from "../assets/user.png"
import heart from "../assets/heart.png"
import CartDrawer from "./CartDrawer.vue"
import { ref } from "vue"

import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const showCart = ref(false)

function toggleCart() {
  cart.toggleCart();
}
</script>

<style scoped>
.navbar {
  margin: 20px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
}

.logo {
  height: 55px;
  width: 16%;
}

.search-area {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  max-width: 600px;
  background: #f8f8f8;
  border: 2px solid transparent;
  transition: border-color 0.2s ease;
  border-radius: 12px;
}

.search-area:focus-within {
  border-color: #4780db;
  /* blue, same as your screenshot */
  border-style: ridge;
  background: #fff;
  /* optional: brighten background */
}


.categories {
  border: none;
  background: transparent;
  padding: 0 10px;
  font-size: 14px;
  color: #555;
  outline: none;
  cursor: pointer;
  min-height: 50px;
}

.searchbox {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0 10px;
  font-size: 14px;
  outline: none;
  color: #464545;
}

.src {
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 50px;
}


.src2 {
  height: 30px;
  width: 100%;
  color: #777777;
}

.right-area {
  display: flex;
  align-items: center;
  gap: 20px;
  display: flex;

}

.support {
  text-align: right;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.support h3 {
  margin: 0;
  font-size: 14px;
  color: #555;
}

.support h2 {
  margin: 0;
  font-size: 19px;
  font-weight: bold;
}

.icon-btn {
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.user,
.heart {
  height: 20px;
}

.crtbtn {
  text-align: justify;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: larger;
  color: #555;
}

/* ----------------------------------------------------------- */
.subnavbar {
  margin: 0 9% 20px 9%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 10px 5px;
  border-top: 1px solid #eee;
  font-size: larger;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.departments select {
  padding: 10px 15px;
  border: none;
  background: #f0f0f2;
  font-size: 14px;
  cursor: pointer;
}

.menu-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu-links li {
  position: relative;
}

.menu-links li a {
  text-decoration: none;
  color: #555;
  font-size: 17px;
  transition: 0.2s;
}

.menu-links li a:hover {
  color: #000;
  font-weight: bold;
}

.dropdown .submenu {
  opacity: 0;
  visibility: hidden;
  transform: translateX(100px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #eee;
  list-style: none;
  padding: 10px;
  min-width: 120px;
  z-index: 10;
}

.dropdown:hover .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.submenu li {
  margin: 5px 0;
}

.submenu li a {
  color: #333;
  font-size: 14px;
}

.submenu li a:hover {
  color: #000;
  font-weight: bold;
}
</style>
