<template>
  <div class="input-cron">
    <Input :placeholder="placeholder" style="width: auto" v-model="editCronValue" :disabled="disabled">
      <a slot="append" @click="showConfigDlg" class="config-btn" :disabled="disabled">
        <Icon type="ios-calendar-outline" style="margin-right: 5px;"></Icon>配置
      </a>
    </Input>
    <Modal v-model="show" title="配置Cron表达式" :closable="true" :width="`${width+50}`"
      :footer-hide="true">
        <div>
          <easy-cron v-model="editCronValue" :style="`width: ${width}px`"></easy-cron>
        </div>
    </Modal>
  </div>
</template>

<script>
import EasyCron from './index'

export default {
  name: 'input-cron',
  model: {
    prop: 'cronValue',
    event: 'change'
  },
  props: {
    cronValue: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 700
    },
    placeholder: {
      type: String,
      default: '请输入cron表达式'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editCronValue: this.cronValue,
      show: false
    }
  },
  watch: {
    cronValue (newVal, oldVal) {
      if (newVal === this.editCronValue) {
        return
      }
      this.editCronValue = newVal
    },
    editCronValue (newVal, oldVal) {
      this.$emit('change', newVal)
    }
  },
  methods: {
    showConfigDlg () {
      if (!this.disabled) {
        this.show = true
      }
    }
  },
  components: {
    EasyCron
  }
}
</script>

<style scoped>
.input-cron, .input-ui {
}

.input-cron .ivu-input-wrapper {
  width: 100% !important;
}

.config-btn {
  cursor: pointer;
}

.config-btn:hover {
  color: #2D8CF0;
}
</style>
