// <template>
    <div class="visitor">
      <Layout :style="{marginLeft: '200px'}" >            
            <Content :style="{padding: '0 16px 16px'}">
                <Card>
                    <div style="height: 600px">
                        <div class="title"><span>条件筛选</span></div>
                        <div>                             
                            <Select v-model="model1" style="width:150px" placeholder="省">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Select v-model="model1" style="width:150px" placeholder="市">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Select v-model="model1" style="width:150px" placeholder="县/区">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Select v-model="model1" style="width:100px" placeholder="代理状态">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>&nbsp;&nbsp;
                            <Button type="success">&nbsp;&nbsp;搜索&nbsp;&nbsp;</Button>
                        </div>
                        <br/>
                        <!-- 下表 -->
                        <div class="title">
                            <span>列表状态</span>
                            <el-button type="info">导出表格</el-button>
                        </div>
                        <!-- 导航 -->
                        <ul class="nav">
                            <li @click="visitor">访问员绩效</li>
                            <li @click="agent">代理绩效</li>
                            <li @click="examine" class="active">审核绩效</li>
                        </ul>
                        <!-- 表格 -->
                        <Table border :columns="columns10" :data="data10"></Table>

                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'visitor',
  data () {
    return {
    // 筛选框内容
       cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                ],
                model1: '',
                textarea2: '',
                textarea3: '',
                value:'',
                value2:"" ,
        // 表格内容
        columns10: [
            {
                title: '审核职位',
                key: '审核职位'
            },
            {
                title: '用户名',
                key: '用户名'
            },
            {
                title: '手机号',
                key: '手机号',
            },
            {
                title: '审核完成数量',
                key: '审核完成数量',
                sortable: true
            },
            {
                title: '一审自动审核数',
                key: '一审自动审核数', 
                sortable: true              
            },
            {
                title: '批量审核数量',
                key: '批量审核数量',
                sortable: true 
            },
            {
                title: '单项审核数量',
                key: '单项审核数量',
                sortable: true                
            },
            {
                title: '有效审核数量',
                key: '有效审核数量',
                sortable: true 
            },
            {
                title: '退回数量',
                key: '退回数量',
                sortable: true 
            }
        ],
        data10: [
            {
                审核职位: 'John Brown',
                用户名: 18,
                手机号: 'New York No. 1 Lake Park',
                审核完成数量: 55,
                一审自动审核数: 23,
                批量审核数量: 88,
                单项审核数量:77,
                有效审核数量:9,
                退回数量:44
            },
            {
                审核职位: 'John Brown',
                用户名: 18,
                手机号: 'New York No. 1 Lake Park',
                审核完成数量: 55,
                一审自动审核数: 23,
                批量审核数量: 84,
                单项审核数量:75,
                有效审核数量:9,
                退回数量:44
            },
        ]
    }
  },
  methods:{
        visitor(){
            this.$router.push("/performanceReportVisitor");            
        },
        agent(){
            this.$router.push("/performanceReportAgent")
        },
        examine(){
            this.$router.push("/performanceReportExamine")
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding-left:10px;display:flex;justify-content: space-between;align-items:center;margin-bottom: 10px;
        span:nth-child(2){display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
    }
    table{text-align: center;
   td{height: 25px}
  }
.header{background: #1D95C9;color: #fff}
    .nav{display: flex; width: 600px; height: 40px; text-align: center; line-height: 40px; color: white}
    .nav li{display:block; width: 200px; height: 40px; background: #cccccc;}
    .nav li:hover{background: #5BB85D;}
    .nav .active{background: #5BB85D;}  
</style>