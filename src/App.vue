<template>
  <div id="app">
    <FilterPanel />
    <TechnoList />
  </div>
</template>

<script>
import FilterPanel from "./components/FilterPanel.vue";
import TechnoList from "./components/TechnoList.vue";
import { useTechStore } from "./store"; // Импортируем хранилище

export default {
  name: "App",
  components: {
    FilterPanel,
    TechnoList,
  },
  created() {
    const store = useTechStore(); // Создаем экземпляр хранилища
    store.fetchTechnologies(); // Вызываем метод загрузки данных
  },
};
</script>
