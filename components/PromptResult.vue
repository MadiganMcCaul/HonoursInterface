<template>
  <div
    id="Prompt-Result-Container"
    class="flex w-2/4 bg-slate-700 overflow-y-auto"
  >
    <div id="Prompt-Result-Text" class="">
      <h1>GPT API Result:</h1>
      <p v-if="$store.state.prompt.promptResults.length !== 0" > {{ $store.state.prompt.promptResults[0].promptResult.choices[0].message.content }}</p>
      <p v-if="$store.state.prompt.promptResults.length === 0">Result Pending</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script></script>