<template>
  <div
    class="thread-item"
    :class="{ 'active': isActive() }"
  >
    <div class="_21IQKhlBjN2jlHS_TVgI3l">

      <div class="_3Al0dWzW_V9csFknHMx8np"></div>

      <div class="_2NEuDuM091gp7iC_Z63VwW">

        <small class="_37XwjAqVHtjzqzEtybpHrU">
          <span class="CxY4XDSSItTeLVg0cKCN0 A0jheqYUBHNW93KykXKEH">user {{ threadDetail.uid }}</span>
          <span class="_2XYV9mzvNkG4Tz2j_Ve1SR">{{ time }}</span>
          <span class="_3suk2CCJTOqiFHplkp02fP">
            <i class="i-thumb-up"></i> {{ score }}
          </span>
        </small>

        <div class="_1PK847joWht0lAoHT_k7KE">
          <a
            class="_2A_7bGY9QAXcGu1neEYDJB"
            :href="threadURL"
          ></a>
          <div class="_14BnVEj9rQ5VQKmrIqn9Qj">
            <span class="_20jopXBFHNQ9FUbcGHLcHH">{{ threadDetail.title }}</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { formatTime } from './time'

import { ThreadDetail } from './threads'

export default Vue.extend({
  props: {
    threadDetail: {
      type: ThreadDetail
    }
  },
  computed: {
    score () {
      const threadDetail: ThreadDetail = this.threadDetail
      return threadDetail.like - threadDetail.dislike
    },
    threadURL () {
      const threadDetail: ThreadDetail = this.threadDetail
      return `#/thread/${threadDetail.tid}/`
    },
    time () {
      const { replies }: ThreadDetail = this.threadDetail
      const updateTime = replies[replies.length - 1].replyTime
      return formatTime(updateTime)
    }
  },
  methods: {
    isActive () {
      return window.location.hash === this.threadDetail
    }
  }
})
</script>
