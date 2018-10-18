
<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    
                    <el-button type="info" size="small" @click="backtomoban()">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    <el-button type="success" size="small">&nbsp;&nbsp;保&nbsp;存&nbsp;&nbsp;</el-button>
                    <el-button type="danger" size="small">&nbsp;&nbsp;删&nbsp;除&nbsp;&nbsp;</el-button>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px" class="content">
                         <div class="title"><span>基本信息</span></div>
                         <br/>
                        <!-- 一级 -->
                         <div class="first">
                               <Select v-model="model1" style="width:200px" placeholder="项目调查产品类别 " class="aaa">
                                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select><br/>
                                <Input v-model="value" placeholder="一级产品名称" style="width: 300px"  class="aaa" required="required"/><br/>
                                <Input v-model="value" placeholder="排序值" style="width: 100px"  class="aaa"/>
                         </div>
                         <!-- 二级 -->
                         <div class="second">
                             
                             <Input v-model="value" placeholder="二级产品名称" style="width: 300px"  class="aaa"/><br/>
                             <Input v-model="value" placeholder="排序值" style="width: 100px"  class="aaa"/>
                                
                         </div>
                         <!-- 三级 -->
                         <div class="third">
                               
                             <Input v-model="value" placeholder="三级产品名称" style="width: 300px"  class="aaa"/><br/>
                             <Input v-model="value" placeholder="请输入条形码" style="width: 100px"  class="aaa"/><br/>

                              <Select v-model="model1" style="width:150px" placeholder="是否需要录入价格 "  class="aaa">
                                <Option v-for="item in price" :value="item.value" :key="item.value">{{ item.label }}</Option>
                             </Select><br/>
                             <Input v-model="value" placeholder="排序值" style="width: 100px"  class="aaa"/>

                         </div>
                    </div>
                </Card>
            </Content>
        </Layout>
  </div> 
</template>

<script>
export default {
  name: 'Change',
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
                    
                ],
        model1: '',
        value: '',
        price:[
                {
                    value: 'true',
                    label: '是'
                },
                {
                    value: 'false',
                    label: '否'
                },
        ],
        
  }
 },
 methods:{
     backtomoban(){
          this.$router.push("/moban")
     }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .title{width: 100%;height: 30px;background: #5BC0DE;line-height: 50%;color: #fff;padding:0 10px;display:flex;justify-content: space-between;align-items:center;}
    .content{display: flex;flex-direction:column;overflow: auto;
       .aaa{margin: 5px 0}  
     }
     .first{width: 100%;height: 140px;background: #F5F7F9;border-radius: 5px;padding-left: 10px}
     .second{width: 100%;height: 100px;margin: 8px 0;border-radius: 5px;background: #F5F7F9;border-radius: 5px;padding-left: 10px}
     .third{width: 100%;height: 190px;border-radius: 5px;background: #F5F7F9;border-radius: 5px;padding-left: 10px}
</style>