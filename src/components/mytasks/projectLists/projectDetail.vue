<template>
    <div class="projectDetail">
      <Layout :style="{marginLeft: '200px'}" >            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">                   
                    <el-button type="info" size="small" @click="goBack">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    <el-button  type="success" size="small" @click="modal1 = true">&nbsp;&nbsp;重新指派&nbsp;&nbsp;</el-button>
                    <Modal
                        v-model="modal1"
                        title="重新指派"
                        @on-ok="ok"
                        @on-cancel="cancel">
                        <Select v-model="modal2" style="width:300px;margin-top:5px" placeholder="选择账户">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </Modal>                    
                </Breadcrumb> 
                <div class="title"><span>基本信息</span></div>
                <div class="table1">                             
                    <table class="data" border="1">
                        <thead >
                            <tr :style="{background:'#5BC0DE',color:'white'}">
                                <td>录入账号</td>
                                <td>联系方式</td>
                                <td>开始时间</td>
                                <td>结束时间</td>
                                <td>上传时间</td>
                                <td>一审时间</td>
                                <td>二审时间</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>34</td>
                                <td>54</td>
                                <td>w</td>
                                <td>we</td>
                                <td>23</td>
                                <td>43</td>
                                <td>23</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="upload" border="1">
                        <thead >
                            <tr :style="{background:'#5BC0DE',color:'white'}">
                                <td>录入账号</td>
                                <td>联系方式</td>
                                <td>开始时间</td>
                                <td>结束时间</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>34</td>
                                <td>54</td>
                                <td>w</td>
                                <td>we</td>
                            </tr>
                        </tbody>
                    </table>
                </div>                                            
                <Card>                   
                    <!-- 表格内容 -->
                    <div class="table2">
                        <div class="accessData">
                            <table class="picture" border="1">
                                <thead>
                                    <tr>
                                        <td colspan="4" :style="{background:'#5BC0DE',color:'white'}">列表状态</td>
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
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> <br>
                            <table class="audio" border="1">
                                <thead>
                                    <tr>
                                        <td colspan="4" :style="{background:'#5BC0DE',color:'white'}">列表状态</td>
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
                                    <td colspan="5" :style="{background:'#5BC0DE',color:'white'}">列表状态</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr :style="{background:'#009DD9',color:'white'}">
                                    <td colspan="3">基础数据</td>
                                    <td>铺货</td>
                                    <td>价格</td>
                                </tr>
                                <tr>
                                    <td rowspan="4">sadfas</td>
                                    <td>gdsg</td>
                                    <td>gfh</td>
                                    <td>dfgb</td>
                                    <td>argfsd</td>                                    
                                </tr>
                                <tr>
                                    
                                    <td>gdsg</td>
                                    <td>gfh</td>
                                    <td>dfgb</td>
                                    <td>argfsd</td>                                    
                                </tr>
                                <tr>
                                    
                                    <td>gdsg</td>
                                    <td>gfh</td>
                                    <td>dfgb</td>
                                    <td>argfsd</td>                                    
                                </tr>
                                <tr>
                                    
                                    <td>gdsg</td>
                                    <td>gfh</td>
                                    <td>dfgb</td>
                                    <td>argfsd</td>                                    
                                </tr>
                                <tr>
                                    <td>sadfas</td>
                                    <td>gdsg</td>
                                    <td>gfh</td>
                                    <td>dfgb</td>
                                    <td>argfsd</td>                                    
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
  name: 'projectDetail',
  data () {
    return {
        // 表格数据
        img: img,
        modal1:false,
        modal2:'',
        cityList: [
                        {
                            value: 'New York',
                            label: 'New York'
                        }
                    ],          
    }
  },
  methods:{
    // 返回按钮
    goBack(){
          this.$router.push('/firstInstanceLists')
      },
    //指派人员
    ok () {
        this.$Message.info('Clicked ok');
    },
    cancel () {
        this.$Message.info('Clicked cancel');
    }

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.projectDetail{
    .title{width: 100%;height: 40px;background: #5BC0DE;line-height: 40px;color: #fff;padding-left:10px;display:flex;justify-content: space-between;align-items:center;margin-bottom: 10px;
        span:nth-child(2){display: block;width: 100px;height: 30px;background: #C1C1C1;border-radius: 5px;line-height: 30px;text-align: center;}
    }
    .table1{width: 100%; display: flex; justify-content: space-around; padding-bottom: 10px;
        .data{width: 60%; border-collapse: collapse;
            td{height: 25px; text-align: center; line-height: 25px;}
        } 
        .upload{width: 36%; border-collapse: collapse;
            td{height: 25px; text-align: center; line-height: 25px;}
        }               
    }
    .table2{width: 100%;border-collapse: collapse; display: flex; justify-content: space-between;
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