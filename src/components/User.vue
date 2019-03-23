<template>
  <div class="user">
    <div class="stats">
        <h2>{{user.name}}</h2>
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