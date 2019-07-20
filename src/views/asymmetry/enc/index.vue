<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>RSA加解密</span>
      </div>
      <template>
        <el-tabs v-model="activeName">
          <el-tab-pane label="RSA加密" name="first">

      <div>
        <el-form>
          <el-form-item>
             <el-col :span="12">
               <el-input v-model="form.password" type="textarea" :rows="4" placeholder="请输入RSA公钥" />
             </el-col>
          </el-form-item>

          <el-form-item>

            <el-col :span="12">
              <el-input v-model="form.content" type="textarea" :rows="4" placeholder="请输入编码或解码数据" />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="2">
              <el-select v-model="form.encoding">
                <el-option label="Hex" value="Hex" />
                <el-option label="Base64" value="Base64" />
              </el-select>
            </el-col>
            <el-button type="primary" :round="true" @click="enc">加密</el-button>
            <el-button type="primary" :round="true" @click="clear">清空</el-button>
          </el-form-item>
          <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.result" type="textarea" :rows="7" placeholder="加密结果" />
            </el-col>
          </el-form-item>
        </el-form>
      </div>

          </el-tab-pane>
          <el-tab-pane label="RSA解密" name="second">
                <div>
                  <el-form>
                    <el-form-item>
                       <el-col :span="12">
                         <el-input v-model="form.password1" type="textarea" :rows="4" placeholder="请输入RSA私钥" />
                       </el-col>
                    </el-form-item>

                    <el-form-item>

                      <el-col :span="12">
                        <el-input v-model="form.content1" type="textarea" :rows="4" placeholder="请输入编码或解码数据" />
                      </el-col>
                    </el-form-item>
                    <el-form-item>
                      <el-col :span="2">
                        <el-select v-model="form.encoding1">
                          <el-option label="Hex" value="Hex" />
                          <el-option label="Base64" value="Base64" />
                        </el-select>
                      </el-col>
                      <el-button type="primary" :round="true" @click="dec">解密</el-button>
                      <el-button type="primary" :round="true" @click="clear">清空</el-button>
                    </el-form-item>
                    <el-form-item>
                      <el-col :span="12">
                        <el-input v-model="form.result1" type="textarea" :rows="7" placeholder="解密结果" />
                      </el-col>
                    </el-form-item>
                  </el-form>
                </div>



          </el-tab-pane>
        </el-tabs>
      </template>

    </el-card>
  </div>
</template>

<script>
import jsrsasign from 'jsrsasign'

const priKey = "-----BEGIN PRIVATE KEY-----\n" +
                   "MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAPddJ3PUyfNrMEQ3\n" +
                   "ko59PHQjJUlnnBvnuKysK4cOGdhfC2Z2FBqWAgjR+jN54WkykC+WeYcLWSlbtdUa\n" +
                   "9mcvHdtZsIRt/6kxJbiSZC4j7lzFFQlsKXux1o4MGsg2AREc8gJULXwAktOERUwf\n" +
                   "KO5HomfjNCbJg1tF5KS1j8GsVO8xAgMBAAECgYEA6eG1JMrj63jEmStmMb1txG1a\n" +
                   "mu4Q5z2QGgtr2HVXsIIlGEq6tWxyHf7TL4qkuz9onuYKn8n2Eqm44fZtVaBx+5ES\n" +
                   "zRpIvlTvaxmVu0HZ1hYAzUw1XyRnXNMKpL5tT4GCjm8+QGPzlGxgXI1sNg8r9Jaw\n" +
                   "9zRUYeA6LQR9RIMkHWUCQQD8QojjVoGjtiunoh/N8iplhUszZIavAEvmDIE+kVy+\n" +
                   "pA7hvlukLw6JMc7cfTcnHyxDo9iHVIzrWlTuKRq9KWVLAkEA+wgJS2sgtldnCVn6\n" +
                   "tJKFVwsHrWhMIU29msPPbNuWUD23BcKE/vehIyFu1ahNA/TiM40PEnzprQ5JfPxU\n" +
                   "16S78wJANTfMLTnYy7Lo7sqTLx2BuD0wqjzw9QZ4/KVytsJv8IAn65P/PVn4FRV+\n" +
                   "8KEx+3zmF7b/PT2nJRe/hycAzxtmlQJBAMrFwQxEqpXfoAEzx4lY2ZBn/nmaR/SW\n" +
                   "4VNEXCbocVC7qT1j1R5HVMgV13uKiTtq8dUGWmhqsi7x3XayNK5ECPUCQQDZaAN6\n" +
                   "tvIHApz9OLsXSw0jZirQ6KEYdharXbIVDy1W1sVE3lzLbqLdFp1bxAHQIvsYS5PM\n" +
                   "A9veSJh372RLJKkj\n" +
                   "-----END PRIVATE KEY-----"

const pubKey =  "-----BEGIN PUBLIC KEY-----\n" +
                       "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD3XSdz1MnzazBEN5KOfTx0IyVJ\n" +
                       "Z5wb57isrCuHDhnYXwtmdhQalgII0fozeeFpMpAvlnmHC1kpW7XVGvZnLx3bWbCE\n" +
                       "bf+pMSW4kmQuI+5cxRUJbCl7sdaODBrINgERHPICVC18AJLThEVMHyjuR6Jn4zQm\n" +
                       "yYNbReSktY/BrFTvMQIDAQAB\n" +
                       "-----END PUBLIC KEY-----";

export default {
  name: 'asymmetry',
  data() {
    return {
      activeName: 'first',
      form: {
        encoding: 'Base64',
        content: '',
        result: '',
        password: pubKey,
        encoding1: 'Base64',
        content1: '',
        result1: '',
        password1: priKey
      }
    }
  },
  methods: {
    enc() {
      let _this = this
      let content = _this.form.content;
      let password = _this.form.password
      let encoding = _this.form.encoding
      let pub = jsrsasign.KEYUTIL.getKey(password);
      let enc = jsrsasign.KJUR.crypto.Cipher.encrypt(content,pub);
      if(encoding === 'Base64') {
          _this.form.result = jsrsasign.hextob64(enc);
      } else {
        _this.form.result = enc
      }
    },
    dec() {
      let _this = this
      let content = _this.form.content1;
      let password = _this.form.password1
      let encoding = _this.form.encoding1
      let pri = jsrsasign.KEYUTIL.getKey(password);
      if(encoding === 'Base64') {
          content = jsrsasign.b64tohex(content)
      }

      let enc = jsrsasign.KJUR.crypto.Cipher.decrypt(content,pri);
      console.log('d: ' + enc)
        _this.form.result1 = enc
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

