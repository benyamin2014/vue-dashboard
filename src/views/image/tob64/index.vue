<template>
  <div class="app-container"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"

  >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>图片转Base64</span>
      </div>
        <el-form>

      <div>
              <el-form-item>

        <el-upload
          drag
          action="#"
          :before-upload="handlePreview"
          :auto-upload="true"
          >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过1mb</div>
        </el-upload>
                  </el-form-item>

        </div>
        <div>
        <el-form-item>
            <el-col :span="12">
              <el-input v-model="form.result" type="textarea" :rows="7" placeholder="转换结果" />
            </el-col>
          </el-form-item>
        </div>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        result: ''
      },
      loading: false
    }
  },
  methods: {
    handlePreview(file){
      let _this = this

      const isLt2M = file.size / 1024 / 1024 < 2;
      if(!isLt2M) {
        _this.$message.error('上传图片大小不能超过 2MB!');
        return false
      }

      _this.loading = true
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        _this.form.result = e.target.result
      }
      _this.loading = false
      return false
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

