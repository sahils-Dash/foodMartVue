<template>
  <div class="mainboss">
    <CarouselSlider title="Best selling products" view-all-text="View All Categories" view-all-link="/Products"
      :scroll-amount="400">
      <ProductCard v-for="prod in Products" :key="prod.id" :product="prod" @toggle-fav="toggleFav(prod)"
        @increment="inc(prod)" @decrement="dec(prod)" @add-to-cart="addToCart(prod)" />

    </CarouselSlider>
  </div>
</template>

<script setup>
import CarouselSlider from '../ReuseableComponents/CarouselSlider.vue';
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import ProductCard from '../ReuseableComponents/ProductCard.vue';
import banabas from "../../assets/ProductPics/thumb-bananas.png";
import cucumber from "../../assets/ProductPics/thumb-cucumber.png";
import milk from "../../assets/ProductPics/thumb-milk.png";
import tomatoes from "../../assets/ProductPics/thumb-tomatoes.png";
import ketchup from "../../assets/tomatoSauce.png";

const Products = ref([
  { id: 1, name: "Cucumbers", img: cucumber, rating: 4.2, price: "$10", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 2, name: "Bananas", img: banabas, rating: 4.6, price: "$12", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 3, name: "Milk", img: milk, rating: 4.1, price: "$8", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 4, name: "Tomatoes", img: tomatoes, rating: 4, price: "$7", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 5, name: "Ketchup", img: ketchup, rating: 4.6, price: "$12", quant: 0, categories: "Juices", fav: false },
  { id: 6, name: "Milk2", img: milk, rating: 4.1, price: "$8", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 7, name: "Tomatoes2", img: tomatoes, rating: 4, price: "$7", quant: 0, categories: "Juices", fav: false },
  { id: 8, name: "Cucumbers2", img: cucumber, rating: 4.2, price: "$10", quant: 0, categories: "Juices", fav: false },
  { id: 9, name: "Ketchup2", img: ketchup, rating: 4.6, price: "$12", quant: 0, categories: "Juices", fav: false },
  { id: 10, name: "Bananas", img: banabas, rating: 4.6, price: "$12", quant: 0, categories: "Fruits and Veggies", fav: false }
]);
const inc = (product) => {
  product.quant++;
};

const dec = (product) => {
  if (product.quant > 0) product.quant--;
};
const toggleFav = (product) => {
  product.fav = !product.fav;
};

const cart = useCartStore()

const addToCart = (product) => {
  if (product.quant > 0) {
    cart.addToCart(product)
  }
}
</script>

<style scoped>
.mainboss {
  min-height: fit-content;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cards-box {
  display: flex;
  flex-direction: row;
}
</style>
