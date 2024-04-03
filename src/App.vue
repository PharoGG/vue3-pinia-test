<template>
  <div id="app">
    <FilterPanel />
    <TechnoList />
  </div>
</template>

<script>
import FilterPanel from "./components/FilterPanel.vue";
import TechnoList from "./components/TechnoList.vue";
import { useTechStore } from "./store";

export default {
  name: "App",
  components: {
    FilterPanel,
    TechnoList,
  },
  created() {
    const store = useTechStore();
    store.fetchTechnologies();
  },
};
</script>

<style>
#app {
  padding-top: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #bebebe;
  overflow: auto;
}
</style>
