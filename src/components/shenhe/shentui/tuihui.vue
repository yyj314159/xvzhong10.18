

<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    
                    <!-- <el-button type="info" size="small">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    <el-button type="success" size="small">&nbsp;&nbsp;保&nbsp;存&nbsp;&nbsp;</el-button>
                    <el-button type="danger" size="small">&nbsp;&nbsp;删&nbsp;除&nbsp;&nbsp;</el-button> -->
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                        <div class="aaa">
                             
                             <div class="bbb">
                               <div class="tit">条件筛选</div>
                                   <div class="sheng data">
                                        <Select v-model="model1" style="width:100px" placeholder="省">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>-
                                        <Select v-model="model1" style="width:100px" placeholder="市">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>-
                                        <Select v-model="model1" style="width:100px" placeholder="县/区">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Select v-model="model1" style="width:100px" placeholder="退回状态">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                        <Select v-model="model1" style="width:100px" placeholder="复查状态">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                   </div>

                                   

                                    <div>
                                        
                                        <Input v-model="value" placeholder="调研对象" style="width: 300px"  />&nbsp;&nbsp;<Button type="success">搜索</Button>
                                    </div>

                                   
                               </div>
                              
                             
                             
                            
                          </div>


                          <!-- 下 -->
                          <div class="xia">
                              <!-- 表格左 -->
                            <div class="table">
                                <div class="other">
                                   <span>状态列表</span> 
                                   <Button class="biao">导出表格</Button>
                                </div>
                               <Table border ref="selection" :columns="columns4" :data="data1"></Table>

                                <Button @click="handleSelectAll(true)">选择所有</Button>
                                <Button @click="handleSelectAll(false)">取消所有</Button>
                              

                           </div>
                        
                          </div>
                          
                    </div>
                </Card>
            </Content>
        </Layout>
  </div> 
</template>

<script>
export default {
  name: 'Tuihui',
  data () {
    return {
        // 全选
       columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '区域代理',
                        key: 'name'
                    },
                    {
                        title: 'DSR进度',
                        key: 'age'
                    },
                    {
                        title: 'DSR编号',
                        key: 'address'
                    },
                    {
                        title: '调研对象',
                        key: 'diaoyan'
                    },
                    {
                        title: '调研编号',
                        key: 'bainhao'
                    },
                    {
                        title: '门店等级',
                        key: 'dengji'
                    },
                    {
                        title: '任务状态 ',
                        key: 'diaoyan'
                    },
                    {
                        title: '一审负责人 ',
                        key: 'diaoyan'
                    },
                    {
                        title: '二审负责人 ',
                        key: 'diaoyan'
                    },
                    {
                        title: '原始得分 ',
                        key: 'diaoyan'
                    },
                    {
                        title: '开始时间 ',
                        key: 'diaoyan'
                    },
                    {
                        title: '结束时间 ',
                        key: 'diaoyan'
                    },
                    {
                        title: '操作 ',
                        key: 'diaoyan'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New ',
                        date: '2016-10-03',
                         diaoyan: 'John Brown',
                        bainhao: 18,
                        address: 'New',
                        date: '2016-10-03',
                         age: 18,
                        address: 'New',
                        date: '2016-10-03',
                         age: 18,
                        address: 'New',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
       input10: '',
       single: false,
       single1: false,
       single2: false,
       single3: false,
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
        cityList2: [
                    {
                        value: '门头照',
                        label: '门头照'
                    },
                    {
                        value: '问题照片',
                        label: '问题照片'
                    },
                    {
                        value: '货架',
                        label: '货架'
                    }
                    
                ],
                model2: '',
                model3: '',
                model4: '',      

         model1: '',
         textarea2: '',
         textarea3: '',
         value:"",
         value2:""      ,
          social: ['facebook', 'github'],
          fruit: ['苹果']  
    }
  },

methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }

       }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
     .aaa{
      width: 100%;height: 140px;display:flex;justify-content:space-between;overflow: hidden;
      .bbb{
        width: 100%;height: 130px;background:#F5F7F9;padding-left:10px;
        .tit{width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box;margin-bottom: 5px}
      }

    }

 
    .content{width: 360px;height: 200px;margin-top: 15px;padding: 20px}

    .table{width: 100%;height:430px;margin-top:10px;border:1px solid red;
        .other{width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box;margin-bottom: 5px;display: flex;justify-content: space-between;
        .biao{background: #C1C1C1;color: #fff;text-align: center;line-height: 50%}
        }

    }

    .data{
        margin: 10px 0
    }
</style>