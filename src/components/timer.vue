<template>
  <div class="timer">
    <span class="minutes">
      <span v-on:click="handleMinutes">{{min}}</span>
      <input id="minutes" class="hidden" v-model="min"></input>
    </span>
    :
    <span class="seconds">
      <input id="seconds" class="hidden" v-model="sec"></input>
      <span v-on:click="handleSeconds">{{sec}}</span>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'timer',
    props: ['minutes', 'seconds'],
    data() {
      return {
        min: this.minutes,
        sec: this.seconds,
      };
    },
    methods: {
      handleMinutes() {
        document.querySelector('#minutes').focus();
      },
      handleSeconds() {
        document.querySelector('#seconds').focus();
      },
    },
  };
</script>
<style>
  .timer {
    width: 97vw;
    text-align: center;
    font-size: 15em;
    background: lime;
    margin-top: 0.5em;
    height: 1.2em;
    border: solid darkgreen 0.02em;
    border-radius: 0.4em;
  }
  .timer.finish {
    background: red;
  }
  .hidden {
    position: absolute;
    width: 0px;
    height: 0px;
    opacity: 0;
    }
  span {
    position: relative;
    display: block;
  }
</style>
