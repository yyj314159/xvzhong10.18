<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    
                    <el-button type="info" size="small" @click="backmoban">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    <el-button type="success" size="small">&nbsp;&nbsp;保&nbsp;存&nbsp;&nbsp;</el-button>
                    <el-button type="danger" size="small">&nbsp;&nbsp;删&nbsp;除&nbsp;&nbsp;</el-button>
                </Breadcrumb>
                <!-- 内容 -->
                <Card>
                    <div style="height: 600px">
                          <div class="bbb">
                               <div class="tit">配置模板信息</div>
                               <div class="sou">
                                  
                                  <Select v-model="model1" style="width:400px;" placeholder="项目类型">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                  </Select>
                                  <Select v-model="model1" style="width:400px;margin-left:60px" placeholder="模板名称">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                  </Select>
                               </div>
                               <el-input
                                  type="textarea"
                                  :autosize="{ minRows: 4, maxRows: 20}"
                                  placeholder="备注信息"
                                  v-model="textarea3">
                                </el-input>
                               
                             </div>

                              <!-- 下 -->
                              <div class="table">
                               <div class="other"><span>算法标准</span><el-button size="mini" type="danger">修改</el-button></div>
                               
                               
                                <!-- 表格 -->
                                <ul class="list">
                                      <li style="background:#5BB85D;color:#fff">保洁状况（30%）</li>
                                      <li>公共秩序状况（30%）</li>
                                      <li>保绿状况（20%）</li>
                                      <li>设施设备完好（10%）</li>
                                      <li>居民满意度（10%）</li>
                                  </ul>

                               <div class="tab">
                                            <!-- 左 -->
                                    <table border="1" width="100%" cellpadding='0' cellspacing='0'>
                                        

                                        <tr class="header">
                                            <td>二级指标</td>
                                            <td>二级指标分值</td>
                                            <td>序号</td>
                                            <td>描述</td>
                                            
                                            
                                        </tr>
                                        <tr>
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
                                        
                                        </tr>
                                        

                                        
                                    </table>

                                    <!-- 右 -->
                                        <table border="1" width="100%" cellpadding='0' cellspacing='0' class="tab2">
                                        

                                        <tr class="header">
                                            <td>二级指标</td>
                                            <td>二级指标分值</td>
                                            <td>序号</td>
                                            <td>描述</td>
                                            
                                            
                                        </tr>
                                        <tr>
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
  name: 'Shixiao',
  data () {
    return {
        cityList: [
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
                model1:"",
                textarea3:"",
                single: false,
                single1: false,
                single2: false,
                single3: false,
       
  }
 },
 methods:{
     backmoban(){
         this.$router.push("/moban")
     }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .tit{
      width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box;margin-bottom: 5px
    }
    .sou{margin: 10px 0}
    .table{width: 100%;height:320px;margin-top:-10px;
    .other{width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box;margin-bottom: 5px;margin-top:25px;display: flex;justify-content: space-between}
}
 table{text-align: center;border:1px solid #D2D4D5;margin-top:25px;margin:5px 0 0 0;padding:0;
   td{height: 25px}
  }
.header{background: #1D95C9;color: #fff}
.list{
   width: 100%;height: 36px;display: flex;justify-content: space-between;margin:10px 0;
   li{width:100%;height: 36px;text-align: center;line-height: 36px;border: 1px solid #999}
}
.tab{
    display: flex;justify-content: space-between;
    .tab2{margin-left: 10px}
}
</style>
