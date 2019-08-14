<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>HTML转义字符</span>
      </div>

      <el-table
        :data="list"
        border
        fit
        highlight-current-row
      >
        <el-table-column label="字符" align="center">
          <template slot-scope="scope">
            {{ scope.row.ch }}
          </template>
        </el-table-column>
        <el-table-column label="十进制" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.dec }}</span>
          </template>
        </el-table-column>
        <el-table-column label="转义字符" align="center">
          <template slot-scope="scope">
            {{ scope.row.escape }}
          </template>
        </el-table-column>
      </el-table>
    </el-card>



  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
            {'ch':'"                             ','dec':'&#34; ','escape':'&quot;'},
            {'ch':'&                             ','dec':'&#38; ','escape':'&amp; '},
            {'ch':'<                             ','dec':'&#60; ','escape':'&lt;  '},
            {'ch':'>                             ','dec':'&#62; ','escape':'&gt;  '},
            {'ch':'不断开空格(non-breaking space)','dec':'&#160;','escape':'&nbsp;'},
            {'ch':'©','dec':'&#169;','escape':'&copy;'},
            {'ch':'®','dec':'&#174;','escape':'&reg;'},
            {'ch':'™','dec':'&#8482;','escape':'™'},
            {'ch':'×','dec':'&#215;','escape':'&times;'},
            {'ch':'÷','dec':'&#247;','escape':'&divide;'}

            ]
    }
  }
}
</script>
