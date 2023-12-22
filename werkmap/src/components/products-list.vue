<script>
import ProductService from '@/services/products.service';
import ProductCard from "@/components/product-card.vue";

export default {
  components: {ProductCard},
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.products = await ProductService.getProducts();
    }
  }
};
</script>

<template>
  <div id="producten">
    <h1>Onze Producten</h1>
    <ul class="product-list">
      <product-card v-for="product in products" :key="product.id" :product="product"/>
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

</style>