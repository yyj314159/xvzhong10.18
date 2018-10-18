<template>
    <div class="detailsReport">
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
                        <li @click="customer">客户分报告</li>
                        <li @click="province">省份报告</li>
                        <li @click="detail" class="active">商店明细数据</li>
                    </ul>                           
                <Card>
                    <div class="table" >
                        <!-- 表格 -->
                        <Table border :columns="columns14" :data="data14" ></Table>                       
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'detailsReport',
  data () {
    return {
        // 表格数据
        columns14: [
            {
                title: '调研对象',
                key: '调研对象'
            },
            {
                title: '门店类型',
                key: '门店类型'
            },
            {
                title: 'SKU总数',
                key: 'SKU总数'
            },           
            {
                title: '原始得分',
                key: '原始得分'
            },
            {
                title: '标准得分',
                key: '标准得分'
            },           
            {
                title: '实际SKU总数',
                key: '实际SKU总数'
            },
            {
                title: '实际必选SKU总数',
                key: '实际必选SKU总数',               
            },
            {
                title: '缺失必选SKU总数',
                key: '缺失必选SKU总数',               
            },
            {
                title: 'XX实际必选SKU总数',
                key: 'XX实际必选SKU总数', 
            },
            {
                title: 'XX总数',
                key: 'XX总数'
            },
            {
                title: 'xx系列',
                key: 'xx系列'
            },
            {
                title: 'xxx系列',
                key: 'xxx系列'
            },
            {
                title: 'DSR店数',
                key: 'DSR店数',               
            },
        ],
        data14: [
            {
                调研对象: 'John Brown',
                门店类型: '河南',
                SKU总数: '001',
                原始得分: '小猫',               
                客户级别: 'AAA',
                标准得分:999,
                实际SKU总数: 4,
                实际必选SKU总数: 55,
                缺失必选SKU总数: "查看",
                XX实际必选SKU总数: 99,
                XX总数: 43,
                xx系列: 55,
                xxx系列: 77,
                DSR店数: 88
            },
        ]
            
    }
  },
    methods: {
        // nav跳转
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
.detailsReport{
    .table{height: 600px;}
    .nav{display: flex; width: 600px; height: 40px; text-align: center; line-height: 40px; color: white;
        li{display:block; width: 100px; height: 40px; background: #cccccc; border-radius: 5px;}
        li:hover{background: #5BB85D;}
        .active{background: #5BB85D;} 
    }
}
 
</style>