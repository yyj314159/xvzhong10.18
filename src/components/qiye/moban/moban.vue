<template>
  <div class="hello">
     <Layout :style="{marginLeft: '200px'}">
            <tabs :animated="false">

                <!-- 产品模板 -->
                <tab-pane label="产品模板">
                    <Content :style="{padding: '0 16px 16px'}">
                        
                        <Card>
                            <div style="height: 600px">
                                <div class="sou">
                                    &nbsp;&nbsp;&nbsp;
                                    <el-select v-model="value8" filterable  style="width:280px" @change="obtainValue" >
                                        <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        class="selectedval"
                                        >
                                        </el-option>
                                    </el-select>
                                    &nbsp;&nbsp;
                                    <el-button type="success" @click="search()">搜索</el-button>
                                    <el-button type="success" @click="leibie()">产品类别管理</el-button>
                                    
                                </div>
                               
                          <!-- 表格树 -->
                                <el-tree
                                    :data="data"
                                    :props="defaultProps"
                                    accordion
                                    @node-click="handleNodeClick">
                                    
                                </el-tree>
                           <!-- 表格 -->
                                <el-table
                                    :data="tableData"
                                    border
                                    style="width: 100%">

  <el-tree
                                    :data="data"
                                    :props="defaultProps"
                                    accordion
                                    @node-click="handleNodeClick">
                                    
                                </el-tree>


                                    <el-table-column
                                    fixed
                                    prop="name"
                                    label="商品名称"
                                    width="200">
                                    </el-table-column>
                                    
                                    <el-table-column
                                    prop="num"
                                    label="编号"
                                    width="100">
                                    </el-table-column>
                                    <el-table-column
                                    prop="tiaoxingma"
                                    label="条形码"
                                    width="150">
                                    </el-table-column>
                                    <el-table-column
                                    prop="address"
                                    label="是否需要价格"
                                    width="200">
                                    </el-table-column>
                                    <el-table-column
                                    prop="order"
                                    label="排序"
                                    width="80">
                                    </el-table-column>
                                    <el-table-column
                                    fixed="right"
                                    label="操作/添加"
                                    width="200">
                                    <template slot-scope="scope">
                                        <el-button @click="handleClick(scope.row);tochange()" type="text" size="small">查看/编辑</el-button>
                                        <el-button type="text" size="small"  @click="modal4 = true;handleClick(scope.row)" >添加子类</el-button>
                                        
                                    </template>
                                    </el-table-column>
                                </el-table>

                        <!-- 弹出层模板 -->

                                <Modal
                                    v-model="modal4"
                                    title="Modal Title"
                                    ok-text="OK"
                                    cancel-text="Cancel">
                                    <div class="tankuang">
                                        <Select v-model="model1" style="width:300px" placeholder="请选择类别名称 ">
                                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                    
                                        <Input v-model="value5" type="textarea" :rows="4" placeholder="备注 / 描述"  class="beizhu"/>

                                        <Input v-model="value" placeholder="请输入排序值:" style="width: 300px" />

                                    </div>
                                </Modal>
                                


                            </div>
                        </Card>
                    </Content>
                </tab-pane>

                <!-- app项目模板 -->
                <tab-pane label="app项目模板">
                    <Content :style="{padding: '0 16px 16px'}">
                        
                        <Card>
                            <div style="height: 600px">
                                <div class="sou">
                                    项目类型&nbsp;&nbsp;&nbsp;
                                    <el-select v-model="value8" filterable placeholder="请选择" style="width:280px">
                                        <el-option
                                        v-for="item in options2"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                    &nbsp;&nbsp;
                                    <el-button type="success" >搜索</el-button>
                                    <el-button type="success" @click="tobianji">添加模板</el-button>
                                    <!-- <router-link to="/moban/bianji" ><el-button type="success" >添加模板</el-button></router-link> -->
                                    
                                </div>
                                <!-- 表格 -->
                                <el-table
                                    :data="app"
                                    border
                                    style="width: 100%;"
                                    >
                                    <el-table-column
                                    prop="type"
                                    label="项目类型"
                                    width="180">
                                    </el-table-column>
                                    <el-table-column
                                    prop="title"
                                    label="模板名称"
                                    width="180">
                                    </el-table-column>
                                    <el-table-column
                                    prop="miaoshu"
                                    label="备注描述">
                                    </el-table-column>
                                     <el-table-column
                                    prop="caozuo"
                                    label="操作">
                                    </el-table-column>
                                     
                                </el-table>
                            </div>
                        </Card>
                    </Content>
                </tab-pane>


                <!-- 算分模板 -->
                <tab-pane label="算分模板">
                    <Content :style="{padding: '0 16px 16px'}">
                        
                        <Card>
                            <div style="height: 600px">
                                <div style="height: 600px">
                                    <div class="sou">
                                        项目类型&nbsp;&nbsp;&nbsp;
                                        <el-select v-model="value8" filterable placeholder="请选择" style="width:280px">
                                            <el-option
                                            v-for="item in options3"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        &nbsp;&nbsp;
                                        <el-button type="success" >搜索</el-button>
                                        <el-button type="success" @click="tonew">添加模板</el-button>
                                    </div>
                                    <!-- 表格 -->
                                    <el-table
                                        :data="suanfa"
                                        border
                                        style="width: 100%;"
                                        >
                                        <el-table-column
                                        prop="type"
                                        label="项目类型"
                                        width="180">
                                        </el-table-column>
                                        <el-table-column
                                        prop="title"
                                        label="模板名称"
                                        width="180">
                                        </el-table-column>
                                        <el-table-column
                                        prop="miaoshu"
                                        label="备注描述">
                                        </el-table-column>
                                        <el-table-column
                                        prop="caozuo"
                                        label="操作">
                                        </el-table-column>
                                        
                                    </el-table>
                                </div>
                            </div>
                        </Card>
                    </Content>
                </tab-pane>
            </tabs>
                    
        </Layout>
    
  </div> 
</template>

<script>
import $ from "jquery"
import axios from "axios"

export default {
  name: 'Moban',
//   methods: {
//       tableRowClassName({row, rowIndex}) {
//         if (rowIndex === 1) {
//           return 'warning-row';
//         } else if (rowIndex === 3) {
//           return 'success-row';
//         }
//         return '';
//       }
//     },

  data () {
    return {
        // 表格树
    data: [
        //1111
            {
            label: '一级 1',
            children: [
                {
                label: '二级 1-1',
                children: [{
                label: '三级 1-1-1'
                }]
            }
            ]
            }, 
        //2222
            {
                label: '一级 2',
                children: [
                        {
                        label: '二级 2-1',
                        children: [{
                        label: '三级 2-1-1'
                        }
                    ]
                }, 
                {
                    label: '二级 2-2',
                    children: [{
                    label: '三级 2-2-1'
                    }]
                }]
            }, 
        //3333
            // {
            //     label: '一级 3',
            //     children: [{
            //         label: '二级 3-1',
            //         children: [{
            //         label: '三级 3-1-1'
            //         }]
            //     }, {
            //         label: '二级 3-2',
            //         children: [{
            //         label: '三级 3-2-1'
            //         }]
            //     }]
            //  }
        
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },


        
        cityList:[],
        value5:"",
        value:"",
        //111
        options: [
        //     {
        //   value: '1',
        //   label: '实化'
        // }, {
        //   value: '2',
        //   label: '家化'
        // }, {
        //   value: '3',
        //   label: '问卷'
        // }
         
        ],
        value8: '项目调查产品类别',
        select:"",
        model1:"",
       

// 弹出
       modal4: false,


        //222
        options2: [{
          value: '选项1',
          label: '实化'
        }, {
          value: '选项2',
          label: '家化'
        }, {
          value: '选项3',
          label: '问卷'
        }],
        //333
        options3: [{
          value: '选项1',
          label: '111'
        }, {
          value: '选项2',
          label: '222'
        }, {
          value: '选项3',
          label: '333'
        }],



        //表格
       //111
        tableData: [{
          
          name: '高夫经典保湿系列',
          num: '1',
          tiaoxingma: '普陀',
          address: "否",
          order: 1
        }, 
        {
          select: '',
          name: '非必选-高夫容光焕采系列',
          num: '2',
          tiaoxingma: '普陀',
          address: '否',
          order: 2
        }, ],

        // 222
        app: [{
          type: '2016-05-02',
          title: '但vs方法是拜拜',
          miaoshu: '496288+65656',
          caozuo:"编辑",
          
        }],
        //333
        suanfa: [{
          type: 'adfdafdfd',
          title: 'ggggggggg',
          miaoshu: 'ggggg+65656',
          caozuo:"编辑",
          
        }],

      }
  },
  methods:{
      handleClick(row) {
        console.log(row);
      },
       //才品类别管理

       leibie(){
           this.$router.push("/leibie")
       },

        tobianji(){
        this.$router.push("/bianji")
        },
        tonew(){
        this.$router.push("/new")

        },

        search(){
        
            console.log(this.select)
                var that = this;
                axios({
                    url:"http://192.168.0.134:8080/QueryByProduct",
                    params:{pid:that.select}
                })
                .then(function(data){
                    console.log(data.data)         
                })
        
        },

        obtainValue(value){   
            console.log(value)
            this.select=value     
        },
        // 到查看编辑页面
        tochange(){
          this.$router.push("/change")
        },
        //树状
        handleNodeClick(data) {
            console.log(data);
        }
    
    
  },
  mounted(){
           var that = this
        	axios({
            //    url:"http://jx.xuzhixiang.top/ap/api/productlist.php"
                url:"http://192.168.0.134:8080/QueryByTypes"
              
			})
			.then(function(data){
                console.log(data.data)
                var obj={label:data.data[0].tname,value:data.data[0].tid}
                
                that.options.push(obj)
               
            })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .sou{
        width: 100%;height: 50px;display: flex;align-items: center;margin-bottom: 25px
    }
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .tankuang{
        width: 100%;height: 220px;
        .beizhu{margin: 20px 0}
    }
</style>
