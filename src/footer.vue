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
    Copyright © {{ year }} LIHKG❤️Github. All Rights Reserved.
  </small>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
})
</script>
