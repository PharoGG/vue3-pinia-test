<template>
  <div class="techno-card">
    <div class="info">
      <div class="name-category">
        <h3>{{ technology.name }}</h3>
        <p>Category: {{ technology.category }}</p>
      </div>
    </div>
    <div class="usage-status">
      <p v-if="technology.in_usage">Currently in usage</p>
      <p v-else>Not in usage</p>
      <p>
        <span class="price-per-month">Price per month:</span>
        {{ technology.price_per_month }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  technology: {
    type: Object,
    required: true,
  },
});

const technology = ref(props.technology);
</script>

<style scoped>
.techno-card {
  display: flex;
  border: 2px solid #ccc;
  background-color: rgb(230, 231, 231);
  border-radius: 10px;
  border: 2px solid #524e4e;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
}

.info {
  flex: 1;
}

.usage-status {
  margin-left: auto;
}

.name-category {
  display: flex;
  align-items: center;
}

.name-category h3 {
  margin-right: 10px;
}

.price-per-month {
  font-weight: bold;
  color: #1d4931;
}
</style>
