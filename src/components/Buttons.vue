<template>
  <div class="controls">
    <button v-on:click="handlePlay">Play</button>
    <button v-on:click="handlePause">Stop</button>
    <button v-on:click="handleReset">Restart</button>
  </div>
</template>
<script>
  export default {
    name: 'buttons',
    props: ['handlePlay', 'handleReset', 'handlePause'],
  };
</script>
<style>
  button {
    display: block;
  }
</style>
