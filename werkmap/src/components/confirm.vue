<script setup>

</script>

<template>
  <div class="thank-you-container">
    <h1>Bedankt voor jouw bestelling!</h1>
    <p>Je aankoop is succesvol afgerond.</p>
    <img src="@/afbeeldingen/pexels-jeshootscom-442576.jpg" alt="Thank you" class="thank-you-image">


  </div>
</template>

<style scoped>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

.thank-you-container {
  max-width: 600px;
  margin: 50px auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #007bff;
  font-size: 36px;
  margin-bottom: 20px;
}

.thank-you-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}




</style>
