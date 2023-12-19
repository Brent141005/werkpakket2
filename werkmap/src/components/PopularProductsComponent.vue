<script setup>
</script>

<template>
  <div id="producten">
    <h1>Producten in de kijker</h1>
    <ul class="product-list">
      <li class="product">
        <h2>Playstation 5</h2>
        <img src="@/afbeeldingen/nik-wmY7gKdYSmI-unsplash.jpg">
        <p>Playstation PS5 825 GB</p>
        <p>Prijs: €559,00</p>
        <button class="add-to-cart"><router-link to="/item">Bekijk</router-link></button>
      </li>
      <li class="product">
        <h2>Xbox series X</h2>
        <img src="@/afbeeldingen/billy-freeman-DPOdCl4bGJU-unsplash.jpg">
        <p>MICROSOFT Xbox Series X 1TB</p>
        <p>Prijs: €544,00</p>
        <button class="add-to-cart">Bekijk</button>
      </li>
      <li class="product">
        <h2>Nintendo Switch</h2>
        <img src="@/afbeeldingen/tobiah-ens-bHnbqJBTwLs-unsplash.jpg">
        <p>NINTENDO Switch Rood / Blauw</p>
        <p>Prijs: €290,00</p>
        <button class="add-to-cart">Bekijk</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

/* Stijlen voor de productencontainer */
#producten {
  margin-top: 100px;
  text-align: center;
  /* Stijlen voor de individuele producten */
}
#producten h1 {
  font-size: 1.5rem;
  margin: 100px;
}
#producten .product-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
#producten .product {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}
#producten .product h2 {
  font-size: 1.2rem;
}
#producten .product p {
  margin: 10px 0;
}
#producten .product .add-to-cart {
  background-color: #0074d9;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
#producten .product .add-to-cart:hover {
  background-color: #005aa3;
}
#producten .product .add-to-cart a {
  color: #fff;
  text-decoration: none;
}
#producten .product .add-to-cart a:hover {
  text-decoration: none;
}
#producten .product .add-to-cart a:active {
  text-decoration: none;
}
#producten .product img {
  width: 250px;
  height: 170px;
  border-radius: 10%;
}

</style>
