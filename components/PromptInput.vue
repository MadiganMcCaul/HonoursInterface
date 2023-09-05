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

  props: {
    activeExperiment: {
      default: "experiment1",
      type: String,
    },
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
                content: this.handleGptSystemMessage(),
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
    handleGptSystemMessage() {
      if (this.activeExperiment == "experiment1") {
        return "You are an expert on motivational interviewing. The concept 'change talk' refers to the specific language and statements that individuals make when they express their desire, ability, reasons, or commitment to change their behavior. Change talk is a central concept in MI, a therapeutic approach often used to help people resolve ambivalence and find motivation to make positive changes in their lives. I am going to provide you with a labelled conversation between a fake client and interviewer, I want you to identify the phrases or sentences where the client is expressing signs of change talk, or if there are any signs at all. Please elaborate on why they are showing signs of change talk for each instance.";
      } else if (this.activeExperiment == "experiment2") {
        return "You are an expert on motivational interviewing. The concept 'change talk' refers to the specific language and statements that individuals make when they express their desire, ability, reasons, or commitment to change their behavior. Change talk is a central concept in MI, a therapeutic approach often used to help people resolve ambivalence and find motivation to make positive changes in their lives. I am going to provide you with a labelled conversation between a fake client and interviewer, the conversation will cut-off after the interviewer utters a phrase/sentence. I would like you to suggest a phrase/sentence that the client would say in the context of this conversation that would be a good example of change talk, however please keep it subtle as if it were difficult to identify as change talk. Please elaborate after as to how this could be identified as change talk from the interviewers perspective.";
      } else if (this.activeExperiment == "experiment3") {
        return "You are an expert on motivational interviewing. The concept 'change talk' refers to the specific language and statements that individuals make when they express their desire, ability, reasons, or commitment to change their behavior. Change talk is a central concept in MI, a therapeutic approach often used to help people resolve ambivalence and find motivation to make positive changes in their lives. I am going to provide you with a labelled conversation between a fake client and interviewer, the conversation will cut-off after the client utters a phrase/sentence that includes an instance of change talk. I would like you to suggest a single phrase/sentence that the interviewer would say in the context of the conversation that would adhere to Motivational Interviewing guidlines in handling change talk. Next, I would like you to grade this response according to your most up-to-date MITI guidelines and critique it if neccessary.";
      } else if (this.activeExperiment == "experiment4") {
        return "geblinMode";
      }
    },
  },
});
</script>
