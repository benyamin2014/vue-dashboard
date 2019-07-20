<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Base64编码/解码</span>
      </div>
      <div>
        <el-form>
          <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.content" type="textarea" :rows="7" placeholder="请输入编码或解码数据" />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :round="true" @click="enc">编码</el-button>
            <el-button type="primary" :round="true" @click="dec">解码</el-button>
            <el-button type="primary" :round="true" @click="exchange">交换</el-button>
            <el-button type="primary" :round="true" @click="clear">清空</el-button>
          </el-form-item>
          <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.result" type="textarea" :rows="7" placeholder="请输入编码或解码数据" />
            </el-col>
          </el-form-item>
        </el-form>
      </div>

    </el-card>
  </div>
</template>

<script>
const Base64 = require('js-base64').Base64

export default {
  data() {
    return {
      form: {
        content: '',
        result: '',
        charset: 'utf8'
      }
    }
  },
  methods: {
    enc() {
      console.log('enc')
      const _this = this
      const content = _this.form.content
      const charset = _this.form.charset

      _this.form.result = Base64.encode(content)
    },
    dec() {
      console.log('dec')
      const _this = this
      const content = _this.form.content
      const charset = _this.form.charset

      _this.form.result = Base64.decode(content)
    },
    exchange() {
      console.log('exchange')
      const _this = this
      const content = _this.form.content

      _this.form.content = _this.form.result
      _this.form.result = content
    },
    clear() {
      const _this = this
      _this.form.content = ''
      _this.form.result = ''
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

