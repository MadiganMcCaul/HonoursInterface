<template>
  <div
    id="Experiment-Box"
    class="flex flex-col items-center w-1/4 bg-slate-400"
  >
    <div
      id="Experiment-Selection-Container"
      class="flex w-4/5 h-1/6 bg-slate-600 items-center justify-center"
    >
      <div
        id="Experiment-Selection-Box"
        class="flex w-4/5 h-4/5 bg-slate-800 justify-center items-center"
      >
        <Dropdown @selectedItemChanged="selectedItemChanged" class="w-1/2" />
      </div>
    </div>

    <div id="Experiment-Context" class="flex flex-col w-4/5 h-4/5 bg-slate-800">
      <p class="p-4 text-gray-50">{{ handleExperimentContextTitle() }}</p>
      <p class="p-4 text-gray-50">{{ handleExperimentContext() }}</p>
      <p class="p-4 text-gray-50">TODO: Add Brief Instructions?</p>
    </div>
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
    selectedItemChanged(selectedItem: string) {
      this.selectedItem = selectedItem;
      this.$emit("selectedItemChanged", this.selectedItem);
    },
    handleExperimentContext() {
      if (this.selectedItem == "experiment1") {
        return "The unaugmented Large Language Model program will receive each transcript from the Client-Modified data set, and asked at each client utterance to identify whether the utterance is an instance of Change Talk or not. Performance will be evaluated numerically for correct responses (identifying “real” Change Talk, and not misidentifying any other utterances). This experiment assesses a skill required for an Interviewer chatbot, as a Motivational Interviewer must be able to identify instances of Change Talk whenever they occur." as String;
      } else if (this.selectedItem == "experiment2") {
        return "The program will receive each transcript from the Original Set, one line at a time, until just before the Change Talk instance, and will be asked to generate a remark that the client would make at this point in the interview that would exemplify Change Talk. Performance will be evaluated by numerical expert rating for relevance to the underlying health behaviour. This experiment assesses a skill required for a Teaching chatbot, as it will play the role of the client.";
      } else if (this.selectedItem == "experiment3") {
        return "The program will receive each transcript from the Original Set, one line at a time, including the Change Talk instance, and will be asked to generate a response for the interviewer to make next. Performance will be evaluated using the MITI code. This experiment assesses a skill required for an Interviewer chatbot, namely responding appropriately and safely to support change talk.";
      } else if (this.selectedItem == "experiment4") {
        return "The program will receive each transcript from the Interviewer-Modified data set up to the interviewer response to the Change Talk instance, and will be asked to evaluate the quality of the interviewer response in terms of the spirit and techniques of Motivational Interviewing. Performance will be evaluated using the MITI for soundness and completeness.";
      }
    },
    handleExperimentContextTitle() {
      if (this.selectedItem == "experiment1") {
        return "EXPERIMENT 1: Detecting Change Talk";
      } else if (this.selectedItem == "experiment2") {
        return "EXPERIMENT 2: Generating Change Talk";
      } else if (this.selectedItem == "experiment3") {
        return "EXPERIMENT 3: Responding to Change Talk";
      } else if (this.selectedItem == "experiment4") {
        return "EXPERIMENT 4: Evaluating Change Talk";
      }
    },
  },
});
</script>
