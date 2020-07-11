<template>
  <small class="_2DLdp-7b_R-zIetW0YAyy_">
    <span class="J534MEK4xEQSBHgGW-m0q">
      <a
        href="https://github.com/lihkg-backup/"
        target="_blank"
        rel="noopener noreferrer"
      >Github Repository</a>
    </span>
    <br>
    Copyright © {{ year }} {{ siteName }}. All Rights Reserved.
  </small>
</template>

<script lang="ts">
import Vue from 'vue'
import { SITE_NAME } from './config'

export default Vue.extend({
  data () {
    return {
      siteName: SITE_NAME
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
})
</script>
