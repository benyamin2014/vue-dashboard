<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Hashing</span>
      </div>
      <div>
        <el-form>
          <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.content" type="textarea" :rows="7" placeholder="请输入原字符串" />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="2">
              <el-select v-model="form.algorithm">
                <el-option
                  v-for="item in algorithms"
                  :key="item.key"
                  :label="item.key"
                  :value="item.key"
                />
              </el-select>               </el-col>
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
        charset: 'utf8',
        algorithm: 'MD5'
      },
      algorithms: [
        { key: 'MD5', value: 'MD5' },
        { key: 'SHA1', value: 'SHA1' },
        { key: 'SHA256', value: 'SHA256' },
        { key: 'SHA512', value: 'SHA512' },
        { key: 'SHA3', value: 'SHA3' }
      ]
    }
  },
  methods: {
    enc() {
      console.log('enc')
      const _this = this
      const content = _this.form.content
      const algorithm = _this.form.algorithm

      _this.form.result = enc.hash(content, algorithm)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

