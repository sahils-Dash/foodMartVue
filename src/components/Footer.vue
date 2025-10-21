<template>
  <footer class="footer">
    <div class="features">
      <div class="feature" v-for="feat in feats" :key="feat">
        <div style="display: flex; flex-wrap: wrap;">
          <i :class=feat.icon></i>
          <h4>{{ feat.heading }}</h4>
        </div>
        <p>{{ feat.data }}</p>
      </div>
    </div>

    <div class="footer-main">
      <div class="footer-col">
        <div class="logo">
          <img :src="logo" alt="FoodMart Logo" />
        </div>
        <div class="socials">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-telegram-plane"></i></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Ultras</h4>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Conditions</a></li>
          <li><a href="#">Our Journals</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Affiliate Programme</a></li>
          <li><a href="#">Ultras Press</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Customer Service</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Returns & Refunds</a></li>
          <li><a href="#">Cookie Guidelines</a></li>
          <li><a href="#">Delivery Information</a></li>
        </ul>
      </div>

      <!-- Subscribe -->
      <div class="footer-col">
        <h4>Subscribe Us</h4>
        <p style="color: darkslategrey;">Subscribe to our newsletter to get updates about our grand offers.</p>
        <div class="subscribe">
          <input type="email" placeholder="Email Address" />
          <button @click="subscribe">Subscribe</button>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="footer-bottom">
      <p>© 2025 Foodmart. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import logo from "../assets/logo.png"

const subscribe = () => {
  alert("Thank you for subscribing!");
};
const feats = [{ id: 1, icon: "fas fa-shopping-cart icon", data: "Lorem ipsum dolor sit amet, consectetur adipi elit.", heading: "Free delivery " },
{ id: 2, icon: "fas fa-lock icon", data: "Lorem ipsum dolor sit amet, consectetur adipi elit.", heading: "100% secure payment " },
{ id: 3, icon: "fas fa-store icon", data: "Lorem ipsum dolor sit amet, consectetur adipi elit.", heading: "Quality guarantee " },
{ id: 4, icon: "fas fa-map-marker-alt icon", data: "Lorem ipsum dolor sit amet, consectetur adipi elit.", heading: "Guaranteed savings " },
{ id: 5, icon: "fas fa-gift icon", data: "Lorem ipsum dolor sit amet, consectetur adipi elit.", heading: "Daily offers " }
];
</script>

<style scoped>
.footer {
  background: #fff;
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0 8%;
}

/* Top features row */
.features {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: nowrap;
}

.feature {
  flex: 1 1 18%;
  text-align: center;
  padding: 1rem;
}

.feature h4 {
  margin: 0.5rem 0;
  font-weight: bold;
  font-size: 21px;
}

.feature p {
  font-size: 1rem;
  color: #555;
  text-align: left;
  padding-left: 16%;
  margin-top: 5px;
  line-height: 1.8rem;

}

.icon {
  font-size: 1.7rem;
  display: block;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.footer-col {
  flex: 1 1 20%;
}

.logo img {
  height: 40px;
}

.socials {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.socials a {
  display: inline-block;
  width: 32px;
  height: 32px;
  background: #f2f2f2;
  border-radius: 6px;
  text-align: center;
  line-height: 32px;
  font-size: 1rem;
  color: #333;
}

.socials a:hover {
  background: #333;
  color: #fff;
}

.footer-col h4 {
  margin-bottom: 1rem;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col ul li {
  margin-bottom: 0.5rem;
}

.footer-col ul li a {
  text-decoration: none;
  color: #555;
}

.footer-col ul li a:hover {
  color: #000;
}

.subscribe {
  display: flex;
  margin-top: 1rem;
}

.subscribe input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.subscribe button {
  padding: 0.5rem 1rem;
  border: none;
  background: #333;
  color: #fff;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
}

.subscribe button:hover {
  background: #000;
}

.footer-bottom {
  border-top: 1px solid #eee;
  padding-top: 1rem;
  font-size: 0.85rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .features {
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
  }

  .footer-main {
    flex-direction: column;
    text-align: center;
  }

  b .footer-col {
    flex: 1 1 100%;
  }

  .subscribe {
    flex-direction: column;
  }

  .subscribe input,
  .subscribe button {
    width: 100%;
    border-radius: 4px;
    margin-top: 5px;
  }
}
</style>
