<template>
  <div
    id="Main-Page-Container"
    class="flex flex-row min-h-screen min-w-screen max-h-screen max-w-screen pl-32 pt-20 pb-20 pr-32"
  >
    <ExperimentSelection />
    <PromptInput />
    <PromptResult />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
