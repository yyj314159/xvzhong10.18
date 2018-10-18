
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
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="基本信息" name="first">基本信息</el-tab-pane>
                            <el-tab-pane label="选择产品" name="second">选择产品</el-tab-pane>
                            <el-tab-pane label="倒入信息" name="third">倒入信息</el-tab-pane>
                            <el-tab-pane label="编辑算法" name="fourth">编辑算法</el-tab-pane>
                        </el-tabs>
                    </div>
                </Card>
            </Content>
        </Layout>
  </div> 
</template>

<script>
export default {
  name: 'Addjia',
  data () {
    return {
       activeName: 'second'
  }
 },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    
</style>