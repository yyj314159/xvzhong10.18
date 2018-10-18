
<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}">
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <router-link to="./yuangong" tag="span">
                       <Button type="warning" >返回</Button>
                    </router-link>
                    
                    <Button type="success">保存</Button>
                    <Button type="error">删除</Button>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                          <div class="aaa">
                            
                             <div class="bbb">
                               <div class="tit">基本信息</div>
                               <table border="1" width="100%" cellpadding='0' cellspacing='0'>
                                  <tr class="header">
                                      <td>访问员账户</td>
                                      <td>访问员密码</td>
                                      <td>已绑定手机号</td>
                                      <td>姓名</td>
                                      <td>性别</td>
                                      
                                      
                                  </tr>

                                  
                                  <tr>
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
                                   
                                  </tr>
                                  

                                  
                              </table>
 
                           
                             </div>
                            
                            
                          </div>


                          <!-- 下 -->
                          <div class="xia">
                              <!-- 表格左 -->
                            <div class="table">
                               <div class="other">添加调研对象</div>
                               <br/>
                               <div>
                              
                                    <Select v-model="model1" style="width:100px" placeholder="省">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                        <Select v-model="model1" style="width:100px" placeholder="市">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                        <Select v-model="model1" style="width:100px" placeholder="县/区">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                    <Select v-model="model1" style="width:100px" placeholder="项目名称">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                        <Input v-model="value" placeholder="调研编号" style="width: 300px;margin-right:10px;margin-top:10px" /><Button type="success" style="margin-top:10px">搜索</Button>
                                </div><br/>
                                <!-- 批量操作 -->
                                <div>
                                      <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                                            <Checkbox
                                                :indeterminate="indeterminate"
                                                :value="checkAll"
                                                @click.prevent.native="handleCheckAll">全选</Checkbox>

                                            <Button type="success">批量添加</Button>    
                                        </div>
                                        

                                </div>

                             <table border="1" width="100%" cellpadding='0' cellspacing='0'>
                                 <!-- <CheckboxGroup v-model="checkAllGroup" > -->
                                            
                                        
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
                                      <td><Checkbox label="香蕉"></Checkbox></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                     
                                  </tr>
                                  <tr>
                                    <td><Checkbox label="苹果"></Checkbox></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                  </tr>
                                  <tr>
                                    <td> <Checkbox label="西瓜"></Checkbox></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                  </tr>
                                  <!-- </CheckboxGroup> -->

                                  
                              </table>
                              
                              

                           </div>
                        <!-- 表格右 -->
                           <div class="table2">
                               <div class="other">添加调研对象</div>
                               
                               
                                
                             <table border="1" width="100%" cellpadding='0' cellspacing='0'>
                                  <tr class="header">
                                      <td>调研对象</td>
                                      <td>详细地址</td>
                                      <td>操作</td>
                                      
                                      
                                  </tr>

                                  <tr>
                                      <td></td>
                                      <td></td>
                                      <td>移除</td>
                                     
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                  </tr>
                                  

                                  
                              </table>
                              
                              

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
  name: 'Bianji',
  data () {
    return {
        // 全选
         indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜'],

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
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }

       }




  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .aaa{
      width: 100%;height: 150px;display:flex;justify-content:space-between;
      .bbb{
        width: 100%;height: 150px;
        .tit{
           width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box
        }
      }

    }

 
 .content{width: 360px;height: 200px;margin-top: 15px;padding: 20px}

.table{width: 68%;height:320px;margin-top:-10px;
    .other{width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box;margin-bottom: 5px}
}
.table2{width: 29%;height:320px;margin-top:-10px;
    .other{width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box;margin-bottom: 5px}
}
 table{text-align: center;border:1px solid #D2D4D5;margin-top:5px;margin:5px 0 0 0;padding:0;
   td{height: 25px}
  }
.header{background: #1D95C9;color: #fff}

.xia{display: flex;justify-content: space-between}


</style>
