<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            
            <Content :style="{padding: '0 16px 16px'}" style="background:#fff;">
                <Breadcrumb :style="{margin: '16px 0'}" >
                    
                    <!-- <div class="back">返回</div> -->
                </Breadcrumb>
                <Card style="background:#F2F4F4;">
                    <div style="height: 600px">
                      <!-- 个人信息 -->
                        <div id="top">

                          <div class="title"><span>筛选条件</span></div>
                           <div class="ipt">
                                <Select v-model="model" style="width:200px" placeholder="部门">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                
                                <Button type="success">&nbsp;&nbsp;搜索&nbsp;&nbsp;</Button>

                                <Button type="success" @click="modal1 = true">&nbsp;&nbsp;添加&nbsp;&nbsp;</Button>
                                
                                   
                                        <Modal
                                            title="添加权限"
                                            v-model="modal1"
                                            ok-text="保存"
                                            :styles="{top: '20px'}">
                                            <div class="addquanxian">
                                                 <Select v-model="model"  placeholder="权限组名称" class="select1">
                                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                                 </Select>
                                                 <hr/>
                                                 <!-- 分配权限 -->
                                                 <div class="fenpei"> 分配权限</div>
                                                 <div class="check">
                                                      <CheckboxGroup v-model="social">
                                                        <Checkbox label="twitter">
                                                            
                                                           <span>首页</span>
                                                           <CheckboxGroup v-model="fruit" class="padding">
                                                                <Checkbox label="查看详情功能"></Checkbox>
                                                                
                                                            </CheckboxGroup>

                                                        </Checkbox><br/><hr>
                                                        <Checkbox label="facebook">
                                                            
                                                            <span>调研对象管理</span>
                                                           
                                                        </Checkbox><br/><hr>
                                                        <Checkbox label="github">
                                                            
                                                            <span>调研对象列表</span>
                                                            <CheckboxGroup v-model="fruit" class="padding">
                                                                <Checkbox label="查看详情功能"></Checkbox>
                                                                <Checkbox label="导入调研对象功能"></Checkbox>
                                                                <Checkbox label="生成二维码功能"></Checkbox>
                                                            </CheckboxGroup>
                                                        </Checkbox><br/><hr>
                                                        <Checkbox label="snapchat">
                                                            
                                                            <span>更新记录</span>
                                                            <CheckboxGroup v-model="fruit" class="padding">
                                                                <Checkbox label="查看功能"></Checkbox>
                                                                <Checkbox label="认证功能"></Checkbox>                                   
                                                            </CheckboxGroup>
                                                        </Checkbox><br/><hr>
                                                        <Checkbox label="snapchat">
                                                            
                                                            <span>企业管理</span>
                                                        </Checkbox><br/><hr>
                                                        <Checkbox label="snapchat">
                                                            
                                                            <span>员工管理</span>
                                                            <CheckboxGroup v-model="fruit" class="padding">
                                                                <Checkbox label="添加部门"></Checkbox>
                                                                <Checkbox label="添加职位"></Checkbox>
                                                                <Checkbox label="添加员工"></Checkbox>
                                                                <Checkbox label="编辑员工"></Checkbox>
                                                                <Checkbox label="添加审查访问员"></Checkbox>
                                                                <Checkbox label="编辑审查访问员"></Checkbox>
                                                            </CheckboxGroup>
                                                        </Checkbox><br/><hr>
                                                        <Checkbox label="snapchat">
                                                            
                                                            <span>权限管理</span>
                                                            <CheckboxGroup v-model="fruit" class="padding">
                                                                <Checkbox label="添加权限"></Checkbox>
                                                                <Checkbox label="编辑权限"></Checkbox>                                   
                                                            </CheckboxGroup>
                                                        </Checkbox><br/><hr>
                                                        <Checkbox label="snapchat">
                                                            
                                                            <span>操作日志</span>
                                                            <CheckboxGroup v-model="fruit" class="padding">
                                                                <Checkbox label="删除功能"></Checkbox>                               
                                                            </CheckboxGroup>
                                                        </Checkbox><br/><hr>
                                                        <Checkbox label="snapchat">
                                                            
                                                            <span>可视化数据</span>
                                                            <CheckboxGroup v-model="fruit" class="padding">
                                                                <Checkbox label="导出表格"></Checkbox>                               
                                                            </CheckboxGroup>
                                                        </Checkbox>
                                                        <Input v-model="value5" type="textarea" placeholder="备注" class="beizhu"/>
                                                    </CheckboxGroup>




                                                    <!-- <CheckboxGroup v-model="fruit">
                                                        <Checkbox label="香蕉"></Checkbox>
                                                        
                                                    </CheckboxGroup> -->
                                                 </div>
                                            </div>
                                        </Modal>
                   
                                 
                           </div>

                        </div>

                        <!-- 更新报告 -->
                        <div id="update">
                             <div class="title title2"><span>状态列表</span><el-button type="info">导出表格</el-button></div>
                             
                             <!-- 表格 -->
                             <table border='1' width="100%" cellpadding='0' cellspacing='0'>
                                  <tr class="header">
                                      <td>权限组编号</td>
                                      <td>权限组名称</td>
                                      <td>包含权限</td>
                                      <td>操作</td>
                                      
                                  </tr>

                                  <tr>
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
  name: 'Quanxian',
   data() {
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
        modal1: false,     
        model: '',
        modal9: false,
        value5: '',
       
        value: '',
        modal9: false,
        modal10: false,
        social: ['facebook', 'github'],
        fruit: ['苹果']
      }
    },
    methods:{
        shencha(){
            this.$router.push("./addshencha")
        },
        ok () {
                this.$Message.info('添加成功');
            },
        cancel () {
            this.$Message.info('取消');
        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .back{width:80px;height:30px;background:#39435B;color: #fff;text-align: center;line-height: 30px;border-radius: 5px}
    .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding:0 0 0 10px;display: flex;justify-content: space-between;}
    .title2{margin-bottom: 10px; }
    .ipt{width: 400px;height: 60px;display: flex;justify-content: space-around;align-items: center}

     #top{height: 100px;width: 100%;background:#fff;box-shadow: 0 1px 1px rgba(0,0,0,.1);border-radius:5px;overflow: hidden;
        
        p{
          width: 100%;height: 40px;line-height: 40px;font-weight: bold;padding-left: 10px
        }
     }
     #update{
        width: 100%;height: 440px;background:#fff;box-shadow: 0 1px 1px rgba(0,0,0,.1);margin-top: 8px;border-radius: 5px;overflow: hidden;
       
     }
table{text-align: center;
   td{height: 25px}
  }
.header{background: #1D95C9;color: #fff}

.yuangong{
    width: 100%;height: 330px;display: flex;justify-content: space-between;
    .addyuan{
    width: 49%;height: 330px;border: 1px dotted red;background:#FFFCED;padding-left: 15px
    }
}
.tit1{font-size: 14px;font-weight: bold}


.addquanxian{
    width: 100%;height: 600px;
}
.select1{width: 300px;margin-bottom: 5px}
.fenpei{width: 100%;height: 30px;line-height: 30px;font-weight: bold}
.check{width: 100%;height: 445px;
    span{color:#5BC0DE}
    .beizhu{margin-top: 15px}
    
 }
hr{background-color:#E2E1E1;height:1px;border:none;margin:6px 0}
.padding{padding-left: 40px}
</style>
