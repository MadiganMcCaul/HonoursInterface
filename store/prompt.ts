export const state = () => ({
  promptResults: [],
});

export const mutations = {
  add(state: any, promptResult: any) {
    state.promptResults.push(promptResult);
    console.log(state.promptResults);
    console.log(state.promptResults[0]);
    console.log(state.promptResults[0].promptResult.choices[0]);
  },
};
