<template>
  <div style="width: 70%; margin: auto auto;">

    <div class="container">
      <div
        class="smileWrapper"
        style="width: 36px; height: 36px; margin-right:1.0rem;"
      >
        <div :style="'background-image: url(/assets/images/logo.svg); height: 36px; width: 36px;'"></div>
      </div>

      <span style="padding-right:20px">LIHKG❤️Github</span>
    </div>

    <panel-footer></panel-footer>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import PanelFooter from './footer.vue'

export default Vue.extend({
  components: {
    PanelFooter
  }
})
</script>

<style scoped>
  .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: center;
    justify-content: center;
  }

  .container > span {
    font-size: 1.5rem;
  }

  .smileWrapper {
    display: inline-block;
    position: relative;
  }
</style>
