<template>
    <div class="visitor">
      <Layout :style="{marginLeft: '200px'}" >            
            <Content :style="{padding: '0 16px 16px'}">
                <Card>
                    <div style="height: 600px">
                        <div class="title"><span>条件筛选</span></div>
                        <div>                             
                            <Select v-model="model1" style="width:150px" placeholder="区域代理">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>&nbsp;
                            <Select v-model="model1" style="width:150px" placeholder="项目名称">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>&nbsp;
                            <Select v-model="model1" style="width:150px" placeholder="任务状态">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>&nbsp;
                            <Select v-model="model1" style="width:150px" placeholder="审核状态">
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
                        <!-- 表格 -->
                        <Table border :columns="columns7" :data="data7"></Table>

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
        columns7: [
            {
                title: '调研对象',
                key: '调研对象'
            },
            {
                title: '调研编号',
                key: '调研编号'
            },
            {
                title: '访问员账号',
                key: '访问员账号',
            },
            {
                title: '任务状态',
                key: '任务状态',               
            },
            {
                title: '审核状态',
                key: '审核状态',                              
            },
            {
                title: '截至日期',
                key: '截至日期',
                sortable: true 
            },
            {
                title: '操作',
                key: '操作', 
                render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看')
                    ])             
                }                              
            }
        ],
        data7: [
            {
                调研对象: 'John Brown',
                调研编号: 18,
                访问员账号: 999999,
                任务状态: "完成",
                审核状态: "未完成",
                截至日期: "18-12",
                操作:"查看",
            }
        ]
    }
  },
  methods:{
    show (index) {
            this.$router.push("/projectDetail")  // 跳转到相应项目的位置
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
 
</style>