<template>
  <div id="Prompt-Input-Container" class="flex w-1/4 flex-col">
    <div
      id="Prompt-Input-Box"
      class="flex w-full h-4/5 justify-center items-center bg-slate-600 overflow-y-auto"
    >
      <textarea
        id="price"
        v-model="prompt.query"
        type="text"
        rows="6"
        columns="52"
        name="prompt"
        class="rounded resize-none h-4/5 max-h-4/5 w-4/5 p-2"
        placeholder="Insert Prompt Here"
      ></textarea>
    </div>
    <div
      id="Prompt-Send-Container"
      class="flex w-full h-1/5 bg-slate-800 items-center justify-center"
    >
      <Button label="Send Prompt" :text-only="true" @click="sendPrompt" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      prompt: {
        query: "",
      },
    };
  },
  methods: {
    async sendPrompt() {
      console.log("Currently prompt is:" + this.prompt.query);
      await this.$axios
        .$get("http://localhost:3000/prompt/")
        .then((response) => {
          console.log(response);
        });
    },
  },
});
</script>
