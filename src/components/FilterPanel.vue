<template>
  <div class="filter-panel">
    <h2>Filters</h2>
    <div class="filter">
      <label>Category:</label>
      <select v-model="selectedCategory" @change="applyCategoryFilter">
        <option value="">All</option>
        <option
          v-for="category in getCategories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <div class="filter">
      <label>In Usage:</label>
      <select v-model="inUsageFilter" @change="applyInUsageFilter">
        <option value="">All</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
    <div class="filter">
      <label>Free Only:</label>
      <input
        type="checkbox"
        v-model="freeOnlyFilter"
        @change="applyFreeOnlyFilter"
      />
    </div>
    <div class="filter">
      <label>Sort by Price:</label>
      <select v-model="sortByPriceAsc" @change="applySortByPrice">
        <option value="true">Ascending</option>
        <option value="false">Descending</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTechStore } from "../store";

const store = useTechStore();

const getCategories = computed(() => store.categories);

// const categories = ref(store.categories);
const selectedCategory = ref(store.selectedCategory);
const inUsageFilter = ref(store.inUsageFilter);
const freeOnlyFilter = ref(store.freeOnlyFilter);
const sortByPriceAsc = ref(store.sortByPriceAsc);

const applyCategoryFilter = (event) => {
  store.setSelectedCategory(event.target.value);
};

const applyInUsageFilter = (event) => {
  store.setInUsageFilter(event.target.value);
};

const applyFreeOnlyFilter = (event) => {
  store.setFreeOnlyFilter(event.target.checked);
};

const applySortByPrice = (event) => {
  store.setSortByPriceAsc(event.target.value === "true");
};
</script>

<style scoped>
.filter-panel {
  margin-bottom: 20px;
}
.filter {
  margin-bottom: 10px;
}
</style>
