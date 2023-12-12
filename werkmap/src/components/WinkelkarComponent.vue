<script>
export default {
  data() {
    return {
      cart: [
        { id: 1, name: 'Playstation', price: 20.00, image: 'nik-wmY7gKdYSmI-unsplash.jpg' },
        { id: 2, name: 'Product 2', price: 30.00, image: 'nik-wmY7gKdYSmI-unsplash.jpg' },
        // Voeg meer producten toe indien nodig
      ],
    };
  },
  methods: {
    calculateTotal() {
      return this.cart.reduce((total, product) => total + product.price, 0);
    },
    removeProduct(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<template>
  <div>
    <div class="cart-container">
      <div v-for="(product, index) in cart" :key="product.id" class="cart-item">
        <img :src="`/src/afbeeldingen/${product.image}`" :alt="product.name">
        <div>
          <h3>{{ product.name }}</h3>
          <p>Price: ${{ product.price.toFixed(2) }}</p>
        </div>
        <button class="remove-button" @click="removeProduct(index)">Remove</button>
      </div>

      <div class="cart-total">
        <p>Total: ${{ calculateTotal().toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.cart-container {
  max-width: 600px;
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.cart-item img {
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
  border-radius: 10px;
}

.cart-total {
  margin-top: 20px;
  font-size: 18px;
  text-align: right;
}

.remove-button {
  background-color: #ff6961;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #d9534f;
}
</style>
