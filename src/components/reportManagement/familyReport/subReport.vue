<template>
    <div class="subReport">
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
                        <li @click="sub" class="active">分报告</li>
                        <li @click="salesPerson">销售员分报告</li>
                        <li @click="customer">客户分报告</li>
                        <li @click="province">省份报告</li>
                        <li @click="detail">商店明细数据</li>
                    </ul>                           
                <Card>
                    <div class="table">

                        <!-- 表格 -->
                        <Table border :columns="columns13" :data="data13" ></Table>                       
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'subReport',
  data () {
    return {
        // 表格内容
        columns13: [
            {
                title: '区域',
                key: '区域'
            },
            {
                title: '省份',
                key: '省份'
            },
            {
                title: 'DSR编号',
                key: 'DSR编号'
            },
            {
                title: '原始得分',
                key: '原始得分',               
            },
            {
                title: '标准得分',
                key: '标准得分',               
            },
            {
                title: '商店总数',
                key: '商店总数', 
            },
            {
                title: 'A+店数',
                key: 'A'
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
                title: '样本总数',
                key: '样本总数',               
            },
            {
                title: 'DSR排名',
                key: 'DSR排名', 
            }
        ],
        data13: [
            {
                区域: 'John Brown',
                省份: 18,
                DSR编号:999,
                原始得分: 'New York No. 1 Lake Park',
                标准得分: 43,
                A: 55,
                商店总数: 88,
                A店数: 88,
                B店数: 43,
                C店数: 99,
                D店数: 55,
                样本总数: 88,
                DSR排名:8
            },
        ]
            
    }
  },
    methods: {
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
    .subReport{
        .table{height: 600px;}
        .nav{display: flex; width: 600px; height: 40px; text-align: center; line-height: 40px; color: white;
            li{display:block; width: 100px; height: 40px; background: #cccccc; border-radius: 5px;}
            li:hover{background: #5BB85D;}
            .active{background: #5BB85D;} 
        }
    }
</style>