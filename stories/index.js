import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';

import MyButtons from '../src/components/Buttons.vue';

Vue.component('my-buttons', MyButtons);

storiesOf('MyButtons', module)
  .add('story as a component', () => ({
    components: { MyButtons },
    methods: {
      handlePlay: action('click play'),
      handlePause: action('click pause'),
      handleReset: action('click reset')
    },
    render () {
      return <MyButtons
      handlePlay={this.handlePlay}
      handleReset={this.handleReset}
      handlePause={this.handlePause}/>
    }
  }));
