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

</style>