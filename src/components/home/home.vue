<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            
            <Content :style="{padding: '0 16px 16px'}" style="background:#fff;">
                <Breadcrumb :style="{margin: '16px 0'}" >
                    
                    <div class="back">返回</div>
                </Breadcrumb>
                <Card style="background:#F2F4F4;">
                    <div style="height: 600px">
                      <!-- 个人信息 -->
                        <div id="top">

                          <div class="title"><span>个人信息</span></div>
                           <!-- <p>所属部门：  项目部</p> -->
                           <!-- <p>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：  项目经理</p> -->
                           <!-- <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：  王茂如</p> -->
                           <p>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：{{this.$store.state.count}}</p>
                           <p>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：{{this.$store.state.name}}</p>

                          <input type="text" v-model="user">
                          <button @click="login1()">看看</button>
                          <button @click="add()">jia</button>
                        </div>

                        <!-- 更新报告 -->
                        <div id="update">
                             <div class="title"><span>状态列表</span></div>
                             <div class="data"> 
                                <p>
                                    <Row>
                                        <Col span="8">
                                            <DatePicker type="date" placeholder="开始统计日期" style="width: 150px;"></DatePicker>
                                        </Col>
                                        
                                    </Row>
                                    &nbsp;—&nbsp;
                                    <Row>
                                        <Col span="8">
                                            <DatePicker type="date" placeholder="结束统计日期" style="width: 150px"></DatePicker>
                                        </Col>
                                        
                                    </Row>
      
                                </p>
                                <el-select v-model="value" placeholder="请选择项目名称">
                                  <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                                
                                <p ><el-input v-model="input" placeholder="请输入调研编号"></el-input>  <span class="search">搜索</span></p>
                             </div>
                             <!-- 表格 -->
                             <table border='1' width="100%" cellpadding='0' cellspacing='0'>
                                  <tr class="header">
                                      <td>项目名称</td>
                                      <td>调研对象</td>
                                      <td>调研编号</td>
                                      <td>详细地址</td>
                                      <td>访问员</td>
                                      <td>上传时间</td>
                                      <td>认证员</td>
                                      <td>确认时间</td>
                                      <td>查看详情</td>
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
  import {mapGetters,mapActions} from "vuex"
	
export default {

  name: 'Home',
   data() {
      return {
        user:"",
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
        input: ''
      }
    },

     computed:mapGetters([]),

      methods:{
          
          ...mapActions(["login","add","jian"]), //mapActions（[]）为store里的函数名
          
          login1(){
            this.login(this.user) //把this.user传参到store里的login
          }
        },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .back{width:80px;height:30px;background:#39435B;color: #fff;text-align: center;line-height: 30px;border-radius: 5px}
    .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding:0 10px;display:flex;justify-content: space-between;align-items:center;
        span:nth-child(2){display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
    }


     #top{height: 160px;width: 100%;background:#fff;box-shadow: 0 1px 1px rgba(0,0,0,.1);border-radius:5px;overflow: hidden;
        
        p{
          width: 100%;height: 40px;line-height: 40px;font-weight: bold;padding-left: 10px
        }
     }
     #update{
        width: 100%;height: 440px;background:#fff;box-shadow: 0 1px 1px rgba(0,0,0,.1);margin-top: 8px;border-radius: 5px;overflow: hidden;
        .data{width: 100%;height: 40px;display: flex;justify-content:space-between;margin:10px 0;
             p{height: 40px}
             p:nth-child(1){
                width: 430px;display: flex;align-items: center;font-weight:bold;
                input{border-radius: 4px;width: 130px;height: 30px;}
             }
             p:nth-child(2){
                width: 330px;display: flex;align-items: center;font-weight:bold;
                select{border-radius: 4px;width: 150px;height: 30px}
             }
             p:nth-child(3){
                width: 430px;display: flex;align-items: center;font-weight:bold;margin-left:10px;
                input{border-radius: 4px;width: 150px;height: 30px}
                .search{display: block;width: 100px;height: 36px;background: #5BB85D;color: #fff;text-align: center;line-height: 36px;border-radius: 5px;margin-left: 10px;cursor: pointer}
             }
         }
     }
table{text-align: center;
   td{height: 25px}
  }
.header{background: #1D95C9;color: #fff}


</style>
