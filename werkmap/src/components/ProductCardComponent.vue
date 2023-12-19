<script setup>

</script>

<template>
  <div id="producten">
    <h1>Onze Producten</h1>
    <ul class="product-list">
      <li class="product">
        <h2>Playstation 5</h2>
        <img src="@/afbeeldingen/nik-wmY7gKdYSmI-unsplash.jpg">
        <p>Playstation PS5 825 GB</p>
        <p>Prijs: €559,00</p>
        <button class="add-to-cart">Bekijk</button>
        <button class="add-to-cart add-to-cart-secondary" @click="addToCart('Playstation 5')">Voeg toe</button>
      </li>
      <li class="product">
        <h2>Xbox series X</h2>
        <img src="@/afbeeldingen/billy-freeman-DPOdCl4bGJU-unsplash.jpg">
        <p>MICROSOFT Xbox Series X 1TB</p>
        <p>Prijs: €544,00</p>
        <button class="add-to-cart">Bekijk</button>
        <button class="add-to-cart add-to-cart-secondary" @click="addToCart('Xbox series X')">Voeg toe</button>
      </li>
      <li class="product">
        <h2>Nintendo Switch</h2>
        <img src="@/afbeeldingen/tobiah-ens-bHnbqJBTwLs-unsplash.jpg">
        <p>NINTENDO Switch Rood / Blauw</p>
        <p>Prijs: €290,00</p>
        <button class="add-to-cart">Bekijk</button>
        <button class="add-to-cart add-to-cart-secondary" @click="addToCart('Nintendo Switch')">Voeg toe</button>
      </li>
      <li class="product">
        <h2>Ps5 controller</h2>
        <img src="@/afbeeldingen/pexels-anthony-📷📹🙂-18417233.jpg">
        <p>PLAYSTATION Draadloze controller PS5 DualSense</p>
        <p>Prijs: €70,00</p>
        <button class="add-to-cart">Bekijk</button>
        <button class="add-to-cart add-to-cart-secondary" @click="addToCart('Ps5 controller')">Voeg toe</button>
      </li>
      <li class="product">
        <h2>Xbox controller</h2>
        <img src="@/afbeeldingen/oli-woodman-0v0VzQW_oqo-unsplash.jpg">
        <p>MICROSOFT Draadloze controller Xbox Series</p>
        <p>Prijs: €65,00</p>
        <button class="add-to-cart">Bekijk</button>
        <button class="add-to-cart add-to-cart-secondary" @click="addToCart('Xbox controller')">Voeg toe</button>
      </li>
      <li class="product">
        <h2>Nintendo switch controller</h2>
        <img src="@/afbeeldingen/sara-kurfess-jqpRECmiNEU-unsplash.jpg">
        <p>NINTENDO Switch Joy-Con-controllerset</p>
        <p>Prijs: $75,00</p>
        <button class="add-to-cart">Bekijk</button>
        <button class="add-to-cart add-to-cart-secondary" @click="addToCart('Nintendo switch controller')">Voeg toe</button>
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

#producten .product .add-to-cart-secondary {
  margin-left: 10px;
  background-color: #28a745;
}

#producten .product .add-to-cart-secondary:hover {
  background-color: #218838;
}


</style>