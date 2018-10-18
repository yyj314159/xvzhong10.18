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
                                <Select v-model="model1" style="width:100px" placeholder="部门">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                <Select v-model="model1" style="width:100px" placeholder="职位">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                <Select v-model="model1" style="width:100px" placeholder="员工状态">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                <Button type="success">搜索</Button>

                                <Button type="success" @click="modal10 = true">添加部门</Button>
                                
                                    <Modal
                                        title="添加部门"
                                        v-model="modal10"
                                        :styles="{top: '200px'}"
                                        class-name="vertical-center-modal">
                                        <p>
                                            <Input v-model="value" placeholder="请输入部门名称" style="width: 300px" />
                                        </p>
                                       
                                    </Modal>
                                <Button type="success" @click="modal11= true">添加职位</Button>
                                     <Modal
                                        title="添加职位"
                                        v-model="modal11"
                                        :styles="{top: '200px'}"
                                        class-name="vertical-center-modal">
                                        <p>
                                            <Input v-model="value" placeholder="请输入职位名称" style="width: 300px" />
                                        </p>
                                       
                                    </Modal>
                                <Button type="success" @click="modal12 = true">添加员工</Button>
                                     <Modal
                                        title="添加员工"
                                        v-model="modal12"
                                        :styles="{top: '200px'}"
                                        class-name="vertical-center-modal">
                                        <div class="yuangong">
                                             <div class="addyuan">
                                                 <p class="tit1">职位信息</p>
                                                 <Select v-model="model1" style="width:200px;margin-top:5px" placeholder="所在部门">
                                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                                </Select><br>
                                                <Select v-model="model1" style="width:200px;margin-top:5px" placeholder="所属职位">
                                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                                </Select>
                                                <Select v-model="model1" style="width:200px;margin-top:5px" placeholder="权限类型">
                                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                                </Select>
                                                <Select v-model="model1" style="width:200px;margin-top:5px" placeholder="职位状态">
                                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                                </Select>
                                                
                                                    <Input v-model="value" placeholder="入职时间" style="width: 200px;margin-top:5px" />
                                                    <Input v-model="value" placeholder="离职时间" style="width: 200px;margin-top:5px" />
                                                    <Input v-model="value" placeholder="邮箱" style="width: 200px;margin-top:5px" />
                                                   
                                                
                                            </div>
                                            <div class="addyuan">
                                                <p class="tit1">基本信息</p>
                                                <Input v-model="value" placeholder="姓名" style="width: 200px;margin-top:5px" />
                                                <Input v-model="value" placeholder="性别" style="width: 200px;margin-top:5px" />
                                                <Input v-model="value" placeholder="年龄" style="width: 200px;margin-top:5px" />
                                                <Input v-model="value" placeholder="学历" style="width: 200px;margin-top:5px" />
                                                <Input v-model="value" placeholder="联系方式" style="width: 200px;margin-top:5px" />
                                                <Input v-model="value" placeholder="后台账户" style="width: 200px;margin-top:5px" />
                                                <Input v-model="value" placeholder="初始密码" style="width: 120px;margin-top:5px" />
                                                <Button type="success" >还原密码</Button>
                                                   
                                            </div>
                                        </div>
                                        
                                        
                                    </Modal>
                                <Button type="success" @click="shencha">审查访问员</Button>
                                     
                                 
                           </div>

                        </div>

                        <!-- 更新报告 -->
                        <div id="update">
                             <div class="title title2"><span>状态列表</span><el-button type="info">导出表格</el-button></div>
                             
                             <!-- 表格 -->
                             <table border='1' width="100%" cellpadding='0' cellspacing='0'>
                                  <tr class="header">
                                      <td>员工编号</td>
                                      <td>员工姓名</td>
                                      <td>账户</td>
                                      <td>所在部门</td>
                                      <td>员工职位</td>
                                      <td>手机号</td>
                                      <td>员工状态</td>
                                      <td>权限类型</td>
                                      <td>操作</td>
                                  </tr>

                                  <tr>
                                      <td></td>
                                      <td></td>
                                      <td>无后台</td>
                                      <td>无</td>
                                      <td>审查访问员</td>
                                      <td></td>
                                      <td>在职</td>
                                      <td>无后台权限</td>
                                      <td>编辑</td>
                                  </tr>
                                  <tr>
                                      <td></td>
                                      <td></td>
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
  name: 'Addshencha',
   data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        input: '',
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
                modal9: false,
                modal10: false,
                modal11: false,
                modal12: false,
                modal13: false,
                value: ''
      }
    },
    methods:{
        shencha(){
            this.$router.push("./addshencha")
        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .back{width:80px;height:30px;background:#39435B;color: #fff;text-align: center;line-height: 30px;border-radius: 5px}
    .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding:0 0 0 10px;display: flex;justify-content: space-between;}
    .title2{margin-bottom: 10px; }
    .ipt{width: 100%;height: 60px;display: flex;justify-content: space-around;align-items: center}

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

</style>
