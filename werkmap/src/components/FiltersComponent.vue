<script setup>

</script>

<template>

  <div class="filters">
    <label><input type="checkbox" id="console-filter"> Console</label>
    <label><input type="checkbox" id="controller-filter"> Controller</label>
    <label><input type="checkbox" id="games-filter"> Games</label>
    <button class="filter-button">Filter</button>
  </div>

</template>

<style scoped>

/* Stijl voor filters */
.filters {
  text-align: center;
  margin: 10px;
  padding-top: 30px;
}
.filters label {
  display: inline-block;
  margin: 0 10px;
}
.filters label input[type=checkbox] {
  margin-right: 5px;
}

/* Voeg stijl toe voor de filterknop */
.filter-button {
  display: inline-block;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 10%;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s;
  text-align: center;
}

.filter-button:hover {
  background-color: #0056b3;
}

</style>