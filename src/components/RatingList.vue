<template>
  <div>
      <div v-if="isLoading" class="spinner-wrapper">  
        <i class="fas fa-spinner spinner"></i>
      </div>
      <div class="block">
        <li v-for="(user, index) in getUsers()" :key="user.id">
            <router-link :to="{ name: 'user', params: { id: user.id }}" class="user-link">
                <div>
                  {{index + 1}}.{{user.name}}
                  <i v-if="parseInt(user.job.split('-')[1]) === 2" class="fas fa-grip-lines-vertical rank"></i>
                  <span v-if="parseInt(user.job.split('-')[1]) === 1" class="fas fa-minus rank-single"> </span>
                </div>
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
      <div>
        <h3>Проба гуртка: {{getTotalTestsPassed / 5}} / {{getUsers().length * 53}}</h3>
        <progress :max="getUsers().length * 53" :value="getTotalTestsPassed / 5"></progress>

      </div>
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
      },

      getTotalTestsPassed: function () {
        return this.$store.getters.totalTestPassed;
      }
  },
  
  mounted() {
    this.$store.dispatch('fetchUsers');
  }
}
</script>