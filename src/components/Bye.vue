<template>
  <div>
    <buttons :handlePlay="handlePlay"  :handlePause="handlePause" :handleReset="handleReset"/>
    <timer :minutes="minutes" :seconds="seconds"/>
    {{ msg }}
  </div>
</template>
<script>
  import buttons from './Buttons';
  import timer from './timer';

  let interval = null;
  let left = 0;

  function toString(value) {
    const str = `00${value}`;
    return str.substr(str.length - 2, str.length);
  }

  export default {
    name: 'hello',
    components: {
      buttons,
      timer,
    },
    data() {
      return {
        msg: 'otro torooooo',
        minutes: '00',
        seconds: '00',
      };
    },
    methods: {
      handlePause: function handlePause() {
        this.clear();
      },
      handleReset: function handleReset() {
        this.reset();
      },
      handlePlay: function initCount() {
        this.clear();
        const counter = Date.now() +
          (left || ((this.minutes * 60 * 1000) + (this.seconds * 1000)));
        interval = setInterval(function counterFn() {
          left = counter - Date.now();
          if (left <= 0) return this.end();
          if (left <= 5000) this.toggleClass();
          this.minutes = toString(Math.floor(left / (60 * 1000)));
          this.seconds = toString(Math.floor((left % (60 * 1000)) / 1000));
          return null;
        }, 100);
      },
      clear: function clear() {
        clearInterval(interval);
        // timer.classList.remove('finish');
      },
      reset: function reset() {
        left = 0;
        this.minutes = '00';
        this.seconds = '00';
        return this.clear();
      },

      end: function end() {
        this.reset();
        // var animal = ['cow', 'rooster'][Math.floor(2*Math.random())];
        // var alarm = document.querySelector(`#alarm_${animal}`);
        // timer.classList.add("hidden");
        // alarmImg.className = `alarm finish ${animal}`;
        // alarm.play();
        // setTimeout(function () {
        //   timer.classList.remove("hidden");
        //   alarmImg.classList.remove("finish");
        // }, 2000);
      },

      toogleClass: function toggleClass() {
        // timer.classList.toggle("finish");
      },
    },
  };
</script>
<style>
  button {
    display: block;
  }
</style>
