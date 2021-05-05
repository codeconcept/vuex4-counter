export default {
  state: () => ({
    counterValue: 0,
    nbOfUpdates: 0,
  }),
  mutations: {
    increase(state, payload) {
      state.counterValue += payload;
      state.nbOfUpdates += 1;
    },
    decrease(state, payload) {
      state.counterValue -= payload;
      state.nbOfUpdates += 1;
    },
  },
  actions: {
    increase({ commit }, payload) {
      console.log('actions | increase | payload', payload);
      commit('increase', payload);
    },
    decrease({ commit }, payload) {
      commit('decrease', payload);
    },
  },
  getters: {
    getPresentation(state) {
      return `After ${state.nbOfUpdates} update${state.nbOfUpdates > 1 ? 's' : ''}, the current value of the counter is ${state.counterValue}`;
    },
  },
};
