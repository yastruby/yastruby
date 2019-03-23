<template>
  <div class="">
    <RatingList class="rating"/>
  </div>
</template>

<script>
import RatingList from '@/components/RatingList.vue'

export default {
  name: 'rating',
  components: {
    RatingList
  }
}
</script>
<style>
  .rating {
    display: flex;
    justify-content: start;
    flex-direction: column;
    list-style: none;
  }

  .rating li {
    min-width: 250px;
    font-size: 22px;
    /* color: rgba(110, 110, 110, 0.9); */
    border-top: 1px solid rgb(181, 181, 181);
    border-left: 1px solid rgb(181, 181, 181);
    border-right: 1px solid rgb(181, 181, 181);

    /* margin-bottom: 3px; */
    /* justify-content: end */
    display: flex;
    flex-direction: row;  
    justify-content: space-between; 
  }

  .rating li:nth-of-type(even) {
    background: rgb(240, 240, 240);
  }

  .rating li:last-of-type {
    border-bottom: 1px solid rgb(181, 181, 181);
  }

  .rating .total {
    display: flex;
    justify-content: space-around;
    min-width: 50px;
  }

  .red {
    color: red; 
  }

  .green {
      color: #42b983;
  }

  .user-link {
    width: 100%;
    height: 100%;
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    padding: 12px;
  }

  .user-link:link, :visited {
    color: #2c3e50;

  }
</style>