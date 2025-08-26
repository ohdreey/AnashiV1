<template>
   <router-link to="/vetements">
    <div class="homeContenair">
      <div class="imgHome">
        <img class="homeImgHome" src="../assets/img/home.jpg" alt="femme et chaise" />
      </div>
      <div class="homeText">
        <p>VINTAGE</p>
        <p>& SECOND HAND TREASURE</p>
        <p>SELECTED WITH LOVE</p>
        <p>BY YOSRA</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
</script>

<style scoped>
.homeContenair {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--main-yellow);
  /* border: 1px solid rgb(85, 255, 0); */
}

.imgHome {
  width: 100%;
  flex: 1;
}

.homeImgHome {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.homeText {
  color: var(--main-orange);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 55px;
  box-sizing: border-box;
}
</style>
