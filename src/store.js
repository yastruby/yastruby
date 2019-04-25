import Vue from 'vue'
import Vuex from 'vuex'
import {getData} from './utils/googleApi';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    loading: true,
    totalTestsPassed: 0,
    tests: []
  },

  getters: {
    users (state) {
      return state.users;
    },

    getUserById: (state) => (userId) => {
      return state.users.filter((el) => {
        return el.id == parseInt(userId);
      });
    },

    isLoading (state) {
      return state.loading;
    },

    totalTestPassed (state) {
      return state.totalTestsPassed;
    },

    getTestByUserId: (state) => (userId) => {
      return state.tests.filter((el) => {
        return el.userId == parseInt(userId);
      })
    }
  },

  mutations: {
    turnOnLoading (state) {
      Vue.set(state, 'loading', true);
    },

    turnOffLoading (state) {
      console.log(state.loading)
      Vue.set(state, 'loading', false);
    },

    fetchUsers (state, payload) {
      Vue.set(state, 'users', payload);
    },

    countTotalTestsPassed (state, payload) {
      const res = state.users.reduce(function(acc, current) {
        return parseInt(acc) + parseInt(current.testPassed);
      }, 0);
      Vue.set(state, 'totalTestsPassed', res);
    },

    getUserData (state, payload) {
      Vue.set(state, 'tests', payload)
    }
  },

  actions: {
    turnOnLoading (context) {
      context.commit('turnOnLoading');
    },

    turnOffLoading (context) {
      context.commit('turnOffLoading');
    },

    countTotalTestsPassed (context) {
      context.commit('countTotalTestsPassed');
    },

    async fetchUsers ({commit, dispatch}) {
      const fieldsMap = {
        'id': 'id',
        'імя': 'name',
        'проба здано': 'testPassed',
        'присутність': 'presence',
        'вмілості': 'skills',
        'однострій': 'uniform',
        'загальна кількість': 'total',
        'вектор': 'vector',
        'діловодство': 'job',
        'завдання до сходин': 'tasks',
      };

      dispatch('turnOnLoading')
      const users = await getData();
      console.log(users)

      const mappedUsers = users.map(user => {
        const newUser = {};
        Object.keys(user).map(key => {
          newUser[fieldsMap[key]] = user[key];
        })
        return newUser;
      })

      mappedUsers.sort(function (a, b) {
        if (parseInt(a.total) > parseInt(b.total)) return -1;
        if (parseInt(a.total) < parseInt(b.total)) return 1;
        return 0;
      })

      dispatch('turnOffLoading')

      commit('fetchUsers', mappedUsers);

      dispatch('countTotalTestsPassed');
    }

  }
})
