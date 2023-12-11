<script setup>

</script>

<template>
  <nav>
    <ul class="navbar">
      <li><a href="startpagina.html">Home</a></li>
      <li><a href="productpage.html">Producten</a></li>
      <li><a href="playstation.html">Playstation</a></li>
      <li><a href="#">XBOX</a></li>
      <li><a href="#">Nintendo</a></li>
      <li><a href="#">Winkelmand</a></li>
      <li><a href="inlogpagina.html">Login</a></li>
      <li class="right"><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>

/* Navigatiebalk */
nav {
  background-color: rgba(0, 116, 217, 0.9);
  padding: 15px 0;
  height: 50px;
  opacity: 0.95;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
nav .navbar {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
nav .navbar li {
  display: inline;
  margin: 0 20px;
}
nav .navbar a {
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}
nav .navbar a:hover {
  background-color: #0074d9;
  border-color: #fff;
}
@media (max-width: 1260px) {
  nav .navbar li {
    display: inline;
    margin: 0 10px;
  }
}


</style>