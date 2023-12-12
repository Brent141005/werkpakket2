<script setup>

import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PlaystationPageImage from "@/components/PlaystationPageImage.vue";
import FiltersComponent from "@/components/FiltersComponent.vue";
import PlaystationProductsComponent from "@/components/PlaystationProductsComponent.vue";

</script>

<template>

  <HeaderComponent/>
  <PlaystationPageImage/>
  <FiltersComponent/>
  <playstation-products-component/>
  <FooterComponent/>


</template>

<style scoped>

</style>