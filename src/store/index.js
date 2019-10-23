import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },

  getters: {
    isAuthenticated: state => {
      if(state.token) {
        return !!state.token;
      }
      return !!localStorage.getItem("token")
    },
    getToken: state => {
      if(state.token) {
        return state.token;
      }
      return localStorage.getItem("token")
    },
    getUser: state => {
      if(state.user) {
        return state.user;
      }
      let user = localStorage.getItem("user");
      return JSON.parse(user);
    },
    isLoggedIn(state) {
      return state.user !== null;
  }

  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setAuthUser(state, user) {
      state.user = user;
  }
  },

  actions: {
    setToken(context, token) {
      context.commit("setToken", token);
    },
    setUser(context, user) {
      context.commit("setUser", user);
    },
  }
});
