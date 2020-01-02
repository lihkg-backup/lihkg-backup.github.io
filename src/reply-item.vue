<template>
  <div class="_36ZEkSvpdj_igmog0nluzh">
    <div
      :id="index"
      :data-post-id="replyDetail.pid"
      class="_2bokd4pLvU5_-Lc97NVqzn  _20q6NML4ErQq8usNV-npj5"
    >
      <div class="_1Hi94Pa6lplJ436NQaMbEt">

        <small class="_1VcuFUmnOEK51TsshmrnJM">
          <span class="_3SqN3KZ8m8vCsD9FNcxcki ">#{{ index }}</span>
          <span class="ZZtOrmcIRcvdpnW09DzFk">
            <a class="A0jheqYUBHNW93KykXKEH">user {{ replyDetail.uid }}</a>
          </span>
          <span class="UM_uefRXp7fgzd4Cl8y2A">•</span>
          <span
            :data-tip="time"
            :title="time"
            currentitem="false"
            class="Ahi80YgykKo22njTSCzs_"
          >{{ time }}</span>
        </small>

        <div class="GAagiRXJU88Nul1M7Ai0H">

          <!-- quotes -->
          <reply-quote
            :quoteDetail="replyDetail.quote"
            v-if="!!replyDetail.quote"
          ></reply-quote>

          <!-- msg -->
          <div
            data-ast-root="true"
            class="_2cNsJna0_hV8tdMj3X6_gJ"
            v-html="html"
          ></div>

        </div>

        <!-- like & dislike -->
        <div class="_3imUf8qB9LmLpk_t5PjDm4 ">

          <!-- like -->
          <div
            class="_1PNOfvkMOqN_SB5oqyF3ff _1jvTHwVJobs9nsM0JDYqKB"
            style="margin-right: 0px;"
          >
            <label>
              <i class="i-arrow-up-bold"></i>
            </label>
          </div>
          <label
            class="IaEsn1SdyIFGVnMWy02Or _1drI9FJC8tyquOpz5QRaqf"
            style="display: inline-block;"
          >{{ replyDetail.like }}</label>

          <!-- dislike -->
          <div class="_1PNOfvkMOqN_SB5oqyF3ff _2_VFV1QOZok8YhOTGa_3h9">
            <label>
              <i class="i-arrow-down-bold"></i>
            </label>
          </div>
          <label
            class="IaEsn1SdyIFGVnMWy02Or _1drI9FJC8tyquOpz5QRaqf "
            style="display: inline-block;"
          >{{ replyDetail.dislike }}</label>

        </div>

        <!-- rel -->
        <div class="_3imUf8qB9LmLpk_t5PjDm4">
          <div class="_1PNOfvkMOqN_SB5oqyF3ff undefined">
            <label>
              <i class="i-chat"></i>
            </label>
          </div>
          <label
            class="IaEsn1SdyIFGVnMWy02Or"
            style="padding-left: 0px;"
          >{{ replyDetail.citedBy }}</label>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { formatTime } from './time'
import { Reply } from './threads'

import ReplyQuote from './reply-quote.vue'

export default Vue.extend({
  components: {
    ReplyQuote
  },
  props: {
    replyDetail: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  },
  computed: {
    time () {
      const reply: Reply = this.replyDetail
      return formatTime(reply.replyTime)
    },
    html () {
      const reply: Reply = this.replyDetail
      return reply.msg
    }
  }
})
</script>
