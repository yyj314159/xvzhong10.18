<template>
    <div class="visitor">
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
                            <li @click="visitor" class="active">访问员绩效</li>
                            <li @click="agent">代理绩效</li>
                            <li @click="examine">审核绩效</li>
                        </ul>
                        <!-- 表格 -->
                        <Table border :columns="columns10" :data="data10" ></Table>
                        
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
                title: '归属代理',
                key: '归属代理'
            },
            {
                title: '用户名',
                key: '用户名'
            },
            {
                title: '手机号',
                key: '手机号'
            },
            {
                title: '完成工作数量',
                key: '完成工作数量',
                sortable: true
            },
            {
                title: '有效工作时长',
                key: '有效工作时长',
                sortable: true
            },
                        {
                title: '实际照片数量',
                key: '实际照片数量',               
            },
            {
                title: '实际问题照片数量',
                key: '实际问题照片数量'
            },
            {
                title: '实际扫码数量',
                key: '实际扫码数量'               
            },
            {
                title: '实际录音数量',
                key: '实际录音数量'
            }
        ],
        data10: [
            {
                归属代理: 'John Brown',
                用户名: 18,
                手机号:999,
                完成工作数量: 'New York No. 1 Lake Park',
                有效工作时长: 55,
                实际照片数量: 23,
                实际问题照片数量: 88,
                实际扫码数量:77,
                实际录音数量:9
            },
                        {
                归属代理: 'John Brown',
                用户名: 18,
                手机号:999,
                完成工作数量: 'New York No. 1 Lake Park',
                有效工作时长: 67,
                实际照片数量: 27,
                实际问题照片数量: 89,
                实际扫码数量:70,
                实际录音数量:19
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
    .visitor{
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