<template>
  <div id="app">

    <top-nav :threadDetail="thread"></top-nav>

    <div
      id="splitView"
      class="_2JnkV7flhQCKN2EsmonRcN"
    >

      <left-panel></left-panel>

      <div class="eslltWt3HgKnG_miBwvfx">
        <right-panel
          v-if="!!thread"
          :threadDetail="thread"
          ref="rightPanel"
        ></right-panel>
        <right-panel-blank v-else></right-panel-blank>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TopNav from './nav.vue'
import LeftPanel from './left-panel.vue'
import RightPanel from './right-panel.vue'
import RightPanelBlank from './right-panel-blank.vue'

import { getThread } from './threads'

const tidReg = /^#\/thread\/(\d+)/

export default Vue.extend({
  components: {
    TopNav,
    LeftPanel,
    RightPanel,
    RightPanelBlank
  },
  data () {
    return {
      thread: null
    }
  },
  methods: {
    async router () {
      const hash = window.location.hash

      const m = hash.match(tidReg)
      if (m) {
        const tid = +m[1]

        const fHash = `#/thread/${tid}/`
        if (hash !== fHash) {
          window.location.hash = fHash
          return
        }

        const thread = await getThread(tid)
        this.thread = thread

        document.title = `${thread.title} | LIHKG❤️Github`

        const rightPanel = this.$refs.rightPanel
        rightPanel.scrollTop = 0
      } else {
        this.thread = null
        if (hash !== '#/') {
          window.location.hash = '#/'
        }
      }
    }
  },
  mounted () {
    window.onhashchange = () => {
      this.router()
    }

    this.router()
  }
})
</script>

<style>
  @import "https://fonts.googleapis.com/css?family=Ubuntu+Mono";

  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  ::selection {
    background: #fbc308;
    color: #000;
  }

  ::-moz-selection {
    background: #fbc308;
    color: #000;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    background: 0 0;
    border: 0;
    color: inherit;
    outline: 0;
    padding: 0;
  }

  body {
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #000;
    font-family: Helvetica Neue, Helvetica, Arial, Microsoft JhengHei, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body[data-app-mb][data-app-tv]:not([data-app-dm]) {
    background: #f6f6f6;
  }

  body[data-app-dm] {
    background: #151515;
    color: #fff;
  }

  body:not([data-app-sm]),
  body[data-app-cx] {
    background: #e5e5e5;
  }

  body[data-app-dm]:not([data-app-sm]),
  body[data-app-dm][data-app-cx] {
    background: #000;
  }

  body:not([data-app-sm]) #app {
    max-width: 1136px;
  }

  body:not([data-app-sm]) #app,
  body[data-app-cx] #app {
    background: #f6f6f6;
    height: 100vh;
    margin: 0 auto;
    overflow-x: hidden;
    position: relative;
  }

  body[data-app-cx] #app {
    max-width: 1280px;
  }

  body:not([data-app-sm]):not([data-app-of]) #app {
    -webkit-box-shadow: 0 0 0 1px rgba(128, 128, 128, 0.15);
    box-shadow: 0 0 0 1px rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 1135px) {
    body:not([data-app-sm]):not([data-app-of]) #app {
      border: 0;
    }
  }

  body[data-app-of] #app {
    max-width: 100% !important;
  }

  body[data-app-dm] #app {
    background: #151515;
  }

  body:not([data-app-mb]) #app {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100vh;
  }

  body:not([data-app-mb]) ::-webkit-scrollbar {
    width: 0.8rem;
  }

  body:not([data-app-mb]) ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: rgba(128, 128, 128, 0.4);
    border: 2px solid transparent;
    border-radius: 0.8rem;
    -webkit-box-shadow: inset -1px -1px 0 rgba(0, 0, 0, 0.05),
      inset 1px 1px 0 rgba(0, 0, 0, 0.05);
    box-shadow: inset -1px -1px 0 rgba(0, 0, 0, 0.05),
      inset 1px 1px 0 rgba(0, 0, 0, 0.05);
  }

  body:not([data-app-mb]) ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(128, 128, 128, 0.8);
  }

  @media (max-width: 767px) {
    blockquote {
      font-size: 0.95rem;
    }

    body:not([data-app-sm]) #app {
      height: 100%;
    }

    body {
      padding-top: 48px;
    }
  }

  [data-emoji-container] {
    cursor: text;
    display: inline-block;
  }

  [data-ic="emoji"] {
    height: 1.2em;
    pointer-events: none;
    vertical-align: text-bottom;
    width: 1.2em;
  }

  .hideEl {
    display: none;
  }

  .btn-color {
    color: #000;
  }

  [data-app-dm] .btn-color,
  [data-app-of] .btn-color {
    color: #fff;
  }

  @media (max-width: 767px) {
    [data-app-dm] .btn-color {
      color: #fbc308;
    }
  }

  .btn-color:hover {
    text-decoration: none;
  }
</style>
