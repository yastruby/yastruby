<template>
  <div>
      <div v-if="isLoading" class="spinner-wrapper">  
        <i class="fas fa-spinner spinner"></i>
      </div>
      <li v-for="(user, index) in getUsers()" :key="user.id">
          <router-link :to="{ name: 'user', params: { id: user.id }}" class="user-link">
              <div>{{index + 1}}.{{user.name}}</div>
              <div class="total">
                  <div>{{user.total}}</div>
                  <div>
                      <i v-if="user.vector == 1" class="fas fa-caret-up green"></i>
                      <i v-else-if="user.vector == -1" class="fas fa-caret-down red"></i>
                  </div>
              </div>
          </router-link>
      </li>
  </div>
</template>

<script>
import getData from '../utils/googleApi';
export default {
  name: 'RatingList',

  methods: {
     getUsers: function() {
       return this.$store.getters.users;
    },
  },

  computed: {
      isLoading() {
        return this.$store.getters.isLoading;
      }
  },
  
  mounted() {
    this.$store.dispatch('fetchUsers');
  }
}
</script>