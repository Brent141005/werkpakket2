<script setup>
</script>

<template>
  <div class="image-container">
    <img src="@/afbeeldingen/pexels-pixabay-459762.jpg" alt="Afbeelding controller">
    <h1>Welkom</h1>
    <p>Fan van gaming? Check zeker onze producten!</p>
    <button><a href="productpage.html">Producten</a></button>
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

.image-container p {
  font-size: 30px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
}

.image-container button {
  background-color: #0074d9;
  color: #fff;
  padding: 10px 20px;
  font-size: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.image-container button:hover {
  background-color: #fff;
  color: #0074d9;
}

.image-container a {
  text-decoration: none;
  color: #fff;
}
.image-container a:hover {
  color: #0074d9;
}

</style>
