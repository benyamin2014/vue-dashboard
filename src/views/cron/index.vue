<template>
  <div class="app-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
       <template slot="title">
           <span style="color:red">说明</span>(点击查看)
       </template>
      <ul>
        <!-- <li><span>感谢</span></li> -->
        <li><span>1. 格式说明：Cron表达式是一个字符串，字符串以5或6个空格隔开，分为6或7个域，每一个域代表一个含义。详解如下：</span>
        <pre>
        *    *    *    *    *    *   *
        ┬    ┬    ┬    ┬    ┬    ┬   ┬
        │    │    │    │    │    |   └ year (可选)(1970~2099)(	, - * / )
        │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)(	, - * / )
        │    │    │    │    └───── month (1 - 12)(	, - * / )
        │    │    │    └────────── day of month (1 - 31)(,- * ? / L W C )
        │    │    └─────────────── hour (0 - 23)(	, - * / )
        │    └──────────────────── minute (0 - 59)(	, - * / )
        └───────────────────────── second (0 - 59) (可选)(	, - * / )
        </pre>
        <span>星期对应的单词缩写映射关系如下：</span>
        <pre>
        'SUN': 0 或 7
        'MON': 1
        'TUE': 2
        'WED': 3
        'THU': 4
        'FRI': 5
        'SAT': 6
        </pre>
        <span>特殊字符含义</span>
        <pre>
        *：表示匹配该域的任意值。假如在Minutes域使用*, 即表示每分钟都会触发事件。
        ?：只能用在DayofMonth和DayofWeek两个域。它也匹配域的任意值，但实际不会。因为DayofMonth和DayofWeek会相互影响。例如想在每月的20日触发调度，不管20日到底是星期几，则只能使用如下写法： 13 13 15 20 * ?, 其中最后一位只能用？，而不能使用*，如果使用*表示不管星期几都会触发，实际上并不是这样。
  　    -：表示范围。例如在Minutes域使用5-20，表示从5分到20分钟每分钟触发一次
        /：表示起始时间开始触发，然后每隔固定时间触发一次。例如在Minutes域使用5/20,则意味着5分钟触发一次，而25，45等分别触发一次.
        ,：表示列出枚举值。例如：在Minutes域使用5,20，则意味着在5和20分每分钟触发一次。
        L：表示最后，只能出现在DayofWeek和DayofMonth域。如果在DayofWeek域使用5L,意味着在最后的一个星期四触发。
        W:表示有效工作日(周一到周五),只能出现在DayofMonth域，系统将在离指定日期的最近的有效工作日触发事件。例如：在 DayofMonth使用5W，如果5日是星期六，则将在最近的工作日：星期五，即4日触发。如果5日是星期天，则在6日(周一)触发；如果5日在星期一到星期五中的一天，则就在5日触发。另外一点，W的最近寻找不会跨过月份 。
        LW:这两个字符可以连用，表示在某个月最后一个工作日，即最后一个星期五。
        #:用于确定每个月第几个星期几，只能出现在DayofMonth域。例如在4#2，表示某月的第二个星期三。
        </pre>

       </li>
       <li><span>2.常用表达式例子</span>
       <pre>
    　　 0 0 2 1 * ? *          表示在每月的1日的凌晨2点调整任务
    　　 0 15 10 ? * MON-FRI    表示周一到周五每天上午10:15执行作业
    　　 0 15 10 ? 6L 2002-2006 表示2002-2006年的每个月的最后一个星期五上午10:15执行作
    　　 0 0 10,14,16 * * ?     每天上午10点，下午2点，4点
    　　 0 0/30 9-17 * * ?      朝九晚五工作时间内每半小时
    　　 0 0 12 ? * WED         表示每个星期三中午12点
    　　 0 0 12 * * ?           每天中午12点触发
    　　 0 15 10 ? * *          每天上午10:15触发
    　　 0 15 10 * * ?          每天上午10:15触发
    　　 0 15 10 * * ? *        每天上午10:15触发
    　　 0 15 10 * * ? 2005     2005年的每天上午10:15触发
    　　 0 * 14 * * ?           在每天下午2点到下午2:59期间的每1分钟触发
    　　 0 0/5 14 * * ?         在每天下午2点到下午2:55期间的每5分钟触发
    　　 0 0/5 14,18 * * ?      在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发
    　　 0 0-5 14 * * ?         在每天下午2点到下午2:05期间的每1分钟触发
    　　 0 10,44 14 ? 3 WED     每年三月的星期三的下午2:10和2:44触发
    　　 0 15 10 ? * MON-FRI    周一至周五的上午10:15触发
    　　 0 15 10 15 * ?         每月15日上午10:15触发
    　　 0 15 10 L * ?          每月最后一日的上午10:15触发
    　　 0 15 10 ? * 6L         每月的最后一个星期五上午10:15触发
    　　 0 15 10 ? * 6L 2002-2005   2002年至2005年的每月的最后一个星期五上午10:15触发
    　　 0 15 10 ? * 6#3        每月的第三个星期五上午10:15触发
       </pre>
       </li>
       <li><span>注意点：</span>
       <pre>
        a.有些子表达式能包含一些范围或列表
      　　例如：子表达式（天（星期））可以为 “MON-FRI”，“MON，WED，FRI”，“MON-WED,SAT”；“*”字符代表所有可能的值
      　　因此，“*”在子表达式（月）里表示每个月的含义，“*”在子表达式（天（星期））表示星期的每一天
      　b.“/”字符用来指定数值的增量
      　　例如：在子表达式（分钟）里的“0/15”表示从第0分钟开始，每15分钟
          在子表达式（分钟）里的“3/20”表示从第3分钟开始，每20分钟（它和“3，23，43”）的含义一样
      　c.“？”字符仅被用于天（月）和天（星期）两个子表达式，表示不指定值
      　　当2个子表达式其中之一被指定了值以后，为了避免冲突，需要将另一个子表达式的值设为“？”
      　d.“L” 字符仅被用于天（月）和天（星期）两个子表达式，它是单词“last”的缩写
      　　但是它在两个子表达式里的含义是不同的。
      　　在天（月）子表达式中，“L”表示一个月的最后一天
      　　在天（星期）自表达式中，“L”表示一个星期的最后一天，也就是SAT
      　　如果在“L”前有具体的内容，它就具有其他的含义了
      　　例如：“6L”表示这个月的倒数第６天，“FRIL”表示这个月的最一个星期五
      　　注意：在使用“L”参数时，不要指定列表或范围，因为这会导致问题
       </pre>
       </li>
      </ul>

      </el-collapse-item>
      <el-collapse-item title="Cron表达式" name="2">
          <el-tabs v-model="activeName">
              <el-tab-pane label="Cron表达式生成器" name="first">
                      <Form :model="formData" :rules="formDataValidator" :label-width="80">
                          <FormItem prop="cronValue">
                            <easy-cron style="width: 800px;" v-model="formData.cronValue3"></easy-cron>
                          </FormItem>
                      </Form>
              </el-tab-pane>
              <el-tab-pane label="Cron校验器" name="second">
               <el-form>
               <el-form-item label="表达式">
                  <el-col :span="4">
                  <el-input v-model="formData.cronExp" @change="validate" placeholder="0/5 * * * * ?" ></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item>
                <span>测试结果:</span>
                <pre>
{{vList}}
                </pre>
                </el-form-item>

                </el-form>
              </el-tab-pane>
            </el-tabs>
      </el-collapse-item>

    </el-collapse>

  </div>
</template>

<script>
import EasyCron from '@/components/EasyCron'
import CronValidator from '@/components/EasyCron/validator'
// import InputCron from '@/components/EasyCron/input-cron'
import CronParser from 'cron-parser'
import dateFormat from '@/components/EasyCron/format-date'


export default {
  components: {  EasyCron },
  data() {
    return {
      activeName: 'first',
      activeNames: ['2'],
      vList: '',
      formData: {
        cronExp: '',
        cronValue1: '',
        cronValue3: '0/1 * * * * ? *'
      },
      formDataValidator: {
        cronValue: [
          { validator: CronValidator }
        ]
      }
    }
  },
   methods: {
     validate() {
        var options = {
            currentDate: new Date()
          };
        let format = 'yyyy-MM-dd hh:mm:ss'
          try {
           console.log(this.formData.cronExp)
            var iter = CronParser.parseExpression(this.formData.cronExp, options);
            let result = []
            for(var i=0;i<5;i++) {
              let d = dateFormat(new Date(iter.next()), format);
              result.push(d)
            }
            this.vList = result.length > 0 ? result.join('\n') : '无执行时间'
          } catch (err) {
            this.vList = err
            console.log(err)
          }
     }


   }
}
</script>
