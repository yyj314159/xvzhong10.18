<template>
    <div class="calculationLists">
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
                            </Select>&nbsp;
                            <Select v-model="model1" style="width:200px" placeholder="调研编号">
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
                        <div class="power">
                            <Button type="success">&nbsp;&nbsp;核对通过&nbsp;&nbsp;</Button>
                            <Button type="error">&nbsp;&nbsp;核对不通过&nbsp;&nbsp;</Button>
                        </div>
                        <!-- 表格 -->
                        <Table border ref="selection" :columns="columns10" :data="data10"></Table>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'calculationLists',
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
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '区',
                        key: '区'
                    },
                    {
                        title: '调研对象',
                        key: '调研对象'
                    },
                    {
                        title: '调研编号',
                        key: '调研编号'
                    },
                    {
                        title: '任务状态',
                        key: '任务状态'
                    },                                                           
                    {
                        title: '得分核对状态',
                        key: '得分核对状态'
                    },
                    {
                        title: '原始得分',
                        key: '原始得分',
                        sortable: true
                    },
                    {
                        title: '一审后得分',
                        key: '一审后得分',
                        sortable: true
                    },
                    {
                        title: '二审后得分',
                        key: '二审后得分',
                        sortable: true
                    },
                    {
                        title: '核对得分',
                        key: '核对得分',
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
                                    }, '审核')
                            ])             
                        }                              
                    }
                ],
                data10: [
                    {
                        区: 'John Brown',
                        调研对象: 18,
                        调研编号: 'New York No. 1 Lake Park',
                        任务状态: '2016-10-03',
                        得分核对状态: '2016-10-03',
                        原始得分: 99,
                        一审后得分:80,
                        二审后得分:70,
                        核对得分:78,
                        操作:'审核'
                    },
                     
                    
                ],
    }
  },
  methods:{
    // show (index) {
    //         this.$router.push("/domesticationC")   //跳转到相应项目的位置
    //     }
    // }
        show (index) {
            this.$router.push("/prescriptionC")   //跳转到相应项目的位置
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .calculationLists{
        .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding-left:10px;display:flex;justify-content: space-between;align-items:center;margin-bottom: 10px;
            span:nth-child(2){display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
        }
        .power{margin-bottom: 10px; width: 100%; display: flex; justify-content: flex-end;}
    }
</style>