<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            <div>时效报告</div>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">                   
                    <el-button type="info" size="small">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    <el-button type="success" size="small">&nbsp;&nbsp;保&nbsp;存&nbsp;&nbsp;</el-button>
                    <el-button type="danger" size="small">&nbsp;&nbsp;删&nbsp;除&nbsp;&nbsp;</el-button>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px; width:100%;">Content</div>
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
       
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    
</style>