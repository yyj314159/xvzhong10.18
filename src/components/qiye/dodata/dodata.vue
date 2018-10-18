<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                        <!-- 表格 -->
                            <table border='1' width="100%" cellpadding='0' cellspacing='0'>
                                  <tr class="header">
                                      <td>用户名</td>
                                      <td>部门</td>
                                      <td>职位</td>
                                      <td>IP</td>
                                      <td>记录日期</td>
                                      
                                      <td>操作</td>
                                      
                                  </tr>

                                  <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td>删除</td>
                                     
                                      
                                     
                                  </tr>
                                  <tr>
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
                                     
                                     
                                  </tr>
                                  <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                     
                                      
                                  </tr>
                                  

                                  
                              </table>
                    </div>
                </Card>
            </Content>
        </Layout>
  </div> 
</template>

<script>
export default {
  name: 'Dodata',
  data () {
    return {
       
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    table{text-align: center;
        td{height: 25px}
        }
    .header{background: #009DD9;color: #fff}
</style>