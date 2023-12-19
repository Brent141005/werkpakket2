<script>
export default {
  data() {
    return {
      cart: [
        { id: 1, name: 'Playstation', price: 20.00, quantity: 1, image: 'nik-wmY7gKdYSmI-unsplash.jpg' },
        { id: 2, name: 'Product 2', price: 30.00, quantity: 1, image: 'nik-wmY7gKdYSmI-unsplash.jpg' },
        // Voeg meer producten toe met de eigenschap 'quantity' indien nodig
      ],
    };
  },
  methods: {
    calculateTotal() {
      return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    removeProduct(index) {
      this.cart.splice(index, 1);
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="cart-container">
      <div v-for="(product, index) in cart" :key="product.id" class="cart-item">
        <img :src="`/src/afbeeldingen/${product.image}`" :alt="product.name" class="product-image">
        <div class="product-details">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">Prijs: ${{ product.price.toFixed(2) }}</p>
          <p class="product-quantity">Aantal: {{ product.quantity }}</p>
          <button @click="increaseQuantity(index)" class="quantity-button">Verhoog</button>
          <button @click="decreaseQuantity(index)" class="quantity-button">Verlaag</button>
        </div>
        <button class="remove-button" @click="removeProduct(index)">Verwijderen</button>
      </div>

      <div class="cart-total">
        <p class="total-text">Totaal: ${{ calculateTotal().toFixed(2) }}</p>
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

.product-image {
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
  border-radius: 10px;
}

.product-details {
  flex-grow: 1;
}

.product-name {
  font-size: 18px;
}

.product-price {
  font-size: 14px;
  color: #888;
}

.product-quantity {
  font-size: 14px;
  color: #888;
}

.quantity-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
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

.cart-total {
  margin-top: 20px;
  font-size: 18px;
  text-align: right;
}

.total-text {
  margin: 0;
  color: #333;
}
</style>

