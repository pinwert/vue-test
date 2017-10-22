import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
// import MyButtons from '../src/components/Buttons.vue';

// Install Vue plugins.
Vue.use(Vuex);

// Register custom components.
// Vue.component('my-buttons', MyButtons);

function loadStories() {
// You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);
