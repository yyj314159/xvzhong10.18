<template>
    <div class="accountError">
      <Layout :style="{marginLeft: '200px'}" >            
            <Content :style="{padding: '0 16px 16px'}">
                <Card>
                    <div class="content">
                        <br/>
                        <!-- 下表 -->
                        <div class="title">
                            <!-- 导航 -->
                            <ul class="nav">
                                <li @click="feedBack" >消息反馈</li>
                                <li @click="accountError" class="active">账号异常</li>
                            </ul>
                            <el-button type="info">导出表格</el-button>
                        </div>
                         <div class="select">                             
                            <Row>
                                <Col span="12">
                                    <DatePicker type="date" placeholder="开始日期" style="width: 200px"></DatePicker>
                                </Col>
                                <Col span="12">
                                    <DatePicker type="date" placeholder="截止日期" style="width: 200px"></DatePicker>
                                </Col>
                            </Row>&nbsp;&nbsp;
                            <Select v-model="model1" style="width:100px" placeholder="报告名称">
                                <Option v-for="item in reportList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>&nbsp;                           
                            <Button type="success">&nbsp;&nbsp;搜索&nbsp;&nbsp;</Button>
                        </div>
                        <!-- 表格 -->
                        <Table border :columns="columns8" :data="data8"></Table>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'accountError',
  data () {
    return {
    // 筛选框内容
       reportList: [
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
        columns8: [
            {
                title: '项目名称',
                key: '项目名称'
            },
            {
                title: '地区',
                key: '地区'
            },
            {
                title: '调研对象',
                key: '调研对象',
                
            },
            {
                title: '调研编号',
                key: '调研编号',
                
            },
            {
                title: '区域代理人',
                key: '区域代理人',               
            },
            {
                title: '录入人员',
                key: '录入人员',
                
            },
            {
                title: '录入人员IP数量',
                key: '录入人员IP数量',
                             
            },
            {
                title: '绑定手机号',
                key: '绑定手机号',               
            },
        ],
        data8: [
            {
                项目名称: 'John Brown',
                地区: 18,
                调研对象: 'New York No. 1 Lake Park',
                调研编号: 55,
                区域代理人: 23,
                录入人员: 88,
                录入人员IP数量:77,
                绑定手机号:9,
            },
        ]
    }
  },
  methods:{
        feedBack(){
            this.$router.push("/feedBack");            
        },
        accountError(){
            this.$router.push("/accountError")
        },

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.accountError{
    .content{
        .title{width: 100%;height: 40px;background: #cccccc;line-height: 40px;color: #fff; display:flex;justify-content: space-between;align-items:center;margin-bottom: 10px;
            span:nth-child{display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
            .nav{display: flex; width: 600px; height: 40px; text-align: center; line-height: 40px; color: white;
                li{display:block; width: 200px; height: 40px; background: #C1C1C1;}
                li:hover{background: #5BB85D;}
                .active{background: #5BB85D;}
            }
        }
        .select{display: flex; width: 650px; justify-content: space-between; align-items: center; margin-bottom: 10px;}
    }
}

</style>