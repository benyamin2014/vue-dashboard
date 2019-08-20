<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>JSON验证器</span>
      </div>
      <div>
       <vue-json-editor v-model="content" :show-btns="false" :mode="'code'" lang="zh" @json-change="onJsonChange"  @has-error="onError"></vue-json-editor>
       <br/>
       <div v-show="result" >
       <h3>校验结果</h3>
       <p :class="tipClass">{{result}}</p>
       </div>
       <!--
        <el-form>
          <el-form-item>
            <el-col :span="12">
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :round="true" @click="validateJson">校验化校验</el-button>
            <el-button type="primary" :round="true" @click="clear">清空</el-button>
          </el-form-item>
          <el-form-item>
             <div :class="pass">{{form.result}}</div>
          </el-form-item>
        </el-form>
        -->
      </div>
    </el-card>
  </div>
</template>
<script>
import vueJsonEditor from 'vue-json-editor'




export default {

  data() {
    return {
      content: null,
      result: '',
      tipClass: ''
    }
  },
 components: {
    vueJsonEditor
  },
  computed: {
  },
  methods: {
    onJsonChange(value) {
      console.log('value:', value);
      this.result = 'Valid JSON'
      this.tipClass = 'pass'

    },
    onError (value) {
      console.log('value:', value);
      this.result = value
      this.tipClass = 'fail'

    }
  }
}
</script>

<style scoped>
      .pass {
        padding: 5px;
        background-color: #efe;
        color: #393;
        border: 2px solid #393;
        white-space:pre-wrap;
      }
      .fail {
        padding: 5px;

        background-color: #fee;
        color: #933;
        border: 2px solid #933;
                white-space:pre-wrap;

      }

</style>

