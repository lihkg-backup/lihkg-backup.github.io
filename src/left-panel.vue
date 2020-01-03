<template>
  <div
    class="left-panel"
    ref="leftPanel"
    id="leftPanel"
    @scroll="onScroll"
  >
    <div class="thread-list">
      <item
        v-for="thread of threads"
        :key="thread.tid"
        :threadDetail="thread"
      ></item>

      <div ref="loadingItems">
        <item-loading
          v-for="i in 3"
          :key="i"
        ></item-loading>
      </div>

      <span style="font-size: 0px;"></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { listThreads, ThreadDetail } from './threads'

import Item from './thread-list-item.vue'
import ItemLoading from './thread-list-item-loading.vue'

const list = listThreads()

export default Vue.extend({
  components: {
    Item,
    ItemLoading
  },
  data () {
    return {
      threadsMap: new Map<number, ThreadDetail>(),
      threads: [],
      lock: false
    }
  },
  methods: {
    async updateThreads () {
      const threadsMap: Map<number, ThreadDetail> = this.threadsMap

      const { value: threadDetails } = await list.next()
      threadDetails.forEach((t) => {
        threadsMap.set(t.tid, t)
      })

      const threads: ThreadDetail[] = [...threadsMap.values()]
      this.threads = threads
    },
    isVisible (el: HTMLElement): boolean {
      const { top } = el.getBoundingClientRect()
      return top < window.innerHeight
    },
    async onScroll () {
      if (this.lock) {
        return
      }

      const el: HTMLDivElement = this.$refs.loadingItems
      if (this.isVisible(el)) {
        this.lock = true
        await this.updateThreads()
        this.lock = false
      }
    }
  },
  mounted () {
    this.updateThreads()
    window.addEventListener('scroll', () => {
      if (typeof document.body.dataset.appMb !== 'undefined') {
        this.onScroll()
      }
    })
  }
})
</script>
