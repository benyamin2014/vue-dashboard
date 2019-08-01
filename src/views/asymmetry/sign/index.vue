<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>RSA签名</span>
      </div>
      <div>
        <el-form>
          <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.password" type="textarea" :rows="4" placeholder="请输入RSA私钥" />
            </el-col>
          </el-form-item>

          <el-form-item>

            <el-col :span="12">
              <el-input v-model="form.content" type="textarea" :rows="4" placeholder="请输入编码或解码数据" />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="4">
              <el-select v-model="form.algorithm">
                <el-option label="MD5withRSA" value="MD5withRSA" />
                <el-option label="SHA1withRSA" value="SHA1withRSA" />
                <el-option label="SHA224withRSA" value="SHA224withRSA" />
                <el-option label="SHA256withRSA" value="SHA256withRSA" />
                <el-option label="SHA384withRSA" value="SHA384withRSA" />
                <el-option label="SHA512withRSA" value="SHA512withRSA" />
                <el-option label="RIPEMD160withRSA" value="RIPEMD160withRSA" />
              </el-select>
            </el-col>
            <el-col :span="2">
              <el-select v-model="form.encoding">
                <el-option label="Hex" value="Hex" />
                <el-option label="Base64" value="Base64" />
              </el-select>
            </el-col>
            <el-button type="primary" :round="true" @click="sign">签名</el-button>
            <el-button type="primary" :round="true" @click="clear">清空</el-button>
          </el-form-item>
          <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.result" type="textarea" :rows="7" placeholder="签名结果" />
            </el-col>
          </el-form-item>
        </el-form>
      </div>

    </el-card>
  </div>
</template>

<script>
import jsrsasign from 'jsrsasign'

const prikey = '-----BEGIN PRIVATE KEY-----\n' +
                   'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAPddJ3PUyfNrMEQ3\n' +
                   'ko59PHQjJUlnnBvnuKysK4cOGdhfC2Z2FBqWAgjR+jN54WkykC+WeYcLWSlbtdUa\n' +
                   '9mcvHdtZsIRt/6kxJbiSZC4j7lzFFQlsKXux1o4MGsg2AREc8gJULXwAktOERUwf\n' +
                   'KO5HomfjNCbJg1tF5KS1j8GsVO8xAgMBAAECgYEA6eG1JMrj63jEmStmMb1txG1a\n' +
                   'mu4Q5z2QGgtr2HVXsIIlGEq6tWxyHf7TL4qkuz9onuYKn8n2Eqm44fZtVaBx+5ES\n' +
                   'zRpIvlTvaxmVu0HZ1hYAzUw1XyRnXNMKpL5tT4GCjm8+QGPzlGxgXI1sNg8r9Jaw\n' +
                   '9zRUYeA6LQR9RIMkHWUCQQD8QojjVoGjtiunoh/N8iplhUszZIavAEvmDIE+kVy+\n' +
                   'pA7hvlukLw6JMc7cfTcnHyxDo9iHVIzrWlTuKRq9KWVLAkEA+wgJS2sgtldnCVn6\n' +
                   'tJKFVwsHrWhMIU29msPPbNuWUD23BcKE/vehIyFu1ahNA/TiM40PEnzprQ5JfPxU\n' +
                   '16S78wJANTfMLTnYy7Lo7sqTLx2BuD0wqjzw9QZ4/KVytsJv8IAn65P/PVn4FRV+\n' +
                   '8KEx+3zmF7b/PT2nJRe/hycAzxtmlQJBAMrFwQxEqpXfoAEzx4lY2ZBn/nmaR/SW\n' +
                   '4VNEXCbocVC7qT1j1R5HVMgV13uKiTtq8dUGWmhqsi7x3XayNK5ECPUCQQDZaAN6\n' +
                   'tvIHApz9OLsXSw0jZirQ6KEYdharXbIVDy1W1sVE3lzLbqLdFp1bxAHQIvsYS5PM\n' +
                   'A9veSJh372RLJKkj\n' +
                   '-----END PRIVATE KEY-----'

const pubKey = '-----BEGIN PUBLIC KEY-----\n' +
                       'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD3XSdz1MnzazBEN5KOfTx0IyVJ\n' +
                       'Z5wb57isrCuHDhnYXwtmdhQalgII0fozeeFpMpAvlnmHC1kpW7XVGvZnLx3bWbCE\n' +
                       'bf+pMSW4kmQuI+5cxRUJbCl7sdaODBrINgERHPICVC18AJLThEVMHyjuR6Jn4zQm\n' +
                       'yYNbReSktY/BrFTvMQIDAQAB\n' +
                       '-----END PUBLIC KEY-----'

export default {
  name: 'Asymmetry',
  data() {
    return {
      form: {
        encoding: 'Base64',
        content: '',
        result: '',
        password: prikey,
        algorithm: 'SHA1withRSA'
      }
    }
  },
  methods: {
    sign() {
      const _this = this
      const content = _this.form.content
      const password = _this.form.password
      const algorithm = _this.form.algorithm
      const encoding = _this.form.encoding

      const signature = new jsrsasign.KJUR.crypto.Signature({ alg: algorithm, prvkeypem: password }) //! 这里指定 私钥 pem!
      signature.updateString(content)
      const a = signature.sign()
      if (encoding === 'Base64') {
        _this.form.result = jsrsasign.hextob64(a)
      } else {
        _this.form.result = a
      }
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

