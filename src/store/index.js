import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
  },
  getters: {},
  actions: {
    getTodos({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          return axios.get("http://localhost:3000/todos").then((response) => {
            commit("storeTodos", response.data);
            resolve();
          });
        }, 800);
      });
    },
  },
  modules: {},
});
