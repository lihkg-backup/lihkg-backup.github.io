
import 'core-js/stable'
import 'whatwg-fetch'

import Vue from 'vue'

import App from './App.vue'

export const vm = new Vue({
  el: '#app',
  render (h) {
    return h(App, { ref: 'App' })
  }
})
