<script setup>

</script>

<template>

  <div class="image-container">
    <img src="@/afbeeldingen/fabian-albert--yePUylDPJQ-unsplash.jpg" alt="afbeelding controller">
    <h1>Playstation</h1>
  </div>

</template>

<style scoped>

/* Stijlen voor de image-container div */
.image-container {
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: relative;
}

/* Stijlen voor de afbeeldingen binnen de container */
.image-container img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
}

/* Stijlen voor de tekst "Welkom" en de knop "Producten" */
.image-container h1 {
  font-size: 100px;
  color: #fff;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 1470px) {
  .image-button p {
    margin: 3px;
  }
}

</style>