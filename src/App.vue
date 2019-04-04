<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Гурток Яструби</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
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
  background: #42b983;
  margin-bottom: 30px;
  padding: 30px;
  a {
    font-weight: bold;
    // color: #2c3e50;
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
  color: #42b983;
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
  background: #42b983;
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
