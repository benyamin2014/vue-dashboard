<template>
  <div class="dashboard-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>免责声明</span>
      </div>
      <div>
        本站申明:本网站部分工具是站长整合网上已有工具、开源包等，并全部遵循原有协议发布，著作权归属原作者或是团队。
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
