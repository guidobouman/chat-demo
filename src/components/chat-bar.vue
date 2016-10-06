<template>
  <form class="input-bar">
    <input type="text">
    <button>Stuur</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello Vue!',
      };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-bar {
    flex: none;
    display: flex;
    background: black;
    padding-top: 5px;
  }

  .input-bar input,
  .input-bar button {
    background: white;
    border: 0;
    -webkit-appearance: none;
    font: inherit;
    height: 60px;
    line-height: 40px;
    padding: 0 20px;
  }

  .input-bar input:hover,
  .input-bar input:focus,
  .input-bar input:active,
  .input-bar button:hover,
  .input-bar button:focus,
  .input-bar button:active {
    background: rgb(255, 255, 207);
  }

  .input-bar input {
    flex-grow: 1;
    margin-right: 5px;
  }

  .input-bar button {
    background: #99cccc;
    font-weight: 700;
    cursor: pointer;
  }
</style>
