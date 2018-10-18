<template>
  <div class="hello">
     <Layout :style="{marginLeft: '200px'}">
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    
                    
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                        <div class="shang">
                           <div class="sou1">
                               <div class="sou11">
                                    <Select v-model="model1" style="width:200px" placeholder="项目类型">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>

                                    <Select v-model="model1" style="width:200px" placeholder="安排状态">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                    <Button type="success">搜索</Button>

                               </div>
                               <div>
                                    <Button class="biao">导出表格</Button>
                               </div>
                               
                           </div>
                           <div class="sou2">
                               <Input v-model="value" placeholder="调研对象" style="width: 300px" />
                               <Button type="success">搜索</Button>
                           </div>
                        </div>
                        <!-- 下 -->
                        <div class="xia">
                            <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>
                            <br>
                            <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> Export source data</Button>
                            <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> Export sorting and filtered data</Button>
                            <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> Export custom data</Button>
                        </div>

                    </div>
                </Card>
            </Content>
        </Layout>
    
  </div> 
</template>

<script>

    export default {
        data () {
            return {
                name: 'Shenhe_shi',
                cityList: [
                   
                    {
                        value: 'London',
                        label: '时效'
                    },
                    
                ],
                model1: '000',
                value:"",
                columns8: [
                    {
                        "title": "项目名称",
                        "key": "name",
                        "fixed": "left",
                        "width": 200
                    },
                    {
                        "title": "DSR进度",
                        "key": "show",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: 'Greater than 4000',
                                value: 1
                            },
                            {
                                label: 'Less than 4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "调研对象数量",
                        "key": "weak",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "安排状态",
                        "key": "signin",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "操作",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Active",
                        "key": "active",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "7, retained",
                        "key": "day7",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "30, retained",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "The next day left",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Day Active",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Week Active",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Month Active",
                        "key": "month",
                        "width": 150,
                        "sortable": true
                    }
                ],
                data7: [
                    {
                        "name": "项目名称",
                        "fav": 0,
                        "show": 7302,
                        "weak": 5627,
                        "signin": 1563,
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                        "day": 558,
                        "week": 4440,
                        "month": 5610
                    },
                    {
                        "name": "Name2",
                        "fav": 0,
                        "show": 4720,
                        "weak": 4086,
                        "signin": 3792,
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                        "day": 2593,
                        "week": 2507,
                        "month": 1537
                    },
                    {
                        "name": "Name3",
                        "fav": 0,
                        "show": 7181,
                        "weak": 8007,
                        "signin": 8477,
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                        "day": 1561,
                        "week": 3219,
                        "month": 1588
                    },
                    {
                        "name": "Name4",
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,
                        "signin": 8807,
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                        "day": 5309,
                        "week": 1655,
                        "month": 9043
                    },
                    {
                        "name": "Name5",
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,
                        "signin": 6463,
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                        "day": 1230,
                        "week": 4840,
                        "month": 9908
                    },
                    {
                        "name": "Name6",
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,
                        "signin": 457,
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920,
                        "day": 1966,
                        "week": 904,
                        "month": 6851
                    },
                    {
                        "name": "Name7",
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,
                        "signin": 4166,
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                        "day": 4061,
                        "week": 4359,
                        "month": 3676
                    },
                    {
                        "name": "Name8",
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,
                        "signin": 6696,
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                        "day": 2481,
                        "week": 1479,
                        "month": 2346
                    },
                    {
                        "name": "Name9",
                        "fav": 0,
                        "show": 567,
                        "weak": 5859,
                        "signin": 128,
                        "click": 6593,
                        "active": 1971,
                        "day7": 7596,
                        "day30": 3546,
                        "tomorrow": 6641,
                        "day": 1611,
                        "week": 5534,
                        "month": 3190
                    },
                    {
                        "name": "Name10",
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,
                        "signin": 4595,
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ]
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: 'Custom data',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }      
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .shang{width: 100%;height: 100px;
        .sou1{width: 100%; margin:10px 0;display: flex;justify-content: space-between;
           .sou11{width: 500px;display: flex;justify-content: space-between}
           .biao{background: #C1C1C1;color: #fff}
         }
        .sou2{width: 400px;display: flex;justify-content: space-between}
    
    
    }
    .xia{width: 100%;height: 500px;border: 1px solid red}
    
</style>
