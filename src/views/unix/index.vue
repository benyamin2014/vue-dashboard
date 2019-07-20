<template>
  <div class="app-container">
    <el-card class="box-card">

      <el-collapse v-model="activeNames">
        <el-collapse-item title="Unix时间戳 => 北京时间" name="1">

          <el-card class="box-card">
            <!--
      <div slot="header" class="clearfix">
        <span>Unix时间戳 => 北京时间</span>
      </div>-->

            <div>
              <el-form>
                <el-form-item>
                  <span>当前unix时间戳：</span><span style="color:red">{{ form.current }}</span>
                </el-form-item>
                <el-form-item>
                  <el-col :span="5">
                    <el-input v-model="form.unix" type="text" placeholder="Unix时间戳" />
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" :round="true" @click="tf1">转换为北京时间</el-button>
                </el-form-item>
                <el-form-item>
                  <el-col :span="5">
                    <el-date-picker
                      v-model="form.date"
                      type="datetime"
                      placeholder=""
                    />
                  </el-col>
                </el-form-item>
              </el-form>
            </div>

          </el-card>
        </el-collapse-item>
        <el-collapse-item title="北京时间 => Unix时间戳" name="3">

          <el-card class="box-card">
            <!--
      <div slot="header" class="clearfix">
        <span>北京时间 => Unix时间戳</span>
      </div>-->

            <div>
              <el-form>
                <el-form-item>
                  <span>当前时间：</span><span style="color:red">{{ form.currentDate | dateFullFormat }}</span>
                </el-form-item>
                <el-form-item>
                  <el-col :span="5">
                    <el-date-picker
                      v-model="form.date1"
                      type="datetime"
                      placeholder=""
                    />
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" :round="true" @click="tf2">转换Unix时间戳</el-button>
                </el-form-item>
                <el-form-item>
                  <el-col :span="5">
                    <el-input v-model="form.unix1" type="text" placeholder="Unix时间戳" />
                  </el-col>
                </el-form-item>
              </el-form>
            </div>

          </el-card>

        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <span style="color:red">简介说明</span>
          </template>
          <el-card class="box-card">
            <div style="color:red">
              什么是时间戳？
            </div>
            <div>
              Unix时间戳(Unix timestamp)，或称Unix时间(Unix time)、POSIX时间(POSIX time)，
              是一种时间表示方式，定义为从格林威治时间1970年01月01日00时00分00秒起至现在的总秒数。
              Unix时间戳不仅被使用在Unix系统、类Unix系统中，也在许多其他操作系统中被广泛采用。
              多数Unix系统将时间戳以一个32位整型进行保存，这可能会在2038年1月19日产生一些问题（Y2038问题）。
            </div>

          </el-card>

        </el-collapse-item>
      </el-collapse>
    </el-card>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    dateFullFormat(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }

  },
  data() {
    return {
      form: {
        current: parseInt(new Date().getTime() / 1000),
        currentDate: new Date(),
        unix: '',
        date: '',
        unix1: '',
        date1: ''
      },
      activeNames: ['1', '3']
    }
  },
  mounted() {
    var _this = this
    setInterval(() => {
      _this.form.current = parseInt(new Date().getTime() / 1000)
    }, 1000)
    var _this = this
    setInterval(() => {
      _this.form.currentDate = new Date()
    }, 1000)
  },
  methods: {
    tf1() {
      const _this = this
      const unix = _this.form.unix * 1000
      const d = new Date(unix)
      console.log('d:' + d)
      _this.form.date = d
    },
    tf2() {
      const _this = this
      const date1 = _this.form.date1
      _this.form.unix1 = parseInt(date1.getTime() / 1000)
    }

  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

