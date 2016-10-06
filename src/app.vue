<template>
  <div id="app">
    <message-list />
    <chat-bar />
  </div>
</template>

<script>
  import MessageList from './components/message-list';
  import ChatBar from './components/chat-bar';

  export default {
    components: {
      MessageList,
      ChatBar,
    },
  };
</script>

<style>
  @import 'https://fonts.googleapis.com/css?family=Cabin:400,400i,700,700i';

  html {
    height: 100%;
    font-family: 'Cabin', sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #ffccff;
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
    width: 100%;
    max-height: 800px;
    max-width: 600px;
    background: white;
    border: 5px solid black;
  }
</style>
