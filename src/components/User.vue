<template>
  <div class="user">
    <div class="stats">
        <h2>
          {{user.name}}
          <i v-if="parseInt(user.job.split('-')[1]) === 2" class="fas fa-grip-lines-vertical rank"></i>
          <span v-if="parseInt(user.job.split('-')[1]) === 1" class="fas fa-minus rank-single"> </span>
        </h2>
         <div class="general-stats">
            <span v-if="user.job.split('-')[0]" class="general-stats__element">Діловодство: <strong>{{user.job.split('-')[0]}}</strong></span>
            <span class="general-stats__element">Рейтинг: <strong>{{user.total}}</strong></span>
            <span class="general-stats__element">Проба: <strong>{{user.testPassed / 5}}</strong>/<strong>53</strong></span>
         </div>


          <div class="stats-element">
             <span>Відвідування</span>
             <span>{{user.presence}}</span>
         </div>
         <div class="stats-element">
              <span>Проба</span>
              <span>{{user.testPassed}}</span>
              <!-- <progress :value="user.testPassed" max="54" data-label=""></progress> -->
         </div>
         <div class="stats-element">
             <span>Однострій</span>
             <span>{{user.uniform}}</span>
         </div>
        <div class="stats-element">
            <span>Вмілості</span>
            <span>{{user.skills}}</span>
        </div>
        <h3 class="block">Завдання до наступних сходин</h3>
         <ul class="task-list">
             <li v-for="task in getUserTasks">{{task}}</li>
         </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',

  computed: {
    user: function() {
      const userId = this.$route.params.id;
      const users = this.$store.getters.getUserById(userId);
      if (users.length > 0) {
        return users[0]
      }
      // return 'User not found'
    },

      getUserTasks: function() {
          const userId = this.$route.params.id;

          const users = this.$store.getters.getUserById(userId);
          if (users.length > 0) {
              return users[0].tasks.split(';');
          }
      }
  },

  methods: {
    isLoading: function() {
      console.log(this.$store.getters.isLoading)
      return this.$store.getters.isLoading;
    }
  },

  mounted() {
    this.$store.dispatch('fetchUsers');
  }
}
</script>