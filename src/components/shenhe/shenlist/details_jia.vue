<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    
                    <el-button type="info" size="small" @click="tolist()">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    
                </Breadcrumb>
                <Card>
                    <div style="height: 600px;">
                        <div class="wrop">
                             <div class="left">
                                 <div class="title"><span>审核数据</span></div>
                                 <div class="tab">
                                       家化表格
                                 </div>
                            </div>
                            <div class="right">
                                <div class="top">
                                    <div class="title"><span>访问资料</span><Button type="success" size="small">下载资料</Button></div>
                                    <ul >
                                         
                                             <li>
                                                 <div class="image">
                                                   <img :src="logo" alt="" class="tupian">
                                                 </div>
                                                 <div class="font">
                                                    <p>类型：XXX</p>
                                                    <p>归类：XXX</p>
                                                    <p>经度：XXX</p>
                                                    <p>维度：XXX</p>
                                                    <p>拍摄时间：XXX</p>
                                                    <p>问题类型：XXX</p>
                                                    <p>地点备注：XXX</p>
                                                    <p>问题备注：XXX</p>
                                                    <Button type="success" size="small" style="margin-top:10px">点定位</Button>
                                                 </div>
                                             </li>
                                             <li></li>
                                             <li></li>
                                             <li></li>
                                             <li></li>
                                             <li></li>
                                         
                                    </ul>
                                </div>
                                <div class="xia">
                                     <div class="title"><span>访问资料</span></div>
                                     <ul >
                                          <li>
                                              <div class="zuo" :style="video">001</div>
                                              <div class="zhong">2018-10-01-15:30--2018-11-10-15:30</div>
                                              <div class="you">
                                                  <p>播放录音</p>
                                                  <p>文字转换</p>
                                              </div>
                                          </li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                          <li></li>
                                     </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </Card>
            </Content>
        </Layout>
  </div> 
</template>

<script>
 import logo from "../../../../src/assets/logo.png"
 

export default {
  name: 'Details_jia',
  data () {
    return {
       logo:logo,
       video:{
          backgroundImage: "url(" + require("../../../../src/assets/img/test/video.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition:"left "
      }
     
    }
 
   },
    methods:{
        tolist(){
           this.$router.push("/list")
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.wrop{width: 100%;height: 600px;display: flex;justify-content: space-between;
   .left{width: 55%;height: 100%; }
   .tab{width: 100%;height: 570px;border: 1px solid green;}
   .right{width: 43%;height: 100%;
       .top{height: 400px;width: 100%;;
            
            ul{width: 100%;height: 380px;overflow: auto;border: 1px solid orange;
            // display: flex;flex-wrap:wrap;
               li{width: 100%;height: 200px;border: 1px solid red;margin: 3px;display: flex;justify-content: space-between;
                  .image{width: 200px;height: 200px;border: 1px solid blue;
                     img{width: 200px;height: 200px;}
                  }
                  .font{width: 100%;height: 200px;font-size: 10px;font-weight: bold;padding-left: 10px}
               }
             }
        }
       .xia{height: 180px;width: 100%;border: 1px solid red;margin-top:20px;overflow: auto;
             ul{width: 100%;border: 1px solid blue;}
             li{width: 100%;height: 49px;border: 1px solid red;display: flex;justify-content: space-between;
               .zuo{width: 20%;height: 49px;border: 1px solid green;text-align: center;line-height: 49px;padding-left: 30px;font-size:12px;}
               .zhong{width: 60%;height: 49px;border: 1px solid green;font-size:12px;text-align: center;line-height: 49px}
               .you{width: 20%;height: 49px;border: 1px solid green;
                   p{width: 100%;height: 22px;background: #5BB85D;color:#fff;border-radius: 2px;text-align: center;font-size: 12px;line-height: 22px}
                   p:nth-child(2){margin-top: 2px}
               }
             }
       }
   }
}

.title{width: 100%;height: 30px;background: #5BC0DE;line-height: 30px;color: #fff;padding:0 10px;display:flex;justify-content: space-between;align-items:center;
       
}
 .tupian{width: 100px;height: 100px; }
    
</style>