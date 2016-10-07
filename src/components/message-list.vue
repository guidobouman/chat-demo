<template>
  <div class="message-list">
    <div class="message" v-for="message in messageList">
      <p class="name">{{ message.name }}</p>
      <p class="content">
        {{ message.content }}
      </p>
    </div>
  </div>
</template>

<script>
  import MessageListRef from '../message-list-ref';

  export default {
    firebase: {
      messageList: MessageListRef,
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
