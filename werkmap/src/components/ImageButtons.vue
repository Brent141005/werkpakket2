<script setup>
</script>

<template>
  <div class="image-buttons">
    <router-link to="/playstation">
      <button class="image-button">
        <img src="@/afbeeldingen/kerde-severin-NVD_32BBZFE-unsplash.jpg" alt="Afbeelding 1">
        <p>Playstation</p>
      </button>
    </router-link>
    <button class="image-button">
      <img src="@/afbeeldingen/pexels-corentin-detry-4491606.jpg" alt="Afbeelding 2">
      <p>Xbox</p>
    </button>
    <button class="image-button">
      <img src="@/afbeeldingen/pexels-michael-adeleye-6993182.jpg" alt="Afbeelding 3">
      <p>Nintendo</p>
    </button>
  </div>
</template>

<style scoped>
/* Stijlen voor de knoppen */
.image-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.image-buttons .image-button {
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  margin: 20px;
  width: 450px;
  height: 300px;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
}
.image-buttons .image-button:hover {
  transform: scale(1.1);
}
.image-buttons .image-button p {
  font-size: 2rem;
}
.image-buttons .image-button img {
  max-width: 100%;
  border-radius: 10%;
}

@media (max-width: 1470px) {
  .image-buttons {
    flex-direction: column;
  }
  .image-button p {
    margin: 3px;
  }
}

</style>
