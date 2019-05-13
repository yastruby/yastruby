<template>
  <div id="app">
<!--    <div id="nav" class="shadow">-->
<!--      <router-link to="/">Гурток Яструби</router-link>-->
<!--    </div>-->
    <Nav></Nav>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
    import Nav from '@/components/Nav.vue';
    export default {
        name: 'App',
        components: {
            Nav
        }
    }
</script>

<style lang="scss">

  /*main: #42b983;*/
  /*$main-color: #42b983;*/

  /*$main-color: #ababab;*/
  $main-color: var(--mainColor, #42b983);
  //$default-color :
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  /*background: #42b983;*/
  /*border: 1px solid #ccc;*/
  background: $main-color;
  margin-bottom: 30px;
  padding: 30px;
  color: #0001028a;
  a {
    font-weight: bold;
    // color: #2c3e50;
    /*color: #0001028a;*/

    color: white;
    text-decoration: none;
    // &.router-link-exact-active {
    //   color: white;
    // }
  }
}

.content {
  display: flex;
  justify-content: center;
}

.general-stats {
  padding: 12px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
}

.general-stats__element {
  padding: 2px;
}

.rank {
  color: #C8C8C8;
}

.rank-single {
  color: #C8C8C8;
  transform: rotate(90deg);
}

.spinner {
  font-size: 50px;
  -webkit-animation: spin 1s infinite linear;
  animation: spin 1s infinite linear;
  /*color: #42b983;*/
  color: $main-color;
  margin-bottom: 30px;
}

.block {
  margin-top: 25px;
  margin-bottom: 25px;
}

.task-list {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.task-list li {
/*list-style: none;*/
}
  .shadow {
    /*-moz-box-shadow:    3px 3px 3px 3px #ccc;*/
    /*-webkit-box-shadow: 3px 3px 3px 3px #ccc;*/
    /*box-shadow:         2px 3px 1px 1px #ccc;*/
  }

progress[value] {
  -webkit-appearance: none;
  appearance: none;
  width: 200px;
  height: 20px;
}

progress[value]::-webkit-progress-bar {
  // background-color: #eee;
   background: #FFF;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

progress::-webkit-progress-value {  
  /*background: #42b983;*/
  background: $main-color;
} 

@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}

</style>
