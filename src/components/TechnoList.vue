<template>
  <div class="techno-list">
    <TechnoCard
      v-for="tech in filteredTechnologies"
      :key="tech.id"
      :technology="tech"
    />
  </div>
</template>

<script setup>
import { useTechStore } from "../store";
import { ref, watchEffect } from "vue";
import TechnoCard from "./TechnoCard.vue";

const store = useTechStore();
const filteredTechnologies = ref([]);

watchEffect(() => {
  filteredTechnologies.value = store.filteredTechnologies;
});
</script>

<style scoped>
.techno-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}
</style>
