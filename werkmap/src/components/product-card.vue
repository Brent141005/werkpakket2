<script>
import {cartStore} from "@/stores/cart";

export default {
  props: ['product'],
  data() {
    return {
      cart: cartStore()
    };
  },
  created() {
    // props are exposed on `this`
  }
}
</script>

<template>
  <li class="product">
    <h2>{{ product.title }}</h2>
    <img :src="`/src/afbeeldingen/${product.image}`" :alt="product.title">
    <p>{{ product.description }}</p>
    <p>Prijs: €{{ product.price }}</p>
    <router-link class="add-to-cart" :to="{ name: 'product-detail', params: { id: product.id }}">Bekijk</router-link>
    <button class="add-to-cart add-to-cart-secondary" @click="cart.addToCart(product, 1)">Voeg toe</button>
  </li>
</template>

<style scoped>
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