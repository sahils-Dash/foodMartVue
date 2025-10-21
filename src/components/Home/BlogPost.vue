<template>
  <div class="container">
    <div class="title">
      <h1>Our Recent Blog</h1>
      <a href="#" style="color: rgb(121, 121, 121); text-decoration: none">Read All Articles &#10140;</a>
    </div>
    <div class="card-box">
      <div class="card" v-for="card in cards" :key="card">
        <img :src="card.image" />
        <div class="status">
          <span>
            <i class="fa-regular fa-calendar" />
            <p>{{ card.date }}</p>
          </span>
          <span>
            <i class="fa-regular fa-folder" />
            <p>{{ card.category }}</p>
          </span>
        </div>
        <h1>{{ card.title }}</h1>
        <p style="padding: 0px 8px; color: rgb(121, 121, 121); line-height: 2rem">{{ card.data }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import blog1 from "../../assets/Blog1.jpg"
import blog2 from "../../assets/Blog1.jpg"
import blog3 from "../../assets/Blog3.jpg"

const cards = [{ id: 1, image: blog1, date: "22 Aug 2021", category: "tips & tricks", title: "Top 10 casual look ideas to dress up your kids", data: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi..." },
{ id: 2, image: blog2, date: "25 Aug 2021", category: "trending", title: "Latest trends of wearing street wears supremely", data: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi..." },
{ id: 3, image: blog3, date: "28 Aug 2021", category: "inspiration", title: "10 Different Types of comfortable clothes ideas for women", data: "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi..." }

];
</script>

<style scoped>
.container {
  margin: 30px 10%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 72%;
}

.card-box {
  display: flex;
  flex-direction: row;
  gap: 2.2%;
  padding-right: 0%;
}

.card {
  box-shadow: black;
  border-radius: 8px;
  max-width: 30%;
  padding: 1%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.status {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4%;
  color: rgb(121, 121, 121);
  font-size: 15px;
  margin: 6px;
}

.status span {
  display: flex;
  flex-direction: row;
  width: 30%;
  flex-wrap: nowrap;
  align-items: center;
  gap: 4%;
}

.card img {
  max-width: 450px;
  border-radius: 8px 8px 0px 0px;
  height: 350px;
}

.card h1 {
  padding: 8px 1%;
  margin: 6px;
  font-size: 30px;
}

.card p {
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>
