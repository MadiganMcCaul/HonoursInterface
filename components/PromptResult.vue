<template>
  <div
    id="Prompt-Result-Container"
    class="flex w-2/4 bg-slate-700 overflow-y-auto"
  >
    <div id="Prompt-Result-Text" class=" p-4">
      <h1 class="text-white" >GPT API Result:</h1>
      <p class="text-white"  v-if="$store.state.prompt.promptResults.length !== 0" > {{ $store.state.prompt.promptResults[$store.state.prompt.promptResults.length - 1].promptResult.choices[0].message.content }}</p>
      <p class="text-white" v-if="$store.state.prompt.promptResults.length === 0">Result Pending</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script></script>