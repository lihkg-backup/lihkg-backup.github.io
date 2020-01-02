<template>
  <div
    id="rightPanel"
    class="right-panel"
  >

    <div class="_4SkbmyWbShmINbRPY-Jps">
      <div class="_3jxQCFWg9LDtkSkIVLzQ8L">
        <template v-for="(item, index) of replies">
          <reply-item
            :replyDetail="item"
            :index="index"
            :key="index"
          ></reply-item>
        </template>
      </div>
    </div>

    <span style="font-size: 0px;"></span>

    <panel-footer></panel-footer>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { ThreadDetail } from './threads'

import ReplyItem from './reply-item.vue'
import PanelFooter from './footer.vue'

export default Vue.extend({
  components: {
    ReplyItem,
    PanelFooter
  },
  props: {
    threadDetail: {
      type: ThreadDetail,
      required: true
    }
  },
  computed: {
    replies () {
      const threadDetail: ThreadDetail = this.threadDetail
      return threadDetail.replies
    }
  }
})
</script>
