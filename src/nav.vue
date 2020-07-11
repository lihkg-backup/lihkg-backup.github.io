<template>
  <nav class="top-nav">
    <nav-left>{{ category }}</nav-left>
    <nav-right
      :tid="tid"
      :like="like"
      :dislike="dislike"
      v-show="!!threadDetail"
    >{{ threadTitle }}</nav-right>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

import NavLeft from './nav-left.vue'
import NavRight from './nav-right.vue'

import { ThreadDetail } from './threads'

export default Vue.extend({
  components: {
    NavLeft,
    NavRight
  },
  props: {
    threadDetail: {
      type: ThreadDetail,
      default: null
    },
    category: {
      type: String,
      default: '吹水台'
    }
  },
  computed: {
    tid (): number {
      const thread: ThreadDetail = this.threadDetail
      if (!thread) {
        return 0
      } else {
        return thread.tid
      }
    },
    threadTitle (): string {
      const thread: ThreadDetail = this.threadDetail
      if (!thread) {
        return ''
      } else {
        return thread.title
      }
    },
    like (): number {
      const thread: ThreadDetail = this.threadDetail
      if (!thread) {
        return 0
      } else {
        return thread.like
      }
    },
    dislike (): number {
      const thread: ThreadDetail = this.threadDetail
      if (!thread) {
        return 0
      } else {
        return thread.dislike
      }
    }
  }
})
</script>

<style>
  .top-nav {
    background: #fff;
    border-bottom: 0.5px solid #d9d9d9;
    color: #222;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 1.1rem;
    height: 3rem;
    line-height: 3rem;
    position: relative;
    width: 100%;
    z-index: 4;
  }

  [data-app-dm] .top-nav {
    background: #222;
    border-bottom: 0.5px solid #3b3a39;
    color: #fbc308;
  }

  [data-app-dm][data-app-mb] .top-nav {
    color: #fff;
  }

  @media (max-width: 767px) {
    .top-nav {
      left: 0;
      position: fixed;
      top: 0;
      -webkit-transition: -webkit-transform 0.3s ease;
      transition: -webkit-transform 0.3s ease;
      -o-transition: transform 0.3s ease;
      transition: transform 0.3s ease;
      transition: transform 0.3s ease, -webkit-transform 0.3s ease;
      width: 100%;
      will-change: transform;
    }
  }

  .nav-btn-container > span {
    font-size: 1.2rem;
    overflow: hidden;
    padding: 0 0.7rem;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nav-btn-container > span i {
    font-size: 1.2rem;
  }

  .nav-btn-container,
  .nav-btn-container > span {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 2;
  }

  .nav-btn-container > span:last-child {
    padding-right: 0.7rem;
  }

  .nav-btn-container > span {
    cursor: pointer;
    -webkit-transition: "background" 0.1s ease-in-out;
    -o-transition: "background" 0.1s ease-in-out;
    transition: "background" 0.1s ease-in-out;
    will-change: "background";
  }

  .nav-btn-container > span:hover {
    background: rgba(128, 128, 128, 0.25);
  }
</style>
