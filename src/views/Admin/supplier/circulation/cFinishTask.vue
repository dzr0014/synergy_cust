<template>
  <div>
    <div class="handle-box">
      <el-button
        type="primary"
        icon="el-icon-delete"
        class="handle-del mr10"
        @click="delAllSelection"
      >批量删除</el-button>
      <!-- <el-button type="primary" class="handle-del mr10" @click="addData">新增</el-button> -->
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
      <el-table-column type="selection" width="40" align="center"></el-table-column>
      <el-table-column prop="id" label="序号" width="55" align="center"></el-table-column>

      <el-table-column prop="taskName" label="需求名称"></el-table-column>

      <el-table-column prop="bussessType" label="需求类型"></el-table-column>

      <el-table-column prop="publishTask" label="发布需求企业"></el-table-column>
      <el-table-column prop="count" label="数量"></el-table-column>
      <el-table-column prop="taskLeader" label="负责人" align="center"></el-table-column>

      <el-table-column prop="state" label="生产单位"></el-table-column>

      <el-table-column label="截止日期">
        <template slot-scope="scope">{{scope.row.date}}</template>
      </el-table-column>

      <el-table-column label="操作" width="180" align="center">
        <template>
          <el-button @click="jumpfinishDet()" type="text" size="small">查看详情</el-button>
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
  name: "cFinishTask",
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
          taskName: "客车汽车前车灯",
          bussessType: "车间零部件生产",
          publishTask: "一汽大众",
          taskLeader: "李名",
          count: "50000",
          state: "进行中",
          date: "2019-12-1"
        },
        {
          id: 2,
          taskName: "中型汽车车架",
          bussessType: "车间零部件生产",
          publishTask: "一汽大众",
          taskLeader: "刘柳",
          count: "50000",
          state: "进行中",
          date: "2019-11-14"
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
    jumpfinishDet() {
      this.$router.push("/admin/cFinishTaskDet");
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
