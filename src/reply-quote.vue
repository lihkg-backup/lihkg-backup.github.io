<template>
  <blockquote class="_31B9lsqlMMdzv-FSYUkXeV">
    <div class="_3pnUeDm8-bRxLH84eNhuV_ _1NFaREhSpXY6nG0I0yp7ih"></div>

    <!-- sub quote -->
    <reply-quote
      :quoteDetail="quoteDetail.quote"
      v-if="!!quoteDetail.quote"
    ></reply-quote>

    <!-- quote msg -->
    <div
      data-ast-root="true"
      v-html="html"
    ></div>

  </blockquote>
</template>

<script lang="ts">
import Vue from 'vue'
import { Reply } from './threads'

import ReplyQuote from './reply-quote.vue'

export default Vue.extend({
  name: 'ReplyQuote',
  components: {
    ReplyQuote
  },
  props: {
    quoteDetail: {
      type: Object, // Reply
      required: true
    },
    index: {
      type: Number
    }
  },
  computed: {
    html () {
      const quote: Reply = this.quoteDetail
      return quote.msg
    }
  }
})
</script>
