<template>
  <div class="login" :style ="bj">
     <div class="shang" >
           <img :src="earth" alt="旭中调研系统" class="earth">
          
      </div>

      <div class="title" v-text="companyName" :style ="logo"></div>

      <div class="content">
        <div class="for">
          <input type="text" id="userName" placeholder="请输入账号" autocomplete="off"><br>
          <input type="password" id="passWord" placeholder="请输入密码"><br>
          <div id="box">
              <input type="submit" id="submit" value="登录">  
          </div>       
        </div>
      </div>

  </div> 
</template>

<script>
import earth from "../../../src/assets/img/login/earth.png"

export default {
  name: 'Login',
  data () {
    return {
     
      earth:earth,
      companyName:"上海旭中调研系统",
      //登录页面大背景
      bj: {
          backgroundImage: "url(" + require("../../assets/img/login/bd.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",        
      },
      //logo
      logo:{
          backgroundImage: "url(" + require("../../../src/assets//img/login/logo.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition:"left "
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  html,body{height: 100%;}
  .login{width:100%;height:100vh; min-width: 1100px; overflow: hidden; 
    
     .shang{width:700px; height: 550px;position: absolute;  top: 0; left: 0; bottom: 0; right: 0;margin: auto;top:-300px;right:50px;
          .earth{width: 100%;height: 100%;} 
          }
     
    .content{width: 500px; height: 250px; margin: 0 auto;margin: auto;  position: absolute;  top: 0; left: 0; bottom: 0; right: 0;top:350px;

        .for{ box-sizing: border-box; width: 490px; height: 230px; padding: 10px 20px 0; background-color: #21202E; border: 1px solid #2d2c3c; 
            position: absolute; left: 0; right: 0; margin: auto; 
            input{width: 450px; height: 75px; border: none; border-bottom: 1px solid #4d6a74; background: inherit; color: #4d6a74; font-size: 16px; text-align: center;outline-color:#524E89 }
          
          #box{ width: 450px; height: 70px; 
            #submit{display: block; width: 160px; height: 40px; margin: 15px auto 0; border: none; font-size: 18px; color: #56BACA; text-align: center; line-height: 40px; background-color: #2d3c41;}
            #submit:hover{background-color: #3F3E41;cursor: pointer;}
          }
      }
    }
  }
  .title{width: 350px; height: 50px; color: #56BACA; margin: auto;  position: absolute;  top: 0; left: 0; bottom: 0; right: 0;left:40px;font-size: 30px; 
        
        text-align: center} 
</style>
