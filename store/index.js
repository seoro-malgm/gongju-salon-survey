export const state = () => ({
  // counter: 0,
  user: null,
});

export const getters = {
  // getCounter(state) {
  //   return state.counter
  // },
  getUser(state) {
    return state.user;
  },
};

export const mutations = {
  // increment(state) {
  //   state.counter++
  // },
  // store.commit('auth/setState', ['key', value]);
  setState(state, [key, value]) {
    state[key] = value;
  },
};

export const actions = {
  // async fetchCounter({ state }) {
  //   return res.data
  // },
  setState({ commit }, [key, value]) {
    commit("setState", [key, value]);
  },
};
