<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>对称加/解密</span>
      </div>
      <div>
        <el-form>
          <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.content" type="textarea" :rows="7" placeholder="请输入编码或解码数据" />
            </el-col>
          </el-form-item>
          <el-form-item>

            <el-col :span="2">
              <el-select v-model="form.algorithm">
                <el-option label="AES" value="AES" />
                <el-option label="DES" value="DES" />
                <el-option label="3DES" value="3DES" />
              </el-select>
            </el-col>
            <el-col :span="2">
              <el-select v-model="form.mode">
                <el-option
                  v-for="item in modes"
                  :key="item.key"
                  :label="item.key"
                  :value="item.key"
                />
              </el-select>
            </el-col>
            <el-col :span="2">
              <el-select v-model="form.padding">
                <el-option
                  v-for="item in paddings"
                  :key="item.key"
                  :label="item.key"
                  :value="item.key"
                />
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="4">
              <el-input v-model="form.password" type="text" :rows="7" placeholder="密钥" />
            </el-col>
            <el-col v-if="form.mode!='ECB'" :span="4">
              <el-input v-model="form.iv" type="text" :rows="7" placeholder="IV向量" />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :round="true" @click="enc">加密</el-button>
            <el-button type="primary" :round="true" @click="dec">解密</el-button>
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
import enc from '@/utils/enc.js'

export default {
  name: 'Symmetry',
  data() {
    return {
      form: {
        content: '',
        result: '',
        password: '',
        iv: '',
        algorithm: 'AES',
        mode: 'ECB',
        padding: 'Pkcs7'
      },
      modes: [
        { key: 'CBC', value: 'CBC' },
        { key: 'ECB', value: 'ECB' },
        { key: 'CTR', value: 'CTR' },
        { key: 'OCF', value: 'OCF' },
        { key: 'CFB', value: 'CFB' }
      ],
      paddings: [
        { key: 'Pkcs7', value: 'Pkcs7' },
        { key: 'Iso97971', value: 'Iso97971' },
        { key: 'AnsiX923', value: 'AnsiX923' },
        { key: 'Iso10126', value: 'Iso10126' },
        { key: 'ZeroPadding', value: 'ZeroPadding' },
        { key: 'NoPadding', value: 'NoPadding' }
      ]
    }
  },
  methods: {
    getMode(key) {
      for (var i in this.modes) {
        const item = this.modes[i]
        if (key === item.key) {
          console.log(item.value)
          return item.value
        }
      }
    },
    getPadding(key) {
      console.log('p-key:' + key)
      for (const i in this.paddings) {
        const item = this.paddings[i]
        if (key === item.key) {
          return item.value
        }
      }
    },
    enc() {
      console.log('enc')
      const _this = this
      const content = _this.form.content
      const algorithm = _this.form.algorithm
      const key = _this.form.password
      const iv = _this.form.iv
      const mode = _this.form.mode
      const padding = _this.form.padding
      var cfg = { 'algorithm': algorithm, 'mode': mode, 'padding': padding }
      if (iv) {
        cfg.iv = iv
      }
      console.log(cfg)
      _this.form.result = enc.encrypt(content, key, cfg)
    },
    dec() {
      console.log('dec')
      const _this = this
      const content = _this.form.content
      const algorithm = _this.form.algorithm
      const key = _this.form.password
      const iv = _this.form.iv
      const mode = _this.form.mode
      const padding = _this.form.padding
      var cfg = { 'algorithm': algorithm, 'mode': mode, 'padding': padding }
      if (iv) {
        cfg.iv = iv
      }

      _this.form.result = enc.decrypt(content, key, cfg)
    },
    exchange() {
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

