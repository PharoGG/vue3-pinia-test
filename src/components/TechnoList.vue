<template>
  <div class="techno-list">
    <transition-group name="fade">
      <TechnoCard
        v-for="tech in filteredTechnologies"
        :key="tech.id"
        :technology="tech"
      />
    </transition-group>
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
  display: flex;
  flex-direction: column;
  margin-right: 15%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
