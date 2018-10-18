

<template>
  <div class="hello">
      <Layout :style="{marginLeft: '200px'}" >
            
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}" class="tit">
                    <el-button type="info" size="small" @click="backtomoban()">&nbsp;&nbsp;返&nbsp;回&nbsp;&nbsp;</el-button>
                    <el-button type="success" size="small"  @click="modal4 = true">添加类别</el-button>
                    
                </Breadcrumb>
                <Card>
                    <div style="height: 600px"> 
                        <!-- 表格 -->
                                
                                <el-table
                                    :data="tableData"
                                    border
                                    style="width: 100%">
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
                                        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                                        
                                        
                                    </template>
                                    </el-table-column>
                                </el-table>

                               <!-- 复选框 -->
                                <!-- <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                                    <Checkbox
                                        :indeterminate="indeterminate"
                                        :value="checkAll"
                                        @click.prevent.native="handleCheckAll">全选</Checkbox>
                                </div>
                                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                    <Checkbox label="香蕉"></Checkbox>
                                    <Checkbox label="苹果"></Checkbox>
                                    <Checkbox label="西瓜"></Checkbox>
                                    <Checkbox label="冬瓜"></Checkbox>
                                </CheckboxGroup> -->

                                 <!-- 弹出层 -->

                                <Modal
                                    v-model="modal4"
                                    title="基本信息"
                                    ok-text="保存"
                                    cancel-text="取消"
                                    >
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
        </Layout>
  </div> 
</template>

<script>
export default {
  name: 'Leibie',
  data () {
    return {
        //checkbox
        // indeterminate: true,
        // checkAll: false,
        // checkAllGroup: ['香蕉', '西瓜'],

       // 弹出
       modal4: false,
       value: '',
       value5: '',

       tableData: [{
          select: '',
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
        cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    
                ],
                model1: '',
            
        
  }
 },
 methods:{
     handleClick(row) {
        console.log(row);
      },
      backtomoban(){
          this.$router.push("/moban")
      }
      
   //checkbox
    //   handleCheckAll () {
    //             if (this.indeterminate) {
    //                 this.checkAll = false;
    //             } else {
    //                 this.checkAll = !this.checkAll;
    //             }
    //             this.indeterminate = false;

    //             if (this.checkAll) {
    //                 this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
    //             } else {
    //                 this.checkAllGroup = [];
    //             }
    //         },
    //         checkAllGroupChange (data) {
    //             if (data.length === 3) {
    //                 this.indeterminate = false;
    //                 this.checkAll = true;
    //             } else if (data.length > 0) {
    //                 this.indeterminate = true;
    //                 this.checkAll = false;
    //             } else {
    //                 this.indeterminate = false;
    //                 this.checkAll = false;
    //             }
    //         }

 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
    .tankuang{
        width: 100%;height: 220px;
        .beizhu{margin: 20px 0}
    }
    .tit{display: flex;justify-content: space-between}
</style>