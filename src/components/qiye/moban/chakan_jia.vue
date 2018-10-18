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
                                  
                                  <Select v-model="model1" style="width:200px;" placeholder="项目类型">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                  </Select>
                                  <Select v-model="model1" style="width:200px;margin-left:60px" placeholder="模板名称">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                  </Select>
                               </div>
                               <el-input
                                  type="textarea"
                                  :autosize="{ minRows: 4, maxRows: 20}"
                                  placeholder="备注信息"
                                  v-model="textarea3">
                                </el-input>
                                <Select v-model="model1" style="width:400px;margin-top:10px" placeholder="必备品牌（必选）">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                             </div>

                              <!-- 下 -->
                              <div class="table">
                               <div class="other"><span>算法标准</span> </div>
                               
                               
                                <!-- 表格 -->
                                <ul class="list">
                                      <li>四川</li>
                                      <li>上海</li>
                                      <li>上海</li>
                                      <li>上海</li>
                                      <li>上海</li>
                                      <li>上海</li>
                                      <li>上海</li>
                                      <li>上海</li>
                                      <li>上海</li>
                                  </ul>
                             <table border="1" width="100%" cellpadding='0' cellspacing='0'>
                                  

                                  <tr class="header">
                                      <td>品牌</td>
                                      <td>系列</td>
                                      <td>条形码</td>
                                      <td>SKU</td>
                                      <td>SKU总数</td>
                                      <td>A+店/面积>=3000m2</td>
                                      <td>A店/面积1000-2999m2</td>
                                      <td>B店/面积500-999m2</td>
                                      <td>C店/面积100-499m2</td>
                                      <td>D店/面积50-99m2</td>
                                     
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
  name: 'Jiahua',
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
    .other{width: 100%;height:30px;background: #5BC0DE;line-height: 30px;color: #fff;padding-left: 10px;box-sizing: border-box;margin-bottom: 5px;margin-top:25px;}
}
 table{text-align: center;border:1px solid #D2D4D5;margin-top:25px;margin:5px 0 0 0;padding:0;
   td{height: 25px}
  }
.header{background: #1D95C9;color: #fff}
.list{
   width: 100%;height: 36px;display: flex;justify-content: space-between;
   li{width:100%;height: 36px;text-align: center;line-height: 36px;border: 1px solid #999}
}
</style>
