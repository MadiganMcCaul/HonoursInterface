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
const { Configuration, OpenAIApi } = require("openai");

let configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
delete configuration.baseOptions.headers["User-Agent"];

const openai = new OpenAIApi(configuration);
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
      await this.$axios
        .$post("http://localhost:3000/api/prompt/", {
          Prompt: {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  // "You are a expert on Motivational Interviewing, and will be using your expertise to train health professionals on this topic. You will be provided with scenarios that require behavioral change in clients alongside 4 options for the health professional to select, please choose the most suitable option that fits motivational interviewing. Motivational key concepts should include rolling with resistance, eliciting and strengthening an individual's own motivation to change and exploring their ambivalence and resistance to change.",
                  "You are an expert on motivational interviewing. The concept 'change talk' refers to the specific language and statements that individuals make when they express their desire, ability, reasons, or commitment to change their behavior. Change talk is a central concept in MI, a therapeutic approach often used to help people resolve ambivalence and find motivation to make positive changes in their lives. I am going to provide you with a labelled conversation between a fake client and interviewer, I want you to identify the phrases or sentences where the client is expressing signs of change talk, or if there are any signs at all. Please elaborate on why they are showing signs of change talk for each instance.",
              },
              {
                role: "user",
                content: this.prompt.query,
              },
            ],
            temperature: 1,
            max_tokens: 512,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          },
        })
        .then((response) => {
          console.log(response);
          this.$store.commit("prompt/add", {
            promptResult: response,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
