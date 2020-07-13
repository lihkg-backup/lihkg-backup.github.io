<template>
  <div class="nav-right">

    <div class="_2k_IfadJWjcLJlSKkz_R2-">
      <a
        href="#/"
        class="Po8iCa0b9ZUovZ9Ofa_Gk btn-color"
      >
        <i class="i-arrow-left"></i>
      </a>

      <span>
        <slot></slot>
      </span>
    </div>

    <div class="nav-btn-container btn-color">
      <span
        @click="link"
        data-tip="原始連結"
        title="原始連結"
        currentitem="false"
      >
        <i class="i-link"></i>
      </span>

      <span
        @click="jsonCode"
        data-tip="JSON Data"
        title="JSON Data"
        currentitem="false"
      >
        <i class="i-code-braces"></i>
      </span>

      <span
        class="_8_NT40G-QNQzcSSTrRXAD"
        style="color: inherit; padding-top: 0px;"
        data-tip="正評"
        title="正評"
        :data-score="like"
        currentitem="false"
      >
        <i class="i-thumb-up"></i>
      </span>

      <span
        class="_8_NT40G-QNQzcSSTrRXAD"
        style="color: inherit; padding-top: 0px;"
        data-tip="負評"
        title="負評"
        :data-score="dislike"
        currentitem="false"
      >
        <i class="i-thumb-down"></i>
      </span>

      <span
        style="color: inherit;"
        data-tip="熱門回覆"
        title="排序"
        currentitem="false"
      >
        <i class="i-hot-reply"></i>
      </span>

      <span
        @click="share"
        data-tip="分享"
        title="分享"
        currentitem="false"
      >
        <i class="i-share-variant"></i>
      </span>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SITE_NAME, REPO_OWNER, REPO_NAME } from './config'

export default Vue.extend({
  props: {
    tid: {
      type: Number,
      default: 0
    },
    like: {
      type: Number,
      default: 0
    },
    dislike: {
      type: Number,
      default: 0
    }
  },
  methods: {
    link () {
      window.open(`https://lih.kg/${this.tid}`)
    },
    share () {
      const title = this.$slots.default[0].text
      const shareText = `${title}\n- 分享自 ${SITE_NAME}\n${window.location.href}`
      window.open(`tg://msg_url?text=${encodeURIComponent(shareText)}`)
    },
    jsonCode () {
      const lastDigit = this.tid % 10
      window.open(`https://github.com/${REPO_OWNER}/${REPO_NAME}/blob/${lastDigit}/${this.tid}.json`)
    }
  }
})
</script>

<style>
  .nav-right {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
  }

  [data-app-dm] .nav-right {
    margin-top: 0;
  }

  .nav-right {
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;
  }

  .nav-right span {
    position: relative;
  }

  .nav-right span select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    bottom: 0;
    cursor: pointer;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  body:not([data-app-tv]):not([data-app-sm]) .nav-right {
    display: none;
  }

  @media (max-width: 767px) {
    .nav-right {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      margin-top: 0;
      max-width: none;
      position: relative;
      width: 100%;
    }
  }
</style>
