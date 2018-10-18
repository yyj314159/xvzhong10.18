<template>
    <div class="customerReport">
      <Layout :style="{marginLeft: '200px'}" >            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">                   
                    <el-button type="info" size="small" @click="goBack">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    <el-button type="success" size="small">&nbsp;&nbsp;保&nbsp;存&nbsp;&nbsp;</el-button>
                    <el-button type="danger" size="small">&nbsp;&nbsp;导&nbsp;出    &nbsp;&nbsp;</el-button>
                </Breadcrumb>   
                 <!-- nav -->
                    <ul class="nav">
                        <li @click="district">大区</li>
                        <li @click="sub">分报告</li>
                        <li @click="salesPerson">销售员分报告</li>
                        <li @click="customer" class="active">客户分报告</li>
                        <li @click="province">省份报告</li>
                        <li @click="detail">商店明细数据</li>
                    </ul>   
                <card>                                      
                    <div class="table" >
                        <!-- 表格 -->
                        <Table border :columns="columns15" :data="data15" ></Table>                       
                    </div>
                </card> 
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'visitor',
  data () {
    return {
        // 表格数据
        columns15: [
            {
                title: '区域',
                key: '区域',             
            },
            {
                title: '省份',
                key: '省份'
            },
            {
                title: '客户编号',
                key: '客户编号'
            },
            {
                title: '客户名称',
                key: '客户名称'
            },
            {
                title: '客户级别',
                key: '客户级别'
            },                       
            {
                title: '标准得分',
                key: '标准得分'
            },
            {
                title: '商店总数',
                key: '商店总数',               
            },
            {
                title: 'A+店数',
                key: 'A+店数',               
            },
            {
                title: 'A店数',
                key: 'A', 
            },
            {
                title: 'B店数',
                key: 'B店数'
            },
            {
                title: 'C店数',
                key: 'C店数'
            },
            {
                title: 'D店数',
                key: 'D店数'
            },
            {
                title: 'DSR店数',
                key: 'DSR店数',               
            },
            {
                title: '样本总数',
                key: '样本总数',               
            },
            {
                title: '排名',
                key: '排名', 
            }
        ],
        data15: [
            {
                区域: 'John Brown',
                省份: '河南',
                客户编号:1,
                客户名称:'jack',
                客户级别:'AAA',
                标准得分:999,
                商店总数: '2',
                A: 55,
                A店数: "查看",
                B店数: 43,
                C店数: 99,
                D店数: 55,
                DSR店数: 77,
                样本总数: 88,
                排名:8
            },
        ]         
    }
  },
    methods: {
        // 导航跳转
        district () {
            this.$router.push("/districtReport")
        },
        sub() {
            this.$router.push("/subReport")
        },
        salesPerson () {
            this.$router.push("/salesPersonReport")
        },
        customer () {
            this.$router.push("/customerReport")
        },
        province () {
            this.$router.push("/provinceReport")
        },
        detail () {
            this.$router.push("/detailsReport")
        },
        // 返回按钮
        goBack(){
            this.$router.push("/familyReportList")
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss"> 
.customerReport{
    .table{height: 600px;}
    .nav{display: flex; width: 600px; height: 40px; text-align: center; line-height: 40px; color: white;
        li{display:block; width: 100px; height: 40px; background: #cccccc; border-radius: 5px;}
        li:hover{background: #5BB85D;}
        .active{background: #5BB85D;} 
    }
}
</style>