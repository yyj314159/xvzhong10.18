<template>
  <div id="app" class="layout">
    <!-- <img src="./assets/logo.png"> -->
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" style="background:#39435B">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" accordion style="background:#39435B">
               
               <div class="logo" :style ="logo" >上海旭中调研系统</div>

               

                
                    <Submenu name="1" >
                        <template slot="title">
                            <router-link to="./home" tag="span">
                                <Icon type="ios-compass" />
                                旭中首页
                            </router-link>
                        </template>
                        
                    </Submenu>
                
                
                <Submenu name="2" >
                    <template slot="title">
                        <Icon type="md-list-box" />
                        项目管理
                    </template>
                    <MenuItem name="2-1">添加醒目</MenuItem>
                    <MenuItem name="2-2">项目列表</MenuItem>
                    <MenuItem name="2-3">消息反馈</MenuItem>
                </Submenu>
               
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="md-pricetags" />
                        调研对象管理
                    </template>
                    <MenuItem name="3-1">调研对象列表</MenuItem>
                    <MenuItem name="3-2">更新记录</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="md-checkbox-outline" />
                        审核管理
                    </template>
                    
                    <MenuItem name="4-1">
                        <router-link to="./shenhe" tag="span">审核安排</router-link>
                    </MenuItem>    
                    <MenuItem name="4-2">
                        <router-link to="./tuihui" tag="span">审核退回</router-link>
                    </MenuItem>    
                    <MenuItem name="4-3">
                        <router-link to="./list" tag="span">审核列表</router-link>
                    </MenuItem>    
                </Submenu>
               <Submenu name="5">
                    <template slot="title">
                        <Icon type="md-pie" />
                         门店管理
                    </template>
                    <MenuItem name="5-1">
                        <router-link to="./shopLists" tag="span">门店列表</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="6">
                    <template slot="title">                     
                            <Icon type="ios-cube" />
                            企业管理                       
                    </template>

                    
                       <MenuItem name="6-1" >
                          <router-link to="./moban" tag="span">模板管理</router-link>
                       </MenuItem>
                       
                       <MenuItem name="6-2" >
                          <router-link to="./yuangong" tag="span">员工管理</router-link>
                       </MenuItem>
                    
                    
                    <MenuItem name="6-3">
                       <router-link to="./daili" tag="span">代理管理</router-link>
                       
                    </MenuItem>
                    <MenuItem name="6-4">
                        <router-link to="./fangwenyuan" tag="span">访问员管理</router-link>
                    </MenuItem>

                    <MenuItem name="6-5">
                       <router-link to="./quanxian" tag="span">权限管理</router-link>
                    </MenuItem>
                    <MenuItem name="6-6">
                        <router-link to="./dodata" tag="span">操作日志</router-link>
                    </MenuItem>
                </Submenu>
               <Submenu name="7">
                <template slot="title">
                    <Icon type="ios-create" />
                    报告管理
                </template>
                <MenuItem name="7-1">                  
                    <router-link to="./performanceReportVisitor" tag="span">业绩报告</router-link>                  
                                                
                </MenuItem>
                <MenuItem name="7-2">
                    <router-link to="./reportTemplateList" tag="span">报告模板</router-link>
                </MenuItem>
                <MenuItem name="7-3">
                    <router-link to="./prescriptionReportList" tag="span">实效报告</router-link>
                </MenuItem>
                <MenuItem name="7-4">
                <router-link to="./familyReportList" tag="span"> 家化报告</router-link>
                </MenuItem>
                <MenuItem name="7-5">
                    <router-link to="./generatedReportList" tag="span">已生成报告</router-link>
                </MenuItem>               
            </Submenu>
                <Submenu name="8">
                    <template slot="title">
                        <Icon type="md-eye" />
                        可视化管理
                    </template>
                   
                </Submenu>
              <Submenu name="9">
                    <template slot="title">
                        <Icon type="ios-contact" />
                        我的任务
                    </template>
                    <MenuItem name="9-1">
                        <router-link to="./projectLists" tag="span">项目列表</router-link>                    
                    </MenuItem>
                    <MenuItem name="9-2">
                        <router-link to="./firstInstanceLists" tag="span">一审任务</router-link>                    
                    </MenuItem>
                    <MenuItem name="9-3">
                        <router-link to="./secondInstanceLists" tag="span">二审任务</router-link>                    
                    </MenuItem>
                    <MenuItem name="9-4">
                        <router-link to="./calculationLists" tag="span">算分任务</router-link>                                       
                    </MenuItem>
                    <MenuItem name="9-5">
                        <router-link to="./feedBack" tag="span">消息反馈</router-link>
                    </MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}" style="background:red;" class="head">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
               <ul class="loader">
                  <li>【王茂如】</li>
                  <li>【项目经理】</li>
                  <li>【修改密码】</li>
                </ul>

            </Header>
        </Layout>
        <div class="kong"></div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Pub',
  data(){
      return{
         logo:{
          backgroundImage: "url(" + require("../../src/assets//img/login/logo.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition:"5px  ",
          backgroundSize:"30px 30px"
          }
      }
  },
  methods:{
     aaa(){
         console.log("222")
        // this.$router.push("/home")
     }
  }
}
</script>
    
<style >
#app {
  
        /* body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,menu,input,button{
          margin:0;padding:0;
          }
        ul,li,ol{list-style:none;}
        img,fieldset{border:0; }
        img{display:block;}
        a{text-decoration:none; color:#333;}
        h1,h2,h3,h4,h5,h6{font-weight:500;}
        body{ font-family:"微软雅黑";}
        input,a{outline:none;} */
  
}


.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
  .logo{
     width: 200px;height: 40px;background:#293743;color: #00ADEE;text-align: center;line-height: 40px;font-weight: 500;font-size: 14px;padding-left: 10px
  }
   ul,li,ol{list-style:none;}
.ivu-layout-header{height: 40px;}
  .loader{float:right;
           width: 260px;
           height: 40px;
           font-weight: bold;
           font-size: 14px;
           display: flex;
           justify-content: space-around;
           margin-right:180px;
           line-height: 40px;
          

  }
  li {cursor: pointer;}
.kong{height: 40px;width: 100%}
.head{width: 100%;height: 40px;position: fixed;top:0;left: 0;z-index: 9999;}
</style>
