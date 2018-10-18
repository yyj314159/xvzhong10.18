<template>
    <div class="firstInstanceLists">
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
                            <Button type="success">&nbsp;&nbsp;批量通过&nbsp;&nbsp;</Button>
                            <Button type="success">&nbsp;&nbsp;下载资料&nbsp;&nbsp;</Button>
                            <Button type="success">&nbsp;&nbsp;下载照片&nbsp;&nbsp;</Button>
                            <Button type="success">&nbsp;&nbsp;下载录音录像&nbsp;&nbsp;</Button>
                        </div>
                        <!-- 表格 -->
                        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'firstInstanceLists',
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
        columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '项目名称',
                        key: '项目名称'
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
                        title: '审核状态',
                        key: '审核状态'
                    },
                    {
                        title: '审核时间',
                        key: '审核时间'
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
                data1: [
                    {
                        项目名称: 'John Brown',
                        调研对象: 18,
                        调研编号: 'New York No. 1 Lake Park',
                        审核状态: '2016-10-03',
                        审核时间: '2016-10-03',
                        操作:'审核'
                    },
                     {
                        项目名称: 'John Brown',
                        调研对象: 190,
                        调研编号: 'New York No. 1 Lake Park',
                        审核状态: '2016-10-03',
                        审核时间: '2016-10-03',
                        操作:'审核'
                    },
                    {
                        项目名称: 'John Brown',
                        调研对象: 180,
                        调研编号: 'New York No. 1 Lake Park',
                        审核状态: '2016-10-03',
                        审核时间: '2016-10-03',
                        操作:'审核'
                    },
                    {
                        项目名称: 'John Brown',
                        调研对象: 188,
                        调研编号: 'New York No. 1 Lake Park',
                        审核状态: '2016-10-03',
                        审核时间: '2016-10-03',
                        操作:'审核'
                    },
                    
                ],
    }
  },
  methods:{
    // show (index) {
    //       this.$router.push("/domestication1")  // 跳转到相应项目的位置
    //     }
    // }
    show (index) {
            this.$router.push("/prescription1")  // 跳转到相应项目的位置
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .firstInstanceLists{
        .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding-left:10px;display:flex;justify-content: space-between;align-items:center;margin-bottom: 10px;
            span:nth-child(2){display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
        }
        .power{margin-bottom: 10px; width: 100%; display: flex; justify-content: flex-end;}
    }
</style>