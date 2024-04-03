import { defineStore } from "pinia";

export const useTechStore = defineStore({
  id: "tech",
  state: () => ({
    technologies: [], // массив технологий
    categories: [], // массив уникальных категорий
    inUsageFilter: "", // используется ли технология или нет
    freeOnlyFilter: false, // только бесплатные технологии
    selectedCategory: "", // выбранная категория для отображения
    sortByPriceAsc: true, // сортировка по цене (true - по возрастанию, false - по убыванию)
  }),

  getters: {
    filteredTechnologies(state) {
      let filteredTechnologies = [...state.technologies];

      // Фильтрация по использованию
      if (state.inUsageFilter !== "") {
        filteredTechnologies = filteredTechnologies.filter(
          (tech) => tech.in_usage.toString() === state.inUsageFilter
        );
      }

      // Фильтрация только бесплатных технологий
      if (state.freeOnlyFilter) {
        filteredTechnologies = filteredTechnologies.filter(
          (tech) => tech.price_per_month === "Free"
        );
      }

      // Фильтрация по категории
      if (state.selectedCategory !== "") {
        filteredTechnologies = filteredTechnologies.filter(
          (tech) => tech.category === state.selectedCategory
        );
      }

      // Сортировка по алфавиту
      filteredTechnologies.sort((a, b) => {
        if (a.price_per_month === "Free" && b.price_per_month === "Free") {
          return a.name.localeCompare(b.name);
        } else if (a.price_per_month === "Free") {
          return -1;
        } else if (b.price_per_month === "Free") {
          return 1;
        } else {
          // Сортировка по цене
          // return state.sortByPriceAsc
          //   ? a.price_per_month.localeCompare(b.price_per_month)
          //   : b.price_per_month.localeCompare(a.price_per_month);
          const priceA = parseFloat(a.price_per_month.replace("USD", ""));
          const priceB = parseFloat(b.price_per_month.replace("USD", ""));
          return state.sortByPriceAsc ? priceA - priceB : priceB - priceA;
        }
      });

      return filteredTechnologies;
    },
  },

  actions: {
    // Загрузка json
    async fetchTechnologies() {
      const response = await fetch("/test_task.json");
      const technologies = await response.json();
      this.setTechnologies(technologies);
    },

    // Список технолгий
    setTechnologies(technologies) {
      this.technologies = technologies;
      this.categories = [...new Set(technologies.map((tech) => tech.category))];
    },

    // Фильтр по использованию
    setInUsageFilter(value) {
      this.inUsageFilter = value;
    },

    // Бесплатные технологии
    setFreeOnlyFilter(value) {
      this.freeOnlyFilter = value;
    },

    // Выбор конкретной категории
    setSelectedCategory(category) {
      this.selectedCategory = category;
    },

    // Выбор сортировки
    setSortByPriceAsc(value) {
      this.sortByPriceAsc = value;
    },
  },
});
