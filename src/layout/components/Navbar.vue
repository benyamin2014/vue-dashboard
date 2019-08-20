<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="/dashboard">主页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">模拟工具</template>
        <el-menu-item index="/tools/idcard">身份证模拟器</el-menu-item>
        <el-menu-item index="/tools/color">取色板</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">加密编码</template>
        <el-menu-item index="/enc/base64">Base64编码</el-menu-item>
        <el-menu-item index="/enc/urlencode">urlencode编码</el-menu-item>
        <el-submenu index="3-3">
          <template slot="title">签名</template>
          <el-menu-item index="/enc/md5">md5</el-menu-item>
          <el-menu-item index="/enc/hmac">hmac</el-menu-item>
        </el-submenu>
        <el-menu-item index="/enc/symmetry">对称加解密</el-menu-item>
        <el-submenu index="3-4">
          <template slot="title">非对称加解密</template>
          <el-menu-item index="/enc/rsasign">RSA签名</el-menu-item>
          <el-menu-item index="/enc/rsaenc">RSA加解密</el-menu-item>
        </el-submenu>

      </el-submenu>
      <el-submenu index="4">
        <template slot="title">格式化</template>
        <el-submenu index="4-1">
          <template slot="title">JSON</template>
          <el-menu-item index="/format/jsonvalidator">JSON验证器</el-menu-item>
          <el-menu-item><a href="https://jsoneditoronline.org/" target="_blank">JSON编辑器</a></el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">转换工具</template>
        <el-menu-item index="/transfer/cron">cron表达式</el-menu-item>
        <el-menu-item index="/transfer/unix">Unix时间戳</el-menu-item>
        <el-menu-item index="/transfer/imgtob64">图片转Base64</el-menu-item>
        <el-menu-item index="/transfer/b64toimg">Base64转图片</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">前端资源</template>
        <el-submenu index="6-1">
          <template slot="title">VUE</template>
          <el-menu-item><a href="https://element.eleme.io/#/zh-CN" target="_blank">Element</a></el-menu-item>
          <el-menu-item><a href="https://panjiachen.github.io/vue-element-admin-site/zh/" target="_blank">vue-element-admin</a></el-menu-item>
        </el-submenu>
        <el-submenu index="6-2">
          <template slot="title">加密插件</template>
          <el-menu-item><a href="https://github.com/brix/crypto-js" target="_blank">crypto-js</a></el-menu-item>
          <el-menu-item><a href="https://github.com/kjur/jsrsasign" target="_blank">jsrsasign</a></el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">对照表</template>
        <el-menu-item index="/doc/ascii">Ascii码</el-menu-item>
        <el-menu-item index="/doc/htmlescape">HTML转义符</el-menu-item>
        <el-menu-item index="/doc/httpstatus">HTTP状态码</el-menu-item>
        <el-menu-item index="/doc/httpcontent">MIME类型</el-menu-item>
        <!-- 暂时屏蔽
        <el-menu-item index="/ide/ace">在线编辑器</el-menu-item>
        -->
      </el-submenu>


     <el-submenu index="8">
        <template slot="title">平台工具</template>
        <el-submenu index="8-1">
          <template slot="title">微信</template>

          <el-menu-item><a href="https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index" target="_blank">微信公众平台沙箱环境</a></el-menu-item>
          <el-menu-item><a href="https://mp.weixin.qq.com/debug" target="_blank">微信公众平台接口调试工具</a></el-menu-item>
          <el-menu-item><a href="https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=cardsign" target="_blank">微信卡券JSAPI签名校验工具</a></el-menu-item>
          <el-menu-item><a href="https://pay.weixin.qq.com/wiki/tools/signverify/" target="_blank">微信公众平台支付接口调试工具</a></el-menu-item>
          <el-menu-item><a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=20_1" target="_blank">微信支付接口签名校验工具</a></el-menu-item>
          <el-menu-item><a href="https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign" target="_blank">微信 JS 接口签名校验工具</a></el-menu-item>
          <el-menu-item><a href="https://qy.weixin.qq.com/cgi-bin/debug" target="_blank">微信企业号接口调试工具</a></el-menu-item>
        </el-submenu>
        <el-submenu index="8-2">
          <template slot="title">支付宝</template>
          <el-menu-item><a href="https://sandbox.alipaydev.com/user/accountDetails.htm?currentBar=1" target="_blank">沙箱应用</a></el-menu-item>
          <el-menu-item><a href="https://openmonitor.alipay.com/acceptance/cloudparse.htm" target="_blank">联调日志排查</a></el-menu-item>
          <el-menu-item><a href="https://openmonitor.alipay.com/acceptance/troubleshoot.htm" target="_blank">云排查</a></el-menu-item>
        </el-submenu>
        <el-submenu index="8-4">
          <template slot="title">淘宝</template>
          <el-menu-item><a href="https://open.taobao.com/apitools/sessionPage.htm" target="_blank">SessionKey获取辅助工具</a></el-menu-item>
          <el-menu-item><a href="https://open.taobao.com/apitools/apiTools.htm" target="_blank">淘宝API测试工具</a></el-menu-item>
          <el-menu-item><a href="https://open.taobao.com/apitools/errorCodeSearch.htm" target="_blank">错误码自查工具</a></el-menu-item>
          <el-menu-item><a href="https://open.taobao.com/apitools/apiPropTools.htm" target="_blank">淘宝商品属性工具</a></el-menu-item>

        </el-submenu>
        <el-submenu index="8-5">
          <template slot="title">新浪</template>
          <el-menu-item><a href="https://open.weibo.com/tools/console" target="_blank">新浪微博API测试工具</a></el-menu-item>
        </el-submenu>
      </el-submenu>


      <el-submenu index="9">
        <template slot="title">在线文档</template>
        <el-submenu index="9-1">
          <template slot="title">微信</template>
          <el-menu-item><a href="https://open.weixin.qq.com/cgi-bin/index?t=home/index&lang=zh_CN" target="_blank">微信开放平台</a></el-menu-item>
          <el-menu-item><a href="https://mp.weixin.qq.com/" target="_blank">微信公众平台</a></el-menu-item>
          <el-menu-item><a href="https://developers.weixin.qq.com/community/develop/mixflow" target="_blank">微信开放社区</a></el-menu-item>
        </el-submenu>
        <el-submenu index="9-2">
          <template slot="title">支付宝</template>
          <el-menu-item><a href="https://docs.open.alipay.com/api" target="_blank">蚂蚁金服开放平台</a></el-menu-item>
        </el-submenu>
        <el-submenu index="9-3">
          <template slot="title">百度</template>
          <el-menu-item><a href="https://console.bce.baidu.com/?fromai=1#/aip/overview" target="_blank">百度开放平台</a></el-menu-item>
        </el-submenu>
        <el-submenu index="9-4">
          <template slot="title">淘宝</template>
          <el-menu-item><a href="https://open.taobao.com/api.htm?docId=285&docType=2" target="_blank">淘宝开发平台</a></el-menu-item>
        </el-submenu>
        <el-submenu index="9-5">
          <template slot="title">新浪</template>
          <el-menu-item><a href="https://open.weibo.com/wiki/%E9%A6%96%E9%A1%B5" target="_blank">微博开放平台</a></el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './Sidebar/SidebarItem'

export default {
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    elementui() {
      return elementui
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
