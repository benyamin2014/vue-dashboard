<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>hmac</span>
      </div>
      <div>
        <el-form>
          <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.content" type="textarea" :rows="7" placeholder="请输入原字符串" />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="3">
              <el-select v-model="form.algorithm">
                <el-option
                  v-for="item in algorithms"
                  :key="item.key"
                  :label="item.key"
                  :value="item.key"
                />
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-input v-model="form.password" type="text" :rows="7" placeholder="密钥" />
              </el-select>
            </el-col>
            <el-button type="primary" :round="true" @click="enc">计算</el-button>
          </el-form-item>
          <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.result" type="textarea" :rows="7" placeholder="签名数据" />
            </el-col>
          </el-form-item>
        </el-form>
      </div>

    </el-card>
  </div>
</template>

<script>
// import md5 from 'js-md5'
import enc from '@/utils/enc.js'

export default {
  data() {
    return {
      form: {
        content: '',
        result: '',
        password: '',
        algorithm: 'HmacMD5'
      },
      algorithms: [
        { key: 'HmacMD5', value: 'HmacMD5' },
        { key: 'HmacSHA1', value: 'HmacSHA1' },
        { key: 'HmacSHA256', value: 'HmacSHA256' },
        { key: 'HmacSHA512', value: 'HmacSHA512' }
      ]
    }
  },
  methods: {
    enc() {
      console.log('')
      const _this = this
      const content = _this.form.content
      const algorithm = _this.form.algorithm
      const password = _this.form.password

      _this.form.result = enc.hmac(content, password, algorithm)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

