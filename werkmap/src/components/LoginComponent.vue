<script setup>

</script>

<template>

  <div class="login-container">
    <h1>Login</h1>
    <form class="login-form">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required>

      <label for="password">Wachtwoord:</label>
      <input type="password" id="password" name="password" required>

      <a class="forgot-password" href="#">Wachtwoord vergeten?</a>

      <button type="submit" class="login-button">Inloggen</button>
    </form>
  </div>





</template>

<style scoped>

/* Stijlen voor de inlogcontainer */
.login-container {
  text-align: center;
  margin: 50px auto;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* Stijlen voor het inlogformulier */
}
.login-container h1 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.login-container .login-form {
  text-align: left;
}
.login-container .login-form label {
  display: block;
  font-weight: bold;
  margin-top: 10px;
}
.login-container .login-form input[type=email],
.login-container .login-form input[type=password] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login-container .login-form a.forgot-password {
  display: block;
  text-align: right;
  margin-top: 10px;
  text-decoration: none;
  color: #0074d9;
}
.login-container .login-form a.forgot-password:hover {
  text-decoration: underline;
}
.login-container .login-form button.login-button {
  background-color: #0074d9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.login-container .login-form button.login-button:hover {
  background-color: #005aa3;
}


</style>