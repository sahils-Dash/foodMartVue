<template>
  <div class="mainboss">
    <h2 style="font-size: xx-large;">Trending Products</h2>

    <div class="filters">
      <button v-for="cat in categories" :key="cat" @click="selected = cat" :class="{ active: selected === cat }">
        {{ cat }}
      </button>
    </div>

    <div class="cards-box">
      <productCard v-for="prod in filteredProducts" :key="prod.id" :product="prod" @toggle-fav="toggleFav(prod)"
        @increment="inc(prod)" @decrement="dec(prod)" @add-to-cart="addToCart(prod)" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import banabas from "../../assets/ProductPics/thumb-bananas.png";
import cucumber from "../../assets/ProductPics/thumb-cucumber.png";
import milk from "../../assets/ProductPics/thumb-milk.png";
import tomatoes from "../../assets/ProductPics/thumb-tomatoes.png";
import productCard from "../ReuseableComponents/ProductCard.vue";
import { useCartStore } from '../../stores/cart'

const categories = ["All", "Fruits and Veggies", "Juices"];
const selected = ref("All");

const Products = ref([
  { id: 1, name: "Cucumbers", img: cucumber, rating: 4.2, price: "$10", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 2, name: "Bananas", img: banabas, rating: 4.6, price: "$12", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 3, name: "Milk", img: milk, rating: 4.1, price: "$8", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 4, name: "Tomatoes", img: tomatoes, rating: 4, price: "$7", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 5, name: "Bananas2", img: banabas, rating: 4.6, price: "$12", quant: 0, categories: "Juices", fav: false },
  { id: 6, name: "Milk2", img: milk, rating: 4.1, price: "$8", quant: 0, categories: "Fruits and Veggies", fav: false },
  { id: 7, name: "Tomatoes2", img: tomatoes, rating: 4, price: "$7", quant: 0, categories: "Juices", fav: false },
  { id: 8, name: "Cucumbers2", img: cucumber, rating: 4.2, price: "$10", quant: 0, categories: "Juices", fav: false }
]);

const inc = (product) => {
  product.quant++;
};

const dec = (product) => {
  if (product.quant > 0) product.quant--;
};

const filteredProducts = computed(() => {
  if (selected.value === "All") return Products.value;
  return Products.value.filter((p) => p.categories === selected.value);
});

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
  padding: 40px;
  margin: 0 8%;
}

.filters {
  display: flex;
  justify-content: end;
  gap: 20px;
  margin-bottom: 20px;
}

.filters button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}

.filters button.active {
  border-color: orange;
  font-weight: bold;
}

.cards-box {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
</style>
