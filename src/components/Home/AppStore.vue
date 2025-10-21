<template>
  <div class="formContainer">
    <div class="container1">
      <img :src="phonePic" />
    </div>

    <div class="container2">
      <h1>Shop faster with foodmart App</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, odit magnam. Tempore consequuntur
        doloremque neque possimus ab! Rerum molestiae sed, reprehenderit, ipsa necessitatibus esse delectus inventore
        assumenda repellendus, vero ad? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consectetur
        tempora dolorum magni voluptates </p>
      <div class="logos">
        <img :src="appStore" alt="app store logo" class="img1">
        <img :src="playStore" alt="play store logo" class="img2">
      </div>

    </div>
  </div>
  <div class="quickTiles">
    <h2 style="font-size: xx-large;">People are also looking for</h2>
    <div class="tilesGrid">
      <span class="tiles" v-for="search in searches" :key="search.id">
        {{ search.name }}
      </span>
    </div>

  </div>
</template>

<script setup>
import phonePic from "../../assets/phone.png"
import appStore from "../../assets/app-store.jpg"
import playStore from "../../assets/google-play.jpg"

const searches = [{ id: 1, name: "Blue diamond almonds" },
{ id: 2, name: "Blue diamond almonds" },
{ id: 3, name: "Green Olives" },
{ id: 4, name: "Custard apple shake" },
{ id: 5, name: "Blue almonds cherries" },
{ id: 6, name: "Red pinaple" },
{ id: 7, name: "Blue diamond orange spotted green" },
{ id: 8, name: "red mustard sauce" },
{ id: 9, name: "Blue diamond" },
{ id: 10, name: "Almonds ice coffee ice cream latte" },
{ id: 11, name: "Yellow banana" },
{ id: 12, name: "Ripe Papaya" },
{ id: 13, name: "Macha green tea" },
{ id: 14, name: "Almonds ice coffee ice cream latte" },
{ id: 15, name: "Blue almonds cherries" },
{ id: 16, name: "Ripe Papaya" },
{ id: 17, name: "Green Olives red olives" },
{ id: 18, name: "Blue diamond almonds" },


]
</script>

<style scoped>
.formContainer {
  background-color: #edffe5;
  border-radius: 30px;
  margin: 10%;
  display: flex;
  gap: 4rem;
  padding: 8rem;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-height: 220px;
}

.container1 {
  flex: 1;

}

.container2 h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.highlight {
  color: #ffa726;
}

.container2 p {
  color: #666;
  padding-top: 2rem;
  line-height: 2;
  font-size: 1rem;
  text-align: start;
}

.container2 {
  flex: 2;
}

.logos {
  display: flex;
  gap: 10px;
}

.img1,
.img2 {
  border-radius: 10px;
}

.quickTiles {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0px 10%;
}

.tilesGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 1%;
  padding-bottom: 6%;
}

.tiles {
  display: inline-block;

  background-color: #fff3e1;
  border-radius: 8px;
  max-width: fit-content;
  padding: 9px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #666;
}
</style>
