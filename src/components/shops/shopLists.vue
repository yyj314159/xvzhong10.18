<template>
    <div class="shopLists">
      <Layout :style="{marginLeft: '200px'}" >            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}" class="add">                   
                        <Upload
                            multiple
                            action="//jsonplaceholder.typicode.com/posts/">   <!--上传地址-->
                            <Button icon="ios-cloud-upload-outline">批量上传</Button>
                        </Upload>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-button type="success" size="normal" :style="{marginTop:'-9px'}" @click="modal9 = true">&nbsp;&nbsp;单个添加&nbsp;&nbsp;</el-button>  
                        <el-button type="success" size="normal" :style="{marginTop:'-9px'}">&nbsp;&nbsp;模板下载&nbsp;&nbsp;</el-button>  
                    <Modal
                        title="单个添加"
                        v-model="modal9"
                        :styles="{top: '80px'}"
                        class-name="vertical-center-modal">                       
                            <div class="addshop"><br>
                                <Select v-model="modal1" style="width:133px;margin-top:5px" placeholder="省">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                <Select v-model="modal1" style="width:133px;margin-top:5px" placeholder="市">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                <Select v-model="modal1" style="width:133px;margin-top:5px" placeholder="区">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select><br>
                                <Select v-model="modal1" style="width:133px;margin-top:5px" placeholder="项目类别">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>  
                                <Select v-model="modal1" style="width:133px;margin-top:5px" placeholder="门店等级">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                <Select v-model="modal1" style="width:133px;margin-top:5px" placeholder="门店面积">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select><br><br><br>
                                <Input v-model="value" placeholder="门店编号" style="width: 200px;margin-top:5px" />                                                                              
                                <Input v-model="value" placeholder="门店名称" style="width: 200px;margin-top:5px" /><br>
                                <Input v-model="value" placeholder="门店经度" style="width: 200px;margin-top:5px" />
                                <Input v-model="value" placeholder="门店纬度" style="width: 200px;margin-top:5px" /><br>
                                <Input v-model="value" placeholder="详细地址" style="width: 402px;margin-top:5px" />                                                                            
                            </div>                                                                                                    
                    </Modal>
                </Breadcrumb>
                <Card>
                    <div class="content">
                        <div class="title"><span>条件筛选</span></div>
                        <div class="select">                             
                            <Select v-model="modal1" style="width:150px" placeholder="省">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Select v-model="modal1" style="width:150px" placeholder="市">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Select v-model="modal1" style="width:150px" placeholder="县/区">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Select v-model="modal1" style="width:100px" placeholder="门店名称">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>&nbsp;&nbsp;
                            <Select v-model="modal1" style="width:100px" placeholder="门店等级">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>&nbsp;&nbsp;
                            <Select v-model="modal1" style="width:100px" placeholder="面积范围">
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
                        <Table border :columns="columns9" :data="data9" ></Table>                       
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
export default {
  name: 'shopLists',
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
                    {
                        value: '龙分店',
                        label: '龙分店'
                    },
                    {
                        value: 'AAA',
                        label: 'AAA'
                    },
                    {
                        value: '122',
                        label: '122'
                    },
                ],
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
                    {
                        value: '龙分店',
                        label: '龙分店'
                    },
                    {
                        value: 'AAA',
                        label: 'AAA'
                    },
                    {
                        value: '122',
                        label: '122'
                    },
                ],        
                modal1: '',
                modal9: false,
                textarea2: '',
                textarea3: '',
                value:"",
                value2:"" ,
        // 表格数据
        columns9: [
            {
                title: '省市区',
                key: '省市区'
            },
            {
                title: '门店名称',
                key: '门店名称'
            },
            {
                title: '门店编号',
                key: '门店编号'
            },
            {
                title: '详细地址',
                key: '详细地址',               
            },
            {
                title: '门店等级',
                key: '门店等级',               
            },
            {
                title: '面积范围',
                key: '面积范围',               
            },
            {
                title: '经度',
                key: '经度',               
            },
            {
                title: '维度',
                key: '维度',               
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
                            }, '编辑')
                    ])             
                }
            }
        ],
        data9: [
            {
                省市区: '中国上海',
                门店名称: '龙凤店',
                门店编号:999,
                详细地址: '中国上海',
                门店等级: "AA",
                面积范围: 333,
                经度: 231,
                维度: 888,
                操作: '编辑'
            },
        ]
            
    }
  },
    methods: {
        show (index) {
            // this.$router.push("/addShop")   编辑当前的门店
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .shopLists{
        .add{width: 400px; height: 40px; display: flex; justify-content: space-around; align-items: center;}  
        .content{ height: 600px;
            .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding-left:10px;display:flex;justify-content: space-between;align-items:center;margin-bottom: 10px;
                span:nth-child(2){display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
            }
        }  
    }
</style>