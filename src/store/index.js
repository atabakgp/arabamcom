import Vue from "vue";
import Vuex from "vuex";
import { listing, details } from "../axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataList: [],
    details: {},
    sortingDetails: {},
    loading: false,
    currentPage: 1,
  },
  mutations: {
    setList(state, data) {
      state.dataList = data;
    },
    details(state, data) {
      state.details = data;
    },
    showLoading(state, payload) {
      state.loading = payload;
    },
    sortingDetails(state, params) {
      state.sortingDetails = { ...state.sortingDetails, ...params };
      state.currentPage = state.sortingDetails.skip
        ? state.sortingDetails.skip / state.sortingDetails.take + 1
        : 1;
    },
  },
  actions: {
    filterList({ state, commit }) {
      commit("showLoading", true);

      listing(state.sortingDetails)
        .then((res) => {
          let data = res.data;

          commit("setList", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getDetails({ commit }, params) {
      commit("showLoading", true);

      details(params)
        .then((res) => {
          commit("details", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    dataList: (state) => {
      return state.dataList;
    },

    loading: (state) => {
      return state.loading;
    },

    details: (state) => {
      return state.details;
    },

    currentPage: (state) => {
      return state.currentPage;
    },

    sortingDetails: (state) => {
      return state.sortingDetails;
    },
  },
});
