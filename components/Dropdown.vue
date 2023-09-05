<template>
  <div>
    <select
      v-model="selectedItem"
      @change="handleChange"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="experiment1">Experiment 1</option>
      <option value="experiment2">Experiment 2</option>
      <option value="experiment3">Experiment 3</option>
      <option value="experiment4">Experiment 4</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      selectedItem: "experiment1", // Initialize with a default value
    };
  },
  methods: {
    handleChange() {
      // Do something with this.selectedItem when the dropdown changes
      this.$emit("selectedItemChanged", this.selectedItem);
    },
  },
});
</script>
