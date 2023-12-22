<script>
import ProductsService from "@/services/products.service";
import {cartStore} from "@/stores/cart";


export default {
  data() {
    return {
      product: null,
      cart: cartStore()
    };
  },
  mounted() {
    this.loadProduct();
  },
  methods: {
    async loadProduct() {
      const productId = this.$route.params.id;
      // Assuming your ProductService has a method to fetch a single product by ID
      // You might need to modify this based on your actual data structure
      this.product = await ProductsService.getProductById(productId);
    }
  }
};
</script>

<template>

  <div class="product-detail" v-if="product">
    <img :src="`/src/afbeeldingen/${product.image}`" :alt="product.title">

    <div class="product-info">
      <h1>{{product.title}}</h1>
      <p>{{product.description}}</p>
    </div>

    <div class="product-price">
      <span class="original-price">€ {{product.price}}</span>
    </div>

    <div class="product-stock">
      <p>Online op voorraad</p>
    </div>

    <div class="extra-options">
      <p class="warranty">Voor 22:00 besteld, morgen in huis</p>
    </div>

    <div class="store-options">
      <button class="order-button" @click="cart.addToCart(product, 1)">Toevoegen aan winkelmand</button>
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