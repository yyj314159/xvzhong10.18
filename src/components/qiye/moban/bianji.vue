<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}">
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    
                    <el-button type="info" size="small" @click="backtomoban">&nbsp;&nbsp;返回&nbsp;&nbsp;</el-button>
                    <el-button type="success" size="small">&nbsp;&nbsp;保存&nbsp;&nbsp;</el-button>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                          <div class="aaa">
                            <!-- 左边 -->
                             <div class="bbb">
                               <div class="tit">配置模板信息</div>
                               <div class="sou">
                                  <Input v-model="value2" placeholder="请输入模板名称" /> 
                                  <Select v-model="model1" style="width:400px;margin-left:60px" placeholder="请选择类型">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                  </Select>
                               </div>
                               <el-input
                                  type="textarea"
                                  :autosize="{ minRows: 6, maxRows: 20}"
                                  placeholder="备注信息"
                                  v-model="textarea3">
                                </el-input>
                           
                             </div>
                             <!-- 右边 -->
                             <div class="bbb">
                               <div class="tit">app功能</div>
                               <div class="content">
                                  
                                  <CheckboxGroup v-model="fruit">
                                     
                                      <Checkbox label="APP扫描"></Checkbox>
                                      <Checkbox label="扫描后填写价格"></Checkbox><br>
                                      <Checkbox label="app录音"></Checkbox>
                                      &nbsp;<Checkbox label="开始任务自动录音"></Checkbox>
                                      <Checkbox label="APP摄像"></Checkbox>
                                      
                                      <Checkbox label="拍照后手动定位自定义记录位置。（实效）"></Checkbox>
                                      <Checkbox label="APP拍照"></Checkbox>
                                      
                                  </CheckboxGroup>
                                  <Select v-model="model2" size="small" style="width:150px;margin-top:15px" placeholder="请选择图片类型">
                                      <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                  </Select>
                               </div>
                             



                             </div>
                          </div>
                          <div class="table">
                               <div class="other">app其他功能</div>
                               <el-button type="success" size="small">&nbsp;&nbsp;导入&nbsp;&nbsp;</el-button>
                               <el-button type="info" size="small">&nbsp;&nbsp;下载导入模板&nbsp;&nbsp;</el-button>
                               
                                <!-- 表格 -->
                             <table border="1" width="100%" cellpadding='0' cellspacing='0'>
                                  <tr class="header">
                                      <td>选择</td>
                                      <td>用于问题类型</td>
                                      <td>显示名称</td>
                                      <td>选择题</td>
                                      <td>填空题</td>
                                      <td>选择值</td>
                                      <td>未选择值</td>
                                      
                                  </tr>

                                  <tr>
                                      <td><Checkbox v-model="single">01</Checkbox></td>
                                      <td><Checkbox v-model="single1"></Checkbox></td>
                                      <td>自定义字段</td>
                                      <td><Checkbox v-model="single2"></Checkbox></td>
                                      <td><Checkbox v-model="single3"></Checkbox></td>
                                      <td>自定义字段</td>
                                      <td>自定义字段</td>
                                     
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                  </tr>
                                  

                                  
                              </table>
 

                          </div>



                    </div>
                </Card>
            </Content>
        </Layout>
  </div> 
</template>

<script>
export default {
  name: 'Bianji',
  data () {
    return {
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
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
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
         value2:""      ,
          social: ['facebook', 'github'],
          fruit: ['苹果']  
    }
  },
  methods:{
      backtomoban(){
          this.$router.push("./moban")
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .aaa{
      width: 100%;height: 300px;display:flex;justify-content:space-between;
      .bbb{
        width: 49%;height: 260px;background: #F5F7F9;
        .tit{
           width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box
        }
      }

    }

 .sou{width: 100%;height: 36px;display: flex;justify-content: space-around;margin: 15px 0;}
 .content{width: 360px;height: 200px;margin-top: 15px;padding: 20px}

.table{width: 100%;height:320px;margin-top:-10px;
    .other{width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box;margin-bottom: 5px}
}
 table{text-align: center;border:1px solid #D2D4D5;margin-top:5px;margin:5px 0 0 0;padding:0;
   td{height: 25px}
  }
.header{background: #1D95C9;color: #fff}
</style>
