<template>
  <div class="nav-left">

    <div class="_2k_IfadJWjcLJlSKkz_R2- _1LG9rEYF-ZGy3DZIlht7wo">

      <div class="eaWAxpidGy5I-mbexmmZy btn-color">
        <div :style="'background-image: url(/assets/images/logo.svg); height: 24px; width: 24px;'"></div>
      </div>

      <div class="text-container">
        <span>
          <slot></slot>
        </span>
      </div>
    </div>

    <div class="nav-btn-container btn-color">
      <span
        @click="refresh"
        title="F5"
        data-tip="F5"
        currentitem="false"
      >
        <i class="i-refresh"></i>
      </span>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    refresh () {
      window.location.reload()
    }
  }
})
</script>

<style>
  .nav-left {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
    border-right: 1px solid #e0e0e0;
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    max-width: 480px;
    min-width: 300px;
  }

  [data-app-dm] .nav-left {
    margin-top: 0;
    border-color: #3b3a39;
  }

  body:not([data-app-tv]):not([data-app-sm]) .nav-left {
    border: 0;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: none;
  }

  body[data-app-tv]:not([data-app-sm]) .nav-left {
    display: none;
  }

  ._1LG9rEYF-ZGy3DZIlht7wo {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding: 0;
  }

  ._1LG9rEYF-ZGy3DZIlht7wo > .text-container {
    height: 100%;
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: -1;
  }

  [data-app-of] ._1LG9rEYF-ZGy3DZIlht7wo > .text-container {
    color: #a6cbb7;
    font-size: 0.75rem;
    line-height: 1.8rem;
  }

  @media (max-width: 767px) {
    .nav-left {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      margin-top: 0;
      max-width: none;
      position: relative;
      width: 100%;
      border: 0;
    }

    .nav-left .nav-btn-container,
    [data-app-tv] .nav-left {
      display: none;
    }

    ._1LG9rEYF-ZGy3DZIlht7wo > .text-container {
      padding-left: 0;
      text-align: center;
    }
  }
</style>
