<script setup>

</script>

<template>

  <div class="product-detail">
    <img src="@/afbeeldingen/nik-wmY7gKdYSmI-unsplash.jpg" alt="Product Name">

    <div class="product-info">
      <h1>Playstation 5</h1>
      <p>Laat je naar verbijsterend realistische werelden meeslepen met de Playstation
        PS5 spelconsole. Ga op in levensechte graphics dankzij Ray Tracing-technologie
        en ondersteuning voor 120 fps op 4K-beeldschermen. Ray Tracing simuleert lichtstralen individueel
        voor een nog realistischere weergave van licht en schaduw. De geavanceerde controller met haptische
        feedback trilt waarheidsgetrouw met gebeurtenissen in het spel mee. Wapens en andere uitrusting worden
        extra tastbaar vanwege de responsieve triggers. Zo imiteert de controller bijvoorbeeld het gevoel
        van een terugslag wanneer je de trekker overhaalt. Je kan via de ingebouwde microfoon met andere
        spelers communiceren. Omring jezelf met waarheidsgetrouw omgevingsgeluid met behulp van 3D-audio.
        Geniet van snellere laadtijden dankzij het bijzonder snelle ingebouwde SSD-geheugen.
      </p>
    </div>

    <div class="product-price">
      <span class="original-price">€ 559,00</span>
    </div>

    <div class="product-stock">
      <p>Online op voorraad</p>
    </div>

    <div class="extra-options">
      <p class="warranty">Voor 22:00 besteld, morgen in huis</p>
    </div>

    <div class="store-options">
      <button class="order-button">Toevoegen aan winkelmand</button>
    </div>

  </div>

</template>

<style scoped>

/* Productdetailcontainer */
.product-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Productafbeelding */
.product-detail img {
  max-width: 100%;
  border-radius: 5px;
}

/* Productinformatie */
.product-info {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.product-info h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-info p {
  font-size: 16px;
  margin: 10px 0;
}

/* Prijs */
.product-price {
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 24px;
}
.product-price .original-price {
  margin-right: 10px;
}

/* Voorraad en levering */
.product-stock {
  margin-top: 20px;
  font-size: 18px;
}

.order-button {
  background-color: #0074d9;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}
.order-button:hover {
  background-color: #005aa3;
}

</style>