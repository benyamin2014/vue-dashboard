<template>
  <div class="app-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <span style="color:red">简介说明</span>
        </template>
        <div>ASCII ((American Standard Code for Information Interchange): 美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统，主要用于显示现代英语和其他西欧语言。它是最通用的信息交换标准，并等同于国际标准ISO/IEC 646。ASCII第一次以规范标准的类型发表是在1967年，最后一次更新则是在1986年，到目前为止共定义了128个字符</div>
        <div>
          <ul>
            <li>ASCII中的0~31为控制字符；32~126为打印字符；127为Delete(删除)命令。下表为控制字符释义。</li>
            <li>ASCII扩展字符——（为了适应更多字符）128~255，或者-128~-1,其中，-128对应128，依次递增对应。</li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Ascii码</span>
      </div>

      <el-table
        :data="list"
        border
        fit
        highlight-current-row
      >
        <el-table-column label="二进制" align="center">
          <template slot-scope="scope">
            {{ scope.row.bin }}
          </template>
        </el-table-column>
        <el-table-column label="八进制" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.oct }}</span>
          </template>
        </el-table-column>
        <el-table-column label="十进制" align="center">
          <template slot-scope="scope">
            {{ scope.row.dec }}
          </template>
        </el-table-column>
        <el-table-column label="十六进制" align="center">
          <template slot-scope="scope">
            {{ scope.row.hex }}
          </template>
        </el-table-column>
        <el-table-column label="缩写/字符" align="center">
          <template slot-scope="scope">
            {{ scope.row.shortcut }}
          </template>
        </el-table-column>
        <el-table-column label="说明" align="center">
          <template slot-scope="scope">
            {{ scope.row.explain }}
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
      activeNames: ['1'],
      list: [
        { 'bin': '0000 0000', 'oct': '0', 'dec': '0', 'hex': '0x00', 'shortcut': 'NUL(null)', 'explain': '空字符' },
        { 'bin': '0000 0001', 'oct': '1', 'dec': '1', 'hex': '0x01', 'shortcut': 'SOH(start of headline)', 'explain': '标题开始' },
        { 'bin': '0000 0010', 'oct': '2', 'dec': '2', 'hex': '0x02', 'shortcut': 'STX (start of text)', 'explain': '正文开始' },
        { 'bin': '0000 0011', 'oct': '3', 'dec': '3', 'hex': '0x03', 'shortcut': 'ETX (end of text)', 'explain': '正文结束' },
        { 'bin': '0000 0100', 'oct': '4', 'dec': '4', 'hex': '0x04', 'shortcut': 'EOT (end of transmission)', 'explain': '传输结束' },
        { 'bin': '0000 0101', 'oct': '5', 'dec': '5', 'hex': '0x05', 'shortcut': 'ENQ (enquiry)', 'explain': '请求' },
        { 'bin': '0000 0110', 'oct': '6', 'dec': '6', 'hex': '0x06', 'shortcut': 'ACK (acknowledge)', 'explain': '收到通知' },
        { 'bin': '0000 0111', 'oct': '7', 'dec': '7', 'hex': '0x07', 'shortcut': 'BEL (bell)', 'explain': '响铃' },
        { 'bin': '0000 1000', 'oct': '10', 'dec': '8', 'hex': '0x08', 'shortcut': 'BS (backspace)', 'explain': '退格' },
        { 'bin': '0000 1001', 'oct': '11', 'dec': '9', 'hex': '0x09', 'shortcut': 'HT (horizontal tab)', 'explain': '水平制表符' },
        { 'bin': '0000 1010', 'oct': '12', 'dec': '10', 'hex': '0x0A', 'shortcut': 'LF (NL line feed, new line)', 'explain': '换行键' },
        { 'bin': '0000 1011', 'oct': '13', 'dec': '11', 'hex': '0x0B', 'shortcut': 'VT (vertical tab)', 'explain': '垂直制表符' },
        { 'bin': '0000 1100', 'oct': '14', 'dec': '12', 'hex': '0x0C', 'shortcut': 'FF (NP form feed, new page)', 'explain': '换页键' },
        { 'bin': '0000 1101', 'oct': '15', 'dec': '13', 'hex': '0x0D', 'shortcut': 'CR (carriage return)', 'explain': '回车键' },
        { 'bin': '0000 1110', 'oct': '16', 'dec': '14', 'hex': '0x0E', 'shortcut': 'SO (shift out)', 'explain': '不用切换' },
        { 'bin': '0000 1111', 'oct': '17', 'dec': '15', 'hex': '0x0F', 'shortcut': 'SI (shift in)', 'explain': '启用切换' },
        { 'bin': '0001 0000', 'oct': '20', 'dec': '16', 'hex': '0x10', 'shortcut': 'DLE (data link escape)', 'explain': '数据链路转义' },
        { 'bin': '0001 0001', 'oct': '21', 'dec': '17', 'hex': '0x11', 'shortcut': 'DC1 (device control 1)', 'explain': '设备控制1' },
        { 'bin': '0001 0010', 'oct': '22', 'dec': '18', 'hex': '0x12', 'shortcut': 'DC2 (device control 2)', 'explain': '设备控制2' },
        { 'bin': '0001 0011', 'oct': '23', 'dec': '19', 'hex': '0x13', 'shortcut': 'DC3 (device control 3)', 'explain': '设备控制3' },
        { 'bin': '0001 0100', 'oct': '24', 'dec': '20', 'hex': '0x14', 'shortcut': 'DC4 (device control 4)', 'explain': '设备控制4' },
        { 'bin': '0001 0101', 'oct': '25', 'dec': '21', 'hex': '0x15', 'shortcut': 'NAK (negative acknowledge)', 'explain': '拒绝接收' },
        { 'bin': '0001 0110', 'oct': '26', 'dec': '22', 'hex': '0x16', 'shortcut': 'SYN (synchronous idle)', 'explain': '同步空闲' },
        { 'bin': '0001 0111', 'oct': '27', 'dec': '23', 'hex': '0x17', 'shortcut': 'ETB (end of trans. block)', 'explain': '结束传输块' },
        { 'bin': '0001 1000', 'oct': '30', 'dec': '24', 'hex': '0x18', 'shortcut': 'CAN (cancel)', 'explain': '取消' },
        { 'bin': '0001 1001', 'oct': '31', 'dec': '25', 'hex': '0x19', 'shortcut': 'EM (end of medium)', 'explain': '媒介结束' },
        { 'bin': '0001 1010', 'oct': '32', 'dec': '26', 'hex': '0x1A', 'shortcut': 'SUB (substitute)', 'explain': '代替' },
        { 'bin': '0001 1011', 'oct': '33', 'dec': '27', 'hex': '0x1B', 'shortcut': 'ESC (escape)', 'explain': '换码(溢出)' },
        { 'bin': '0001 1100', 'oct': '34', 'dec': '28', 'hex': '0x1C', 'shortcut': 'FS (file separator)', 'explain': '文件分隔符' },
        { 'bin': '0001 1101', 'oct': '35', 'dec': '29', 'hex': '0x1D', 'shortcut': 'GS (group separator)', 'explain': '分组符' },
        { 'bin': '0001 1110', 'oct': '36', 'dec': '30', 'hex': '0x1E', 'shortcut': 'RS (record separator)', 'explain': '记录分隔符' },
        { 'bin': '0001 1111', 'oct': '37', 'dec': '31', 'hex': '0x1F', 'shortcut': 'US (unit separator)', 'explain': '单元分隔符' },
        { 'bin': '0010 0000', 'oct': '40', 'dec': '32', 'hex': '0x20', 'shortcut': '(space)', 'explain': '空格' },
        { 'bin': '0010 0001', 'oct': '41', 'dec': '33', 'hex': '0x21', 'shortcut': '!', 'explain': '叹号' },
        { 'bin': '0010 0010', 'oct': '42', 'dec': '34', 'hex': '0x22', 'shortcut': '"', 'explain': '双引号' },
        { 'bin': '0010 0011', 'oct': '43', 'dec': '35', 'hex': '0x23', 'shortcut': '#', 'explain': '井号' },
        { 'bin': '0010 0100', 'oct': '44', 'dec': '36', 'hex': '0x24', 'shortcut': '$', 'explain': '美元符' },
        { 'bin': '0010 0101', 'oct': '45', 'dec': '37', 'hex': '0x25', 'shortcut': '%', 'explain': '百分号' },
        { 'bin': '0010 0110', 'oct': '46', 'dec': '38', 'hex': '0x26', 'shortcut': '&', 'explain': '和号' },
        { 'bin': '0010 0111', 'oct': '47', 'dec': '39', 'hex': '0x27', 'shortcut': '\'', 'explain': '闭单引号' },
        { 'bin': '0010 1000', 'oct': '50', 'dec': '40', 'hex': '0x28', 'shortcut': '(', 'explain': '开括号' },
        { 'bin': '0010 1001', 'oct': '51', 'dec': '41', 'hex': '0x29', 'shortcut': ')', 'explain': '闭括号' },
        { 'bin': '0010 1010', 'oct': '52', 'dec': '42', 'hex': '0x2A', 'shortcut': '*', 'explain': '星号' },
        { 'bin': '0010 1011', 'oct': '53', 'dec': '43', 'hex': '0x2B', 'shortcut': '+', 'explain': '加号' },
        { 'bin': '0010 1100', 'oct': '54', 'dec': '44', 'hex': '0x2C', 'shortcut': ',', 'explain': '逗号' },
        { 'bin': '0010 1101', 'oct': '55', 'dec': '45', 'hex': '0x2D', 'shortcut': '-', 'explain': '减号/破折号' },
        { 'bin': '0010 1110', 'oct': '56', 'dec': '46', 'hex': '0x2E', 'shortcut': '.', 'explain': '句号' },
        { 'bin': '0010 1111', 'oct': '57', 'dec': '47', 'hex': '0x2F', 'shortcut': '/', 'explain': '斜杠' },
        { 'bin': '0011 0000', 'oct': '60', 'dec': '48', 'hex': '0x30', 'shortcut': '0', 'explain': '字符0' },
        { 'bin': '0011 0001', 'oct': '61', 'dec': '49', 'hex': '0x31', 'shortcut': '1', 'explain': '字符1' },
        { 'bin': '0011 0010', 'oct': '62', 'dec': '50', 'hex': '0x32', 'shortcut': '2', 'explain': '字符2' },
        { 'bin': '0011 0011', 'oct': '63', 'dec': '51', 'hex': '0x33', 'shortcut': '3', 'explain': '字符3' },
        { 'bin': '0011 0100', 'oct': '64', 'dec': '52', 'hex': '0x34', 'shortcut': '4', 'explain': '字符4' },
        { 'bin': '0011 0101', 'oct': '65', 'dec': '53', 'hex': '0x35', 'shortcut': '5', 'explain': '字符5' },
        { 'bin': '0011 0110', 'oct': '66', 'dec': '54', 'hex': '0x36', 'shortcut': '6', 'explain': '字符6' },
        { 'bin': '0011 0111', 'oct': '67', 'dec': '55', 'hex': '0x37', 'shortcut': '7', 'explain': '字符7' },
        { 'bin': '0011 1000', 'oct': '70', 'dec': '56', 'hex': '0x38', 'shortcut': '8', 'explain': '字符8' },
        { 'bin': '0011 1001', 'oct': '71', 'dec': '57', 'hex': '0x39', 'shortcut': '9', 'explain': '字符9' },
        { 'bin': '0011 1010', 'oct': '72', 'dec': '58', 'hex': '0x3A', 'shortcut': ':', 'explain': '冒号' },
        { 'bin': '0011 1011', 'oct': '73', 'dec': '59', 'hex': '0x3B', 'shortcut': ';', 'explain': '分号' },
        { 'bin': '0011 1100', 'oct': '74', 'dec': '60', 'hex': '0x3C', 'shortcut': '<', 'explain': '小于' },
        { 'bin': '0011 1101', 'oct': '75', 'dec': '61', 'hex': '0x3D', 'shortcut': '=', 'explain': '等号' },
        { 'bin': '0011 1110', 'oct': '76', 'dec': '62', 'hex': '0x3E', 'shortcut': '>', 'explain': '大于' },
        { 'bin': '0011 1111', 'oct': '77', 'dec': '63', 'hex': '0x3F', 'shortcut': '?', 'explain': '问号' },
        { 'bin': '0100 0000', 'oct': '100', 'dec': '64', 'hex': '0x40', 'shortcut': '@', 'explain': '电子邮件符号' },
        { 'bin': '0100 0001', 'oct': '101', 'dec': '65', 'hex': '0x41', 'shortcut': 'A', 'explain': '大写字母A' },
        { 'bin': '0100 0010', 'oct': '102', 'dec': '66', 'hex': '0x42', 'shortcut': 'B', 'explain': '大写字母B' },
        { 'bin': '0100 0011', 'oct': '103', 'dec': '67', 'hex': '0x43', 'shortcut': 'C', 'explain': '大写字母C' },
        { 'bin': '0100 0100', 'oct': '104', 'dec': '68', 'hex': '0x44', 'shortcut': 'D', 'explain': '大写字母D' },
        { 'bin': '0100 0101', 'oct': '105', 'dec': '69', 'hex': '0x45', 'shortcut': 'E', 'explain': '大写字母E' },
        { 'bin': '0100 0110', 'oct': '106', 'dec': '70', 'hex': '0x46', 'shortcut': 'F', 'explain': '大写字母F' },
        { 'bin': '0100 0111', 'oct': '107', 'dec': '71', 'hex': '0x47', 'shortcut': 'G', 'explain': '大写字母G' },
        { 'bin': '0100 1000', 'oct': '110', 'dec': '72', 'hex': '0x48', 'shortcut': 'H', 'explain': '大写字母H' },
        { 'bin': '0100 1001', 'oct': '111', 'dec': '73', 'hex': '0x49', 'shortcut': 'I', 'explain': '大写字母I' },
        { 'bin': '1001010', 'oct': '112', 'dec': '74', 'hex': '0x4A', 'shortcut': 'J', 'explain': '大写字母J' },
        { 'bin': '0100 1011', 'oct': '113', 'dec': '75', 'hex': '0x4B', 'shortcut': 'K', 'explain': '大写字母K' },
        { 'bin': '0100 1100', 'oct': '114', 'dec': '76', 'hex': '0x4C', 'shortcut': 'L', 'explain': '大写字母L' },
        { 'bin': '0100 1101', 'oct': '115', 'dec': '77', 'hex': '0x4D', 'shortcut': 'M', 'explain': '大写字母M' },
        { 'bin': '0100 1110', 'oct': '116', 'dec': '78', 'hex': '0x4E', 'shortcut': 'N', 'explain': '大写字母N' },
        { 'bin': '0100 1111', 'oct': '117', 'dec': '79', 'hex': '0x4F', 'shortcut': 'O', 'explain': '大写字母O' },
        { 'bin': '0101 0000', 'oct': '120', 'dec': '80', 'hex': '0x50', 'shortcut': 'P', 'explain': '大写字母P' },
        { 'bin': '0101 0001', 'oct': '121', 'dec': '81', 'hex': '0x51', 'shortcut': 'Q', 'explain': '大写字母Q' },
        { 'bin': '0101 0010', 'oct': '122', 'dec': '82', 'hex': '0x52', 'shortcut': 'R', 'explain': '大写字母R' },
        { 'bin': '0101 0011', 'oct': '123', 'dec': '83', 'hex': '0x53', 'shortcut': 'S', 'explain': '大写字母S' },
        { 'bin': '0101 0100', 'oct': '124', 'dec': '84', 'hex': '0x54', 'shortcut': 'T', 'explain': '大写字母T' },
        { 'bin': '0101 0101', 'oct': '125', 'dec': '85', 'hex': '0x55', 'shortcut': 'U', 'explain': '大写字母U' },
        { 'bin': '0101 0110', 'oct': '126', 'dec': '86', 'hex': '0x56', 'shortcut': 'V', 'explain': '大写字母V' },
        { 'bin': '0101 0111', 'oct': '127', 'dec': '87', 'hex': '0x57', 'shortcut': 'W', 'explain': '大写字母W' },
        { 'bin': '0101 1000', 'oct': '130', 'dec': '88', 'hex': '0x58', 'shortcut': 'X', 'explain': '大写字母X' },
        { 'bin': '0101 1001', 'oct': '131', 'dec': '89', 'hex': '0x59', 'shortcut': 'Y', 'explain': '大写字母Y' },
        { 'bin': '0101 1010', 'oct': '132', 'dec': '90', 'hex': '0x5A', 'shortcut': 'Z', 'explain': '大写字母Z' },
        { 'bin': '0101 1011', 'oct': '133', 'dec': '91', 'hex': '0x5B', 'shortcut': '[', 'explain': '开方括号' },
        { 'bin': '0101 1100', 'oct': '134', 'dec': '92', 'hex': '0x5C', 'shortcut': '\\', 'explain': '反斜杠' },
        { 'bin': '0101 1101', 'oct': '135', 'dec': '93', 'hex': '0x5D', 'shortcut': ']', 'explain': '闭方括号' },
        { 'bin': '0101 1110', 'oct': '136', 'dec': '94', 'hex': '0x5E', 'shortcut': '^', 'explain': '脱字符' },
        { 'bin': '0101 1111', 'oct': '137', 'dec': '95', 'hex': '0x5F', 'shortcut': '_', 'explain': '下划线' },
        { 'bin': '0110 0000', 'oct': '140', 'dec': '96', 'hex': '0x60', 'shortcut': '`', 'explain': '开单引号' },
        { 'bin': '0110 0001', 'oct': '141', 'dec': '97', 'hex': '0x61', 'shortcut': 'a', 'explain': '小写字母a' },
        { 'bin': '0110 0010', 'oct': '142', 'dec': '98', 'hex': '0x62', 'shortcut': 'b', 'explain': '小写字母b' },
        { 'bin': '0110 0011', 'oct': '143', 'dec': '99', 'hex': '0x63', 'shortcut': 'c', 'explain': '小写字母c' },
        { 'bin': '0110 0100', 'oct': '144', 'dec': '100', 'hex': '0x64', 'shortcut': 'd', 'explain': '小写字母d' },
        { 'bin': '0110 0101', 'oct': '145', 'dec': '101', 'hex': '0x65', 'shortcut': 'e', 'explain': '小写字母e' },
        { 'bin': '0110 0110', 'oct': '146', 'dec': '102', 'hex': '0x66', 'shortcut': 'f', 'explain': '小写字母f' },
        { 'bin': '0110 0111', 'oct': '147', 'dec': '103', 'hex': '0x67', 'shortcut': 'g', 'explain': '小写字母g' },
        { 'bin': '0110 1000', 'oct': '150', 'dec': '104', 'hex': '0x68', 'shortcut': 'h', 'explain': '小写字母h' },
        { 'bin': '0110 1001', 'oct': '151', 'dec': '105', 'hex': '0x69', 'shortcut': 'i', 'explain': '小写字母i' },
        { 'bin': '0110 1010', 'oct': '152', 'dec': '106', 'hex': '0x6A', 'shortcut': 'j', 'explain': '小写字母j' },
        { 'bin': '0110 1011', 'oct': '153', 'dec': '107', 'hex': '0x6B', 'shortcut': 'k', 'explain': '小写字母k' },
        { 'bin': '0110 1100', 'oct': '154', 'dec': '108', 'hex': '0x6C', 'shortcut': 'l', 'explain': '小写字母l' },
        { 'bin': '0110 1101', 'oct': '155', 'dec': '109', 'hex': '0x6D', 'shortcut': 'm', 'explain': '小写字母m' },
        { 'bin': '0110 1110', 'oct': '156', 'dec': '110', 'hex': '0x6E', 'shortcut': 'n', 'explain': '小写字母n' },
        { 'bin': '0110 1111', 'oct': '157', 'dec': '111', 'hex': '0x6F', 'shortcut': 'o', 'explain': '小写字母o' },
        { 'bin': '0111 0000', 'oct': '160', 'dec': '112', 'hex': '0x70', 'shortcut': 'p', 'explain': '小写字母p' },
        { 'bin': '0111 0001', 'oct': '161', 'dec': '113', 'hex': '0x71', 'shortcut': 'q', 'explain': '小写字母q' },
        { 'bin': '0111 0010', 'oct': '162', 'dec': '114', 'hex': '0x72', 'shortcut': 'r', 'explain': '小写字母r' },
        { 'bin': '0111 0011', 'oct': '163', 'dec': '115', 'hex': '0x73', 'shortcut': 's', 'explain': '小写字母s' },
        { 'bin': '0111 0100', 'oct': '164', 'dec': '116', 'hex': '0x74', 'shortcut': 't', 'explain': '小写字母t' },
        { 'bin': '0111 0101', 'oct': '165', 'dec': '117', 'hex': '0x75', 'shortcut': 'u', 'explain': '小写字母u' },
        { 'bin': '0111 0110', 'oct': '166', 'dec': '118', 'hex': '0x76', 'shortcut': 'v', 'explain': '小写字母v' },
        { 'bin': '0111 0111', 'oct': '167', 'dec': '119', 'hex': '0x77', 'shortcut': 'w', 'explain': '小写字母w' },
        { 'bin': '0111 1000', 'oct': '170', 'dec': '120', 'hex': '0x78', 'shortcut': 'x', 'explain': '小写字母x' },
        { 'bin': '0111 1001', 'oct': '171', 'dec': '121', 'hex': '0x79', 'shortcut': 'y', 'explain': '小写字母y' },
        { 'bin': '0111 1010', 'oct': '172', 'dec': '122', 'hex': '0x7A', 'shortcut': 'z', 'explain': '小写字母z' },
        { 'bin': '0111 1011', 'oct': '173', 'dec': '123', 'hex': '0x7B', 'shortcut': '{', 'explain': '开花括号' },
        { 'bin': '0111 1100', 'oct': '174', 'dec': '124', 'hex': '0x7C', 'shortcut': '|', 'explain': '垂线' },
        { 'bin': '0111 1101', 'oct': '175', 'dec': '125', 'hex': '0x7D', 'shortcut': '}', 'explain': '闭花括号' },
        { 'bin': '0111 1110', 'oct': '176', 'dec': '126', 'hex': '0x7E', 'shortcut': '~', 'explain': '波浪号' },
        { 'bin': '0111 1111', 'oct': '177', 'dec': '127', 'hex': '0x7F', 'shortcut': 'DEL (delete)', 'explain': '删除' }
      ]
    }
  }
}
</script>
