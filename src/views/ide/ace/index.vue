<template>
  <div class="app-container">
    <el-form>
        <el-row>
        <el-col :span="4">
        <el-form-item label="语言">
          <el-select class="value" v-model="modePath" @change="handleModelPathChange" size="mini" value-key="name">
            <el-option v-for="mode in modeArray"
                       :key="mode.name"
                       :label="mode.name"
                       :value="mode.path">
            </el-option>
          </el-select>
        </el-form-item>
        </el-col>
        <el-col :span="4">
        <el-form-item label="换行">

          <el-select class="value" v-model="wrap" @change="handleWrapChange" size="mini" value-key="name">
            <el-option v-for="wrap in wrapArray"
                       :key="wrap.name"
                       :label="wrap.name"
                       :value="wrap.value">
            </el-option>
          </el-select>
        </el-form-item>
        </el-col>
        </el-row>
        <el-row>
        <el-form-item>
        <el-col :span="20">
        <div class="ace-editor" ref="ace"></div>
        </el-col>

        </el-form-item>
      </el-row>
    </el-form>


  </div>
</template>

<script>

import ace from 'ace-builds'
import 'ace-builds/webpack-resolver' // 在 webpack 环境中使用必须要导入
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
/**
import 'ace-builds/src-noconflict/mode-abap.js'
import 'ace-builds/src-noconflict/mode-abc.js'
import 'ace-builds/src-noconflict/mode-actionscript.js'
import 'ace-builds/src-noconflict/mode-ada.js'
import 'ace-builds/src-noconflict/mode-apache_conf.js'
import 'ace-builds/src-noconflict/mode-apex.js'
import 'ace-builds/src-noconflict/mode-applescript.js'
import 'ace-builds/src-noconflict/mode-aql.js'
import 'ace-builds/src-noconflict/mode-asciidoc.js'
import 'ace-builds/src-noconflict/mode-asl.js'
import 'ace-builds/src-noconflict/mode-assembly_x86.js'
import 'ace-builds/src-noconflict/mode-autohotkey.js'
import 'ace-builds/src-noconflict/mode-batchfile.js'
import 'ace-builds/src-noconflict/mode-bro.js'
import 'ace-builds/src-noconflict/mode-c9search.js'
import 'ace-builds/src-noconflict/mode-c_cpp.js'
import 'ace-builds/src-noconflict/mode-cirru.js'
import 'ace-builds/src-noconflict/mode-clojure.js'
import 'ace-builds/src-noconflict/mode-cobol.js'
import 'ace-builds/src-noconflict/mode-coffee.js'
import 'ace-builds/src-noconflict/mode-coldfusion.js'
import 'ace-builds/src-noconflict/mode-crystal.js'
import 'ace-builds/src-noconflict/mode-csharp.js'
import 'ace-builds/src-noconflict/mode-csound_document.js'
import 'ace-builds/src-noconflict/mode-csound_orchestra.js'
import 'ace-builds/src-noconflict/mode-csound_score.js'
import 'ace-builds/src-noconflict/mode-csp.js'
import 'ace-builds/src-noconflict/mode-css.js'
import 'ace-builds/src-noconflict/mode-curly.js'
import 'ace-builds/src-noconflict/mode-d.js'
import 'ace-builds/src-noconflict/mode-dart.js'
import 'ace-builds/src-noconflict/mode-diff.js'
import 'ace-builds/src-noconflict/mode-django.js'
import 'ace-builds/src-noconflict/mode-dockerfile.js'
import 'ace-builds/src-noconflict/mode-dot.js'
import 'ace-builds/src-noconflict/mode-drools.js'
import 'ace-builds/src-noconflict/mode-edifact.js'
import 'ace-builds/src-noconflict/mode-eiffel.js'
import 'ace-builds/src-noconflict/mode-ejs.js'
import 'ace-builds/src-noconflict/mode-elixir.js'
import 'ace-builds/src-noconflict/mode-elm.js'
import 'ace-builds/src-noconflict/mode-erlang.js'
import 'ace-builds/src-noconflict/mode-forth.js'
import 'ace-builds/src-noconflict/mode-fortran.js'
import 'ace-builds/src-noconflict/mode-fsharp.js'
import 'ace-builds/src-noconflict/mode-fsl.js'
import 'ace-builds/src-noconflict/mode-ftl.js'
import 'ace-builds/src-noconflict/mode-gcode.js'
import 'ace-builds/src-noconflict/mode-gherkin.js'
import 'ace-builds/src-noconflict/mode-gitignore.js'
import 'ace-builds/src-noconflict/mode-glsl.js'
import 'ace-builds/src-noconflict/mode-gobstones.js'
import 'ace-builds/src-noconflict/mode-golang.js'
import 'ace-builds/src-noconflict/mode-graphqlschema.js'
import 'ace-builds/src-noconflict/mode-groovy.js'
import 'ace-builds/src-noconflict/mode-haml.js'
import 'ace-builds/src-noconflict/mode-handlebars.js'
import 'ace-builds/src-noconflict/mode-haskell.js'
import 'ace-builds/src-noconflict/mode-haskell_cabal.js'
import 'ace-builds/src-noconflict/mode-haxe.js'
import 'ace-builds/src-noconflict/mode-hjson.js'
import 'ace-builds/src-noconflict/mode-html.js'
import 'ace-builds/src-noconflict/mode-html_elixir.js'
import 'ace-builds/src-noconflict/mode-html_ruby.js'
import 'ace-builds/src-noconflict/mode-ini.js'
import 'ace-builds/src-noconflict/mode-io.js'
import 'ace-builds/src-noconflict/mode-jack.js'
import 'ace-builds/src-noconflict/mode-jade.js'
import 'ace-builds/src-noconflict/mode-java.js'
import 'ace-builds/src-noconflict/mode-javascript.js'
import 'ace-builds/src-noconflict/mode-json.js'
import 'ace-builds/src-noconflict/mode-jsoniq.js'
import 'ace-builds/src-noconflict/mode-jsp.js'
import 'ace-builds/src-noconflict/mode-jssm.js'
import 'ace-builds/src-noconflict/mode-jsx.js'
import 'ace-builds/src-noconflict/mode-julia.js'
import 'ace-builds/src-noconflict/mode-kotlin.js'
import 'ace-builds/src-noconflict/mode-latex.js'
import 'ace-builds/src-noconflict/mode-less.js'
import 'ace-builds/src-noconflict/mode-liquid.js'
import 'ace-builds/src-noconflict/mode-lisp.js'
import 'ace-builds/src-noconflict/mode-livescript.js'
import 'ace-builds/src-noconflict/mode-logiql.js'
import 'ace-builds/src-noconflict/mode-logtalk.js'
import 'ace-builds/src-noconflict/mode-lsl.js'
import 'ace-builds/src-noconflict/mode-lua.js'
import 'ace-builds/src-noconflict/mode-luapage.js'
import 'ace-builds/src-noconflict/mode-lucene.js'
import 'ace-builds/src-noconflict/mode-makefile.js'
import 'ace-builds/src-noconflict/mode-markdown.js'
import 'ace-builds/src-noconflict/mode-mask.js'
import 'ace-builds/src-noconflict/mode-matlab.js'
import 'ace-builds/src-noconflict/mode-maze.js'
import 'ace-builds/src-noconflict/mode-mel.js'
import 'ace-builds/src-noconflict/mode-mixal.js'
import 'ace-builds/src-noconflict/mode-mushcode.js'
import 'ace-builds/src-noconflict/mode-mysql.js'
import 'ace-builds/src-noconflict/mode-nginx.js'
import 'ace-builds/src-noconflict/mode-nim.js'
import 'ace-builds/src-noconflict/mode-nix.js'
import 'ace-builds/src-noconflict/mode-nsis.js'
import 'ace-builds/src-noconflict/mode-objectivec.js'
import 'ace-builds/src-noconflict/mode-ocaml.js'
import 'ace-builds/src-noconflict/mode-pascal.js'
import 'ace-builds/src-noconflict/mode-perl.js'
import 'ace-builds/src-noconflict/mode-perl6.js'
import 'ace-builds/src-noconflict/mode-pgsql.js'
import 'ace-builds/src-noconflict/mode-php.js'
import 'ace-builds/src-noconflict/mode-php_laravel_blade.js'
import 'ace-builds/src-noconflict/mode-pig.js'
import 'ace-builds/src-noconflict/mode-plain_text.js'
import 'ace-builds/src-noconflict/mode-powershell.js'
import 'ace-builds/src-noconflict/mode-praat.js'
import 'ace-builds/src-noconflict/mode-prolog.js'
import 'ace-builds/src-noconflict/mode-properties.js'
import 'ace-builds/src-noconflict/mode-protobuf.js'
import 'ace-builds/src-noconflict/mode-puppet.js'
import 'ace-builds/src-noconflict/mode-python.js'
import 'ace-builds/src-noconflict/mode-r.js'
import 'ace-builds/src-noconflict/mode-razor.js'
import 'ace-builds/src-noconflict/mode-rdoc.js'
import 'ace-builds/src-noconflict/mode-red.js'
import 'ace-builds/src-noconflict/mode-redshift.js'
import 'ace-builds/src-noconflict/mode-rhtml.js'
import 'ace-builds/src-noconflict/mode-rst.js'
import 'ace-builds/src-noconflict/mode-ruby.js'
import 'ace-builds/src-noconflict/mode-rust.js'
import 'ace-builds/src-noconflict/mode-sass.js'
import 'ace-builds/src-noconflict/mode-scad.js'
import 'ace-builds/src-noconflict/mode-scala.js'
import 'ace-builds/src-noconflict/mode-scheme.js'
import 'ace-builds/src-noconflict/mode-scss.js'
import 'ace-builds/src-noconflict/mode-sh.js'
import 'ace-builds/src-noconflict/mode-sjs.js'
import 'ace-builds/src-noconflict/mode-slim.js'
import 'ace-builds/src-noconflict/mode-smarty.js'
import 'ace-builds/src-noconflict/mode-snippets.js'
import 'ace-builds/src-noconflict/mode-soy_template.js'
import 'ace-builds/src-noconflict/mode-space.js'
import 'ace-builds/src-noconflict/mode-sparql.js'
import 'ace-builds/src-noconflict/mode-sql.js'
import 'ace-builds/src-noconflict/mode-sqlserver.js'
import 'ace-builds/src-noconflict/mode-stylus.js'
import 'ace-builds/src-noconflict/mode-svg.js'
import 'ace-builds/src-noconflict/mode-swift.js'
import 'ace-builds/src-noconflict/mode-tcl.js'
import 'ace-builds/src-noconflict/mode-terraform.js'
import 'ace-builds/src-noconflict/mode-tex.js'
import 'ace-builds/src-noconflict/mode-text.js'
import 'ace-builds/src-noconflict/mode-textile.js'
import 'ace-builds/src-noconflict/mode-toml.js'
import 'ace-builds/src-noconflict/mode-tsx.js'
import 'ace-builds/src-noconflict/mode-turtle.js'
import 'ace-builds/src-noconflict/mode-twig.js'
import 'ace-builds/src-noconflict/mode-typescript.js'
import 'ace-builds/src-noconflict/mode-vala.js'
import 'ace-builds/src-noconflict/mode-vbscript.js'
import 'ace-builds/src-noconflict/mode-velocity.js'
import 'ace-builds/src-noconflict/mode-verilog.js'
import 'ace-builds/src-noconflict/mode-vhdl.js'
import 'ace-builds/src-noconflict/mode-visualforce.js'
import 'ace-builds/src-noconflict/mode-wollok.js'
import 'ace-builds/src-noconflict/mode-xml.js'
import 'ace-builds/src-noconflict/mode-xquery.js'
import 'ace-builds/src-noconflict/mode-yaml.js'
import 'ace-builds/src-noconflict/mode-zeek.js'
**/
export default {
  mounted () {
      this.aceEditor = ace.edit(this.$refs.ace, {
        maxLines: 40, // 最大行数，超过会自动出现滚动条
        minLines: 40, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
        fontSize: 14, // 编辑器内字体大小
        theme: this.themePath, // 默认设置的主题
        mode: this.modePath, // 默认设置的语言模式
        tabSize: 4 // 制表符设置为 4 个空格大小
      })

      this.aceEditor.setOptions({
          enableSnippets: true,
          enableLiveAutocompletion: true,
          enableBasicAutocompletion: true
      })

      this.aceEditor.getSession().on('change', this.change)

    },
  data() {
    return {
        aceEditor: null,
        themePath: 'ace/theme/monokai', // 不导入 webpack-resolver，该模块路径会报错
        modePath: 'ace/mode/javascript', // 同
        wrap: false,

        wrapArray : [{
            name: '开启',
            value: true
        }, {
            name: '关闭',
            value: false
        }],

        modeArray : [{
            name: 'JavaScript',
            path: 'ace/mode/javascript'
        }, {
            name: 'HTML',
            path: 'ace/mode/html'
        }, {
            name: 'Freemarker',
            path: 'ace/mode/ftl'
        } , {
            name: 'Velocity',
            path: 'ace/mode/velocity'
        }, {
            name: 'CSS',
            path: 'ace/mode/css'
        }, {
            name: 'SCSS',
            path: 'ace/mode/scss'
        }, {
            name: 'Json',
            path: 'ace/mode/json'
        }, {
            name: 'Xml',
            path: 'ace/mode/xml'
        }, {
            name: 'Yaml',
            path: 'ace/mode/yaml'
        }, {
            name: 'Properties',
            path: 'ace/mode/properties'
        }, {
            name: 'Java',
            path: 'ace/mode/java'
        }, {
            name: 'Kotlin',
            path: 'ace/mode/kotlin'
        }, {
            name: 'Swift',
            path: 'ace/mode/swift'
        }, {
            name: 'Ruby',
            path: 'ace/mode/ruby'
        }, {
            name: 'Scala',
            path: 'ace/mode/scala'
        }, {
            name: 'Python',
            path: 'ace/mode/python'
        }, {
            name: 'Go',
            path: 'ace/mode/golang'
        }, {
            name: 'Erlang',
            path: 'ace/mode/erlang'
        }, {
            name: 'Protobuf',
            path: 'ace/mode/protobuf'
        }, {
            name: 'sh',
            path: 'ace/mode/sh'
        }
        ]


    }
  },
  methods: {
      handleModelPathChange (modelPath) {
          console.log(modelPath)
          this.aceEditor.getSession().setMode(modelPath)
      },
      handleWrapChange (wrap) {
          this.aceEditor.getSession().setUseWrapMode(wrap)
      },

      change () {
          console.log(this.aceEditor.getSession().getValue())
          this.$emit('input', this.aceEditor.getSession().getValue())
      }

  }
}
</script>
