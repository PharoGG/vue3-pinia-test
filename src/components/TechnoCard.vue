<template>
  <div class="techno-card">
    <h3>{{ technology.name }}</h3>
    <p>Category: {{ technology.category }}</p>
    <p>Price per month: {{ technology.price_per_month }}</p>
    <p v-if="technology.in_usage">Currently in usage</p>
    <p v-else>Not in usage</p>
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
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
