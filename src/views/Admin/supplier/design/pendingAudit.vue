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
      <el-table-column prop="taskId" label="序号" width="55" align="center"></el-table-column>

      <el-table-column prop="taskName" label="需求名称"></el-table-column>

      <el-table-column prop="supplierName" label="需求类型"></el-table-column>

      <el-table-column prop="companyName" label="发布需求企业"></el-table-column>

      <el-table-column prop="userName" label="设计师" align="center"></el-table-column>

      <el-table-column prop="supplierName" label="承接供应商" align="center"></el-table-column>

      <el-table-column prop="deadline" label="截止日期"></el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button @click="pendingAuditDet(scope.row) " type="text" size="small">查看详情</el-button>
          <el-button type="text" size="small">查看成果</el-button>
          <el-button @click="changePassStates(scope.row)" type="text" size="small">审核通过</el-button>
          <el-button @click="changeNoPassStates(scope.row)" type="text" size="small">审核不通过</el-button>
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
    <el-dialog title="提示" :visible.sync="accept" width="15%" :before-close="handleClose">
      <span>审核通过</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="accept=false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="disaccept" width="15%" :before-close="handleClose">
      <span>审核不通过</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="disaccept=false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>



<script>
import Qs from "qs";
export default {
  name: "pendingAudit",
  data() {
    return {
      accept: false, //接受需求弹窗
      disaccept: false,
      query: {
        pageIndex: 1,
        pageSize: 10
      },
      tableData:[
        {
          taskId: "123",
          taskName: "123",
          supplierName:"123",
          companyName: "123",
          userName: "123",
          supplierName:"123",
          deadline: "123"
        }
      ],
      //接受表单数据
      formLabelWidth: "120px",
      activeName: "first",
      tableData: [],
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
    // 全部需求详情页面跳转
    pendingAuditDet(row) {
      console.log(row.taskId);
      this.$router.push({
        path: "/admin/pendingAuditDet",
        query: {
          taskId: row.taskId
        }
      });
    },
    //审核通过
    changePassStates(row){
      console.log(row.taskId);
      var that = this;
      var data = Qs.stringify({
        taskId: row.taskId,
        taskState: 5
      });
      that.axios({
        method: "post",
        url: "http://127.0.0.1:8082/supplier/changeState",
        data: data
      });
      this.$message.success("审核通过");
      this.$router.go(0)
    },
    //审核不通过
    changeNoPassStates(row){
      console.log(row.taskId);
      var Intl;
      var that = this;
      var data = Qs.stringify({
        taskId: row.taskId,
        taskState: 4
      }); 
      that
      .axios({
        method: "post",
        url: "http://127.0.0.1:8082/supplier/changeState",
        data: data
      })
      .then(response => {
          console.log(response);
        });
      this.$message.success("审核不通过");
      this.reload();
    },
    //获取数据
    getData() {
      console.log(this.userName);
      var that = this;
      var data = Qs.stringify({
        userName:"supplier"
      });

      console.log(data);
      that
        .axios({
          method: "post",
          url: "http://127.0.0.1:8082/supplier/supplierAuditingTaskList",
          data: data
        })
        .then(response => {
          console.log(response);
          this.tableData = response.data.allData;
        });
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
