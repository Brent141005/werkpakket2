<script setup>

</script>

<template>
  <footer class="loginfooter" id="contact">
    <div class="footer-content">
      <div class="contact-info">
        <h3>Contactgegevens</h3>
        <p>Email: contact@example.com</p>
        <p>Telefoon: (123) 456-7890</p>
        <p>Adres: 123 Straatnaam, Stad, Land</p>
      </div>
      <div class="social-media">
        <h3>Volg ons</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2023 Jouw Bedrijfsnaam. Alle rechten voorbehouden.</p>
    </div>
  </footer>

</template>

<style scoped>

/* Stijlen voor de footer */
footer {
  background-color: #333;
  color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  /* Stijlen voor de contactgegevens */
  /* Stijlen voor sociale media links */
  /* Stijlen voor het copyright-bericht */
}
footer .footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
footer .contact-info {
  flex: 1;
  padding-right: 20px;
}
footer .contact-info h3 {
  font-size: 1.2rem;
}
footer .contact-info p {
  margin: 10px 0;
}
footer .social-media {
  flex: 1;
  max-width: 50%;
}
footer .social-media h3 {
  font-size: 1.2rem;
}
footer .social-media ul {
  list-style: none;
  padding: 0;
}
footer .social-media ul li {
  margin-bottom: 10px;
}
footer .social-media ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}
footer .social-media ul li a:hover {
  color: #0074d9;
}
footer .copyright {
  text-align: center;
  margin-top: 20px;
}
footer .copyright p {
  font-size: 0.9rem;
}

.loginfooter {
  position: absolute;
}

</style>