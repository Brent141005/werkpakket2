<script>
import router from "@/router";

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        address: '',
        creditCard: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
      router.push({path: 'confirm'});
    }
  }}
</script>

<template>
  <div>
    <h2>Vul hieronder jouw gegevens in</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />

      <label for="address">Address:</label>
      <textarea id="address" v-model="formData.address" required></textarea>

      <label for="creditCard">Credit Card:</label>
      <input type="text" id="creditCard" v-model="formData.creditCard" required />

      <button type="submit">Complete Purchase</button>
    </form>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

form {
  max-width: 400px;
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

</style>
