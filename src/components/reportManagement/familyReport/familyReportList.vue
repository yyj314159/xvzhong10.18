<template>
    <div class="familyReportList">
      <Layout :style="{marginLeft: '200px'}" >            
            <Content :style="{padding: '0 16px 16px'}">
                <Card>
                    <div class="content">
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
                        <!-- 表格 -->
                        <Table border :columns="columns6" :data="data6" ></Table>                       
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'familyReportList',
  data () {
    return {
        // 选择列表
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
                value:"",
                value2:"" ,
        // 表格数据
        columns6: [
            {
                title: '项目名称',
                key: '项目名称'
            },
            {
                title: '报告状态',
                key: '报告状态'
            },
            {
                title: '得分状态',
                key: '得分状态'
            },
            {
                title: '调研对象数量',
                key: '调研对象数量',               
            },
            {
                title: '调研产品数量',
                key: '调研产品数量',               
            },
            {
                title: '详情',
                key: '详情', 
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
        data6: [
            {
                项目名称: 'John Brown',
                报告状态: 18,
                得分状态:999,
                调研对象数量: 'New York No. 1 Lake Park',
                调研产品数量: 55,
                详情: "查看"
            },
        ]
            
    }
  },
    methods: {
        show (index) {
            this.$router.push("/districtReport")
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.familyReportList{
    .content{height: 600px;
        .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding-left:10px;display:flex;justify-content: space-between;align-items:center;margin-bottom: 10px;
            span:nth-child(2){display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
        }
    }
}
</style>