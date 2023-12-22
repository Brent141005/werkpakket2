<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div class="app-wrapper">
    <HeaderComponent/>

    <router-view class="app-content"></router-view>

    <FooterComponent/>
  </div>
</template>

<style>
  .app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .app-content {
    flex: 1;
  }
</style>

