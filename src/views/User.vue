    <template>
        <User/>
    </template>

    <script>
    import User from '@/components/User.vue'

    export default {
      name: 'user',
      components: {
        User
      }
    }
    </script>
    <style>
      .user {
        /* text-align: center; */
      }

      .stats {
          padding: 50px;
      }

      .stats-element {
        position: relative;
        /* height: 20px; */
        min-width: 250px;
        font-size: 22px;
        /* display: flex; */
        /* flex-direction: column; */
        border-top: 1px solid rgb(181, 181, 181);
        border-left: 1px solid rgb(181, 181, 181);
        border-right: 1px solid rgb(181, 181, 181);
        padding: 12px;
        display: flex;
        text-decoration: none;
        justify-content: space-between;
      }

      .stats-element:nth-of-type(even) {
        background: rgb(240, 240, 240);
      }

      .stats-element:last-of-type {
        border-bottom: 1px solid rgb(181, 181, 181);
      }

      .stats-element progress {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        -webkit-appearance: none;
        appearance: none;
        background-color: white;
        /* z-index: -1; */
      }

      .stats-element progress[value]::-webkit-progress-bar {
        /* background-color: #eee; */
        /* background-color: rgba(0, 0, 0, 0.1); */
        opacity: 0.5;

        border-radius: 2px;
        /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset; */
      }

      .stats-element progress[value]::-webkit-progress-value {
        opacity: 0.5;
        /* background-color: rgba(0, 0, 0, 0.1); */
      }
    </style>
