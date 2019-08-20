<template>
  <div class="app-container">

    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span>取色器</span>
      </div>
      <table  border="1" cellspacing="0" cellpadding="0">
        <tr>
          <th width="200px">颜色格式</th>
          <th width="200px">取色器</th>
          <th width="200px">值</th>
        </tr>
        <tr>
        <td>hex</td>
        <td><el-color-picker v-model="color1" size="mini" color-format="hex"/></td>
        <td style="color: red ">{{color1}}</td>

        </tr>
        <tr>
        <td>rgb</td>
        <td><el-color-picker v-model="color2" size="mini" color-format="rgb"/></td>
        <td style="color: red ">{{color2}}</td>

        </tr>
        <tr>
        <td>rgba(透明度)</td>
        <td><el-color-picker v-model="color21" show-alpha size="mini" color-format="rgb"/></td>
        <td style="color: red ">{{color21}}</td>

        </tr>
        <tr>
        <td>hsl</td>
        <td><el-color-picker v-model="color3" size="mini" color-format="hsl"/></td>
        <td style="color: red ">{{color3}}</td>

        </tr>
        <tr>
        <td>hsla(透明度)</td>
        <td><el-color-picker v-model="color31" show-alpha size="mini" color-format="hsl"/></td>
        <td style="color: red ">{{color31}}</td>

        </tr>
        <tr>
        <td>hsv(透明度)</td>
        <td><el-color-picker v-model="color4" size="mini" color-format="hsv"/></td>
        <td style="color: red ">{{color4}}</td>

        </tr>
        <tr>
        <td>hsva</td>
        <td><el-color-picker v-model="color41" show-alpha size="mini" color-format="hsv"/></td>
        <td style="color: red ">{{color41}}</td>

        </tr>
      </table>

    </el-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
        color1: '',
        color2: '',
        color21: '',

        color3: '',
        color31: '',

        color4: '',
        color41: ''
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  border:1px solid #F8F5F5;
  text-align: center;
  }

td {
  font:italic bold 12px/20px arial,sans-serif;
}

</style>
