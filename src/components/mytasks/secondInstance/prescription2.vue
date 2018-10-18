<template>
    <div class="prescription2">
      <Layout :style="{marginLeft: '200px'}" >            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0',display:'flex', justifyContent: 'space-between'}">                   
                    <el-button type="info" size="small" @click="goBack">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    <span>
                        <el-button  type="success" size="small">&nbsp;&nbsp;审核完成&nbsp;&nbsp;</el-button>
                        <el-button type="success" size="small">&nbsp;&nbsp;保存草稿&nbsp;&nbsp;</el-button>
                        <el-button type="info" size="small">&nbsp;&nbsp;取&nbsp;消&nbsp;&nbsp;</el-button>                    
                    </span>
                </Breadcrumb>                             
                <Card>
                    <!-- 表格内容 -->
                    <div class="table">
                        <div class="accessData">
                            <table class="picture" border="1">
                                <thead>
                                    <tr>
                                        <td colspan="4" :style="{background:'#5BC0DE',color:'white'}">访问资料</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img :src="img" alt=""></td>
                                        <td>
                                            <ul>
                                                <li>类型</li>
                                                <li>归类</li>
                                                <li>经度</li>
                                                <li>纬度</li>
                                                <li>拍摄时间</li>
                                                <li>问题类型</li>
                                                <li>地点描述</li>
                                                <li>问题备注</li>                                                
                                            </ul>
                                        </td>
                                        <td><img :src="img" alt=""></td>
                                        <td>
                                            <ul>
                                                <li>类型</li>
                                                <li>归类</li>
                                                <li>经度</li>
                                                <li>纬度</li>
                                                <li>拍摄时间</li>
                                                <li>问题类型</li>
                                                <li>地点描述</li>
                                                <li>问题备注</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img :src="img" alt=""></td>
                                        <td>
                                            <ul>
                                                <li>类型</li>
                                                <li>归类</li>
                                                <li>经度</li>
                                                <li>纬度</li>
                                                <li>拍摄时间</li>
                                                <li>问题类型</li>
                                                <li>地点描述</li>
                                                <li>问题备注</li>
                                            </ul>
                                        </td>
                                        <td><img :src="img" alt=""></td>
                                        <td>
                                            <ul>
                                                <li>类型</li>
                                                <li>归类</li>
                                                <li>经度</li>
                                                <li>纬度</li>
                                                <li>拍摄时间</li>
                                                <li>问题类型</li>
                                                <li>地点描述</li>
                                                <li>问题备注</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> <br>
                            <table class="audio" border="1">
                                <thead>
                                    <tr>
                                        <td colspan="4" :style="{background:'#5BC0DE',color:'white'}">访问资料</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>录音</td>
                                        <td>时间</td>
                                        <td><el-button type="success" size="small">&nbsp;&nbsp;播放录音&nbsp;&nbsp;</el-button></td>
                                        <td><el-button type="success" size="small">&nbsp;&nbsp;文字转换&nbsp;&nbsp;</el-button></td>
                                    </tr>
                                    <tr>
                                        <td>录音</td>
                                        <td>时间</td>
                                        <td><el-button type="success" size="small">&nbsp;&nbsp;播放录音&nbsp;&nbsp;</el-button></td>
                                        <td><el-button type="success" size="small">&nbsp;&nbsp;文字转换&nbsp;&nbsp;</el-button></td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div> 
                        <table class="auditData" border="1">
                            <thead>
                                <tr>
                                    <td colspan="2" :style="{background:'#5BC0DE',color:'white'}">审核资料</td>
                                </tr>
                                <tr :style="{background:'#009DD9',color:'white'}">
                                    <td>问题类型</td>
                                    <td>上传数据</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>垃圾未处理</td>
                                    <td><img :src="img" alt=""></td>
                                </tr> 
                                <tr>
                                    <td>垃圾未处理</td>
                                    <td><img :src="img" alt=""></td>
                                </tr>                                                                                             
                            </tbody>
                        </table>                                                                  
                    </div>                                      
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
import img from '../../../assets/img/login/logo.png'
export default {
  name: 'prescription2',
  data () {
    return {
        // 表格数据
          img: img, 
    }
  },
  methods:{
      goBack(){
          this.$router.push('/firstInstanceLists')
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.prescription2{
    .table{width: 100%; display: flex; justify-content: space-between;
        .accessData{width: 48%; 
            .picture{width: 100%; border-collapse: collapse;
                td{height: 25px; text-align: center; line-height: 25px;}
            }
            .audio{width: 100%; border-collapse: collapse;
                td{height: 25px; text-align: center; line-height: 25px;}
            }
        }           
        .auditData{width: 48%; border-collapse: collapse;
            td{height: 25px; text-align: center; line-height: 25px;}
        }
    }   
}
</style>