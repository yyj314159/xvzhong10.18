<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    
                    <el-button type="info" size="small" @click="backtomoban">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    <el-button type="success" size="small" @click="tojiahua">&nbsp;&nbsp;保&nbsp;存&nbsp;&nbsp;</el-button>
                    <el-button type="danger" size="small">&nbsp;&nbsp;删&nbsp;除&nbsp;&nbsp;</el-button>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                        <div class="top">
                            <div class="left">
                                <div class="title"><span>配置模板信息</span></div>
                                <div class="ipt">
                                    <div class="first">
                                        <Input v-model="value" placeholder="项目类型" style="width: 150px" />
                                        <Select v-model="model1" style="width:210px" placeholder="模板名称">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                    </div>
                                    
                                    <Input v-model="value5" type="textarea" placeholder="备注" />
                                    <div class="pinpai">
                                         <Select v-model="model1" style="width:200px" placeholder="必备品牌">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="right">
                                <div class="title"><span>导入模板</span></div>
                                <div class="ipt2">
                                    <el-button type="info" size="small" class="load">下载清单模板</el-button>
                                    <div class="shangchuan load">
                                        <input type="text" placeholder="导入项目信息" class="file">
                                        <Button type="success">上传</Button>
                                    </div>
                                    <el-button type="info" class="load">生成</el-button>
                                </div>
                                

                            </div>
                            
                        </div>
                        <div>
                            <div class="title2"><span>导入模板</span></div>
                            <div class="xia">

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
  name: 'New',
  data () {
    return {
       value: '',
       cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    
                ],
                model1: '',
                value5: '',
  }
 },
 methods:{
     backtomoban(){
         this.$router.push("/moban")
     },
     tojiahua(){
         this.$router.push("/chakan_jia")
     }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.top{
    width: 100%;height: 200px;display:flex;justify-content:space-between;
    .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding:0 0 0 10px;display: flex;justify-content: space-between;}
    .left{width: 60%;height:100%;background: #F5F7F9; }
    .ipt,.ipt2{padding-left: 10px}
    .right{width: 38%;height:100%;background: #F5F7F9;padding-left: 10px ;
         .shangchuan{width: 100%;;display: flex;justify-content: space-between}
         .load{margin: 10px 0}
    }
    .first{display: flex;justify-content: space-between;margin:10px 0}    
    .pinpai{display: flex;justify-content:space-between;margin-top: 10px;
        .file{width: 50%;}
    }
}
.title2{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding:0 0 0 10px;margin: 10px 0}
.xia{
    width: 100%;height: 350px;border: 1px solid red;
}
</style>