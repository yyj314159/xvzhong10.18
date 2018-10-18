<template>
  <div class="hello">
    <Layout :style="{marginLeft: '200px'}">
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    
                    <div class="back">返回</div>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">调研对象</div>
                </Card>
            </Content>
        </Layout>
    
    
  </div>
</template>

<script>
export default {
  name: 'Diaoyan',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aaa{
      color: red;
      .bbb{
        color: blue;
      }

    }



</style>