<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>免责声明</span>
      </div>
      <div>
        身份证号码生成器是按身份证验证规则生成虚拟身份证号，非真实身份证，仅供测试使用，请勿用于非法用途。
      </div>
    </el-card>
    <br>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>身份证号码随机生成</span>
      </div>

      <el-form ref="form" :model="form">
        <el-form-item label="出生地">
          <v-region class="form-control" :ui="true" :column="true" :selected="selected" @values="regionChange" />
        </el-form-item>
        <el-form-item label="出生日期">
          <el-col :span="5">
            <el-date-picker v-model="form.date1" type="date" @change="dateChangebirthday" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="Pick a date" style="width: 100%;" />
          </el-col>
        </el-form-item>
        <el-form-item label="个数">
          <el-col :span="3">
            <el-select v-model="form.nums">
              <el-option label="5" value="5" />
              <el-option label="20" value="20" />
              <el-option label="30" value="30" />
              <el-option label="40" value="40" />
              <el-option label="50" value="50" />
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="随机姓名">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item v-if="!form.delivery" label="姓名">
          <el-col :span="2">
            <el-input v-model="form.name" type="text" />
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">生成</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <br>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>生成结果</span>
      </div>
      <el-table
        :data="result"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="ID" width="95">
          <template slot-scope="scope">
            {{ scope.$index }}
          </template>
        </el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="手机号">
          <template slot-scope="scope">
            {{ scope.row.mobile }}
          </template>
        </el-table-column>
        <el-table-column label="身份证号">
          <template slot-scope="scope">
            {{ scope.row.no }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="showPic(scope.row)">身份证正反面</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
      <el-dialog
        v-model="dialogVisible"
        title="模拟身份证图片"
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        :append-to-body="true"
        :modal="true"
      >
      <div style="text-align:center">
       <span style="color:red">注意：本图片仅供测试使用，禁止从事违法活动</span>
      <img :src="picture"></img>
      </div>
      </el-dialog>
            <div style="display:none">
               <canvas id="canvas1" width="600" height="680" ref="canvas1" />

                <img ref="pic" src="../../assets/em.png">
              </div>
  </div>


</template>

<script>
export default {
  updated() {
        console.log('canvas:' + this.$refs.canvas1)

    console.log('canvas:' + this.$refs.canvas)
  },

  data() {
    return {
      form: {
        region: '',
        date1: '1990-01-01',
        nums: 5,
        delivery: true,
        name: '姓名',
        address: ''
      },
      selected: { province: '110000', city: '110000', area: '110102' },
      result: null,
      dialogVisible: false, // 模态框是否显示
      addLoading: false, // 是否显示loading
      picture: ''

    }
  },
  methods: {
    onSubmit() {
      var _this = this
      var fm = _this.form
      const region = fm.region
      console.log("date" + fm.date1)
      const birth = fm.date1.replace(new RegExp('-', 'g'), '')
      const delivery = fm.delivery
      const nums = fm.nums
      const myname = fm.name
      const addr = fm.address

      const result = []
      for (var i = 0; i < nums; i++) {
        const rand = _this.randomNum(100, 999)
        const _pre = region + birth + rand
        const no = _this.idcardgen(_pre)
        const name = delivery ? _this.randomName() : myname
        const mobile = _this.randomMobile()
        const sex = rand % 2 == 0 ? '女' : '男'
        result.push({ 'no': no, 'name': name, 'mobile': mobile, 'birth': birth, 'addr': addr, 'sex': sex })
      }
      _this.result = result
      console.log(_this.result)
    },
    showPic(row) {
      let _this = this
      console.log(row)
      const canvas = this.$refs.canvas1
      console.log('canvas:' + canvas)
      var ctx = canvas.getContext('2d')

      console.log('ctx:' + ctx)

      const img = this.$refs.pic
      // console.log("img:" + img)
      // let img = new Image();
      // img.src = "../../assets/em.png"
      // img.onload = function () {
      // console.log("img:" + img)
      ctx.drawImage(img, 0, 0)
      // }

      ctx.fillStyle = '#191919'
      ctx.font = 'normal small-caps bold 13px arial'

      var nameStr = "";
      for(var i=0;i<row.name.length;i++) {
        nameStr += (" "+ row.name.charAt(i))
      }
      console.log(nameStr)


      ctx.fillText(nameStr, 115, 94)
      ctx.fillText(row.sex, 115, 126)
      ctx.fillText('汉', 215, 126)
      ctx.fillText(row.birth.substring(0, 4), 115, 158)// 年
      ctx.fillText(row.birth.substring(4, 6), 190, 158)// 月
      ctx.fillText(row.birth.substring(6, 8), 235, 158)// 日
      ctx.fillText(row.addr.length>12?row.addr.substring(0,12):row.addr, 115, 192)// 地址

      var str = "";
      for(var i=0;i<row.no.length;i++) {
        str += (" "+ row.no.charAt(i))
      }
      console.log(str)


      ctx.fillText(str, 190, 278)// 身份证号

      ctx.fillText('   测试啊', 205, 585)// 身份证号
      ctx.fillText('   2014.01.01-2034.01.01', 205, 618)// 身份证号

      ctx.save()
      console.log(canvas.toDataURL())

      this.picture = canvas.toDataURL()
      console.log(this.picture)
      this.dialogVisible = true

    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    regionChange(data) {
      var _this = this
      console.log(data.area.key)
      _this.form.region = data.area.key
      _this.form.address = data.province.value + data.city.value + data.area.value
      console.log('address: ' + _this.form.address)
      console.log('赋值后：' + _this.form.region)
    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10)
          break
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
          break
        default:
          return 0
          break
      }
    },
    idcardgen(data) {
      const w = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const c = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      let sum = 0
      for (var i = 0, len = data.length; i < len; i++) {
        sum += (data[i] * w[i])
      }
      console.log(sum)
      const mod = sum % 11
      console.log('mod: ' + mod)
      return data + c[mod]
    },
    randomMobile() {
      var prefixArray = new Array('130', '131', '132', '133', '135', '137', '138', '170', '187', '189')
      var i = parseInt(10 * Math.random())
      var prefix = prefixArray[i]
      for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10)
      }
      return prefix
    },
    randomName() {
      var familyNames = new Array(
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈',
        '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许',
        '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏',
        '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
        '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦',
        '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳',
        '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺',
        '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
        '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余',
        '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹'
      )
      var givenNames = new Array(
        '子璇', '淼', '国栋', '夫子', '瑞堂', '甜', '敏', '尚', '国贤', '贺祥', '晨涛',
        '昊轩', '易轩', '益辰', '益帆', '益冉', '瑾春', '瑾昆', '春齐', '杨', '文昊',
        '东东', '雄霖', '浩晨', '熙涵', '溶溶', '冰枫', '欣欣', '宜豪', '欣慧', '建政',
        '美欣', '淑慧', '文轩', '文杰', '欣源', '忠林', '榕润', '欣汝', '慧嘉', '新建',
        '建林', '亦菲', '林', '冰洁', '佳欣', '涵涵', '禹辰', '淳美', '泽惠', '伟洋',
        '涵越', '润丽', '翔', '淑华', '晶莹', '凌晶', '苒溪', '雨涵', '嘉怡', '佳毅',
        '子辰', '佳琪', '紫轩', '瑞辰', '昕蕊', '萌', '明远', '欣宜', '泽远', '欣怡',
        '佳怡', '佳惠', '晨茜', '晨璐', '运昊', '汝鑫', '淑君', '晶滢', '润莎', '榕汕',
        '佳钰', '佳玉', '晓庆', '一鸣', '语晨', '添池', '添昊', '雨泽', '雅晗', '雅涵',
        '清妍', '诗悦', '嘉乐', '晨涵', '天赫', '玥傲', '佳昊', '天昊', '萌萌', '若萌'
      )
      var familyName = familyNames[this.randomNum(0, 99)]
      var givenName = givenNames[this.randomNum(0, 70)]
      var name = familyName + givenName
      return name
    },
    dateChangebirthday(e) {
      this.form.date1 = e
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

