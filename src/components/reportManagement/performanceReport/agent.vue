<template>
    <div class="agent">
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
                        <!-- 导航 -->
                        <ul class="nav">
                            <li @click="visitor">访问员绩效</li>
                            <li @click="agent" class="active">代理绩效</li>
                            <li @click="examine">审核绩效</li>
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
  name: 'agent',
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
    //表格内容
        columns10: [
            {
                title: '区域',
                key: '区域'
            },
            {
                title: '代理名称',
                key: '代理名称'
            },
            {
                title: '项目名称',
                key: '项目名称',
                sortable: true
            },
            {
                title: '开始时间',
                key: '开始时间',
                sortable: true
            },
                        {
                title: '结束时间',
                key: '结束时间',               
            },
            {
                title: '每天完成数量',
                key: '每天完成数量',
                
            },
            {
                title: '退回比例',
                key: '退回比例',
                             
            },
            {
                title: '退回完成率',
                key: '退回完成率',
                
            },
                        {
                title: '实际录入数量',
                key: '实际录入数量',
                
            },
            {
                title: '修改数量',
                key: '修改数量',               
            }
        ],
        data10: [
            {
                区域: 'John Brown',
                代理名称: 18,
                项目名称: 'New York No. 1 Lake Park',
                开始时间: 55,
                结束时间: 23,
                每天完成数量: 88,
                退回比例:77,
                退回完成率:9,
                实际录入数量:88,
                修改数量:8
            },
            {
                区域: 'John Brown',
                代理名称: 18,
                项目名称: 'New York No. 1 Lake Park',
                开始时间: 55,
                结束时间: 23,
                每天完成数量: 88,
                退回比例:77,
                退回完成率:9,
                实际录入数量:88,
                修改数量:8
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
    .agent{
        .content{height: 600px;
            .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding-left:10px;display:flex;justify-content: space-between;align-items:center;margin-bottom: 10px;
                span:nth-child(2){display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
            }
            .nav{display: flex; width: 600px; height: 40px; text-align: center; line-height: 40px; color: white;
                li{display:block; width: 200px; height: 40px; background: #cccccc;}
                li:hover{background: #5BB85D;}
                .active{background: #5BB85D;}
            }
        }
    }
</style>