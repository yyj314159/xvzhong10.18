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
                                        </Select>
                                        
                                        
                        </div>
                        <br/>
                        <!-- 下表 -->
                        <div class="title">
                            <span>列表状态</span>
                            <el-button type="info">导出表格</el-button>
                        </div>
                         <!-- 表格 -->
                            <table border='1' width="100%" cellpadding='0' cellspacing='0'>
                                  <tr class="header">
                                      <td>序号</td>
                                      <td>省</td>
                                      <td>市</td>
                                      <td>区</td>
                                      <td>用户名</td>
                                      
                                      <td>手机号</td>
                                      <td>性别</td>
                                     
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
                </Card>
            </Content>
        </Layout>
  </div> 
</template>

<script>
export default {
  name: 'Fangwenyuan',
  data () {
    return {
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
                value2:""      ,
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding-left: 10px;display:flex;justify-content: space-between;align-items:center;margin-bottom: 10px;box-shadow: 0 1px 1px rgba(0,0,0,.1);border-radius:5px;
        span:nth-child(2){display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
    }
    table{text-align: center;
   td{height: 25px}
  }
.header{background: #1D95C9;color: #fff}
</style>