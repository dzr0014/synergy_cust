<template>
  <div>
    <div class="handle-box">
    
      <el-input v-model="query.name" placeholder="需求名称" class="handle-input mr10"></el-input>
      <el-input v-model="query.state" placeholder="状态" class="handle-input mr10"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      class="table"
      ref="multipleTable"
      header-cell-class-name="table-header"
      @selection-change="handleSelectionChange"
    >
      <el-table-column prop="id" label="序号" width="55" align="center"></el-table-column>

      <el-table-column prop="taskName" label="需求名称"></el-table-column>
     
      <el-table-column prop="bussessType" label="需求类型"></el-table-column>

      <el-table-column prop="publishTask" label="发布需求企业"></el-table-column>
       <el-table-column prop="count" label="数量" align="center"></el-table-column>

      <el-table-column prop="taskLeader" label="负责人" align="center"></el-table-column>

      <el-table-column prop="taskLeader" label="生产单位" align="center"></el-table-column>

       <el-table-column label="截止日期">
        <template slot-scope="scope">{{scope.row.date}}</template>
      </el-table-column>
      
      <el-table-column label="操作" width="180" align="center">
        <template>
          <el-button @click="jumpdesigningDet() " type="text" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :current-page="query.pageIndex"
        :page-size="query.pageSize"
        :total="pageTotal"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
  </div>
</template>



<script>
export default {
  name: "circulationingTask", 
  data() {
    return {
      query: {
        pageIndex: 1,
        pageSize: 10
      },
      //接受表单数据
      formLabelWidth: "120px",
      activeName: "first",
      tableData: [
        {
          id: 1,
          taskName: "光电测控仪器设备",
          bussessType: "电视测角仪",
          publishTask: "长春奥普光电技术股份有限公司",
          taskLeader: "李华",
count:"50000",
          state: "新增",
          date: "2019-11-17"
        },
        {
          id: 2,
          taskName: "磨床生产",
          bussessType: "平面磨床制作",
          publishTask: "杭机集团长春一机有限公司",
          taskLeader: "刘柳",
count:"50000",
          state: "待审核",
          date: "2019-12-17"
        },
        {
          id: 3,
          taskName: "通信技术设计",
          bussessType: "通信技术",
          publishTask: "哈尔滨海邻科信息技术有限公司",
          taskLeader: "周舟",
count:"50000",
          state: "已完成",
          date: "2019-9-22"
        },
        {
          id: 4,
          taskName: "发电智能制造",
          bussessType: "发电装备",
          publishTask: "哈尔滨电机厂有限责任公司",
          taskLeader: "孙铭",
count:"50000",
          state: "进行中",
          date: "2019-11-13"
        }
      ],
      multipleSelection: [],
      editVisible: false,
      addVisible: false,
      pageTotal: 0,
      form: {},
      idx: -1,
      id: -1
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 详情页面跳转
    jumpdesigningDet() {
      this.$router.push("/admin/circulationTaskDet");
    }
  }
  /*
   *转跳对应需求信息页面
   */
};
</script>

<style scoped>
.con {
  width: 500px;
  height: 1000px;
  margin: 0 auto;
  text-align: center;
}

.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 260px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
.box {
  font-size: 24px;
}
</style>
