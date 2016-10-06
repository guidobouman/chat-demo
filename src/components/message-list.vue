<template>
  <div class="message-list">
    <div class="message">
      <p class="name">Peter</p>
      <p class="content">
        Yo, die voetbalwedstrijd gisteren nog gezien? Wat een pot he! 😋
      </p>
    </div>
    <div class="message self">
      <p class="name">Erwin</p>
      <p class="content">
        Ugh, kan nog steeds niet geloven dat we hebben verloren. Wat ben jij toch een mazzelaar...
      </p>
    </div>
  </div>
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

<style scoped>
  .message-list {
    flex-grow: 1;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: black;
  }

  .message {
    overflow: hidden;
    padding: 10px;
    background: white;
  }

  .message + .message {
    margin-top: 5px;
  }

  .message p {
    margin: 0;
  }

  .message .name {
    font-weight: 700;
    margin-bottom: 0.2em;
    text-transform: uppercase;
  }
</style>
