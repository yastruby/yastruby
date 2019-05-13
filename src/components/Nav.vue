<template>
    <div id="nav" class="shadow">
        <router-link to="/">{{getTitle()}}</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        methods: {
            getTitle: function() {
                return this.$store.getters.title;
            },

        },
    }
</script>