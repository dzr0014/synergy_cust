<template>
  <div>
    <el-container>
      <el-main style="overflow:hidden">
        <el-page-header @back="goBack" content="需求详情"></el-page-header>
        <br />
        <el-form ref="form" :model="form" label-width="110px">
          <el-row>
            <el-col :span="11">
              <el-form-item label="需求ID">
                <el-input v-model="form.id" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="需求名称">
                <el-input v-model="form.name" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item label="需求类型">
                <el-input v-model="form.type" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="截止时间">
                <el-input v-model="form.endtime" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-form-item label="发布需求企业">
                <el-input v-model="form.company" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="发布需求时间">
                <el-input v-model="form.startTime" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-form-item label="负责人员">
                <el-input v-model="form.leader" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="负责人电话">
                <el-input v-model="form.leaderTel" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="11">
              <el-form-item label="生产单位">
                <el-input v-model="form.designcompany" :disabled="true"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="11">
              <el-form-item label="数量">
                <el-input v-model="form.count" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-col width="100%">
            <el-form-item label="需求细节">
              <el-input
                type="textarea"
                :rows="3"
                style="width:90%"
                v-model="form.detail"
                :disabled="true"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-row :gutter="80"></el-row>
        </el-form>
        <div align="right">
          <el-button type="primary" class="button1">查看计划书</el-button>
          <el-button type="primary" class="button1" @click="success()">通过</el-button>
          <el-button type="primary" class="button1" @click="nosuccess()">不通过</el-button>
        </div>
      </el-main>
    </el-container>

    <el-dialog title="提示" :visible.sync="Auditpost" width="15%" :before-close="handleClose">
      <span>审核通过</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="goBack()">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="NoAuditpost" width="15%" :before-close="handleClose">
      <span>审核不通过</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="goBack()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "cPlanAuditingDet",
  data() {
    return {
      Auditpost: false,
      NoAuditpost: false,

      form: {
        id: "000101",
        name: "小汽车零件的装配",
        type: "零件装配制造",
        endtime: "2019-10-17",
        detail:
          "协同设计和虚拟可视化仿真，从被提出起就成为计算机和信息科学领域研究的一个热点。早在二十世纪八十年代末，美国斯坦福大学联合Lockheed、EIT 及HP 公司开发的名为PACT 的项目，主要用于研究大规模、分布式并行工程系统。",

        leader: "陈平安",
        company: "长春奥普光电技术股份有限公司",
        leaderTel: "18088675187",
        designcompany: "杭机集团长春一机有限公司",
        startTime: "2019-5-1",
        count: "20000"
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    goBack() {
      this.$router.push("/admin/circulationTaskq");
    },
    success() {
      this.Auditpost = true;
    },
    nosuccess() {
      this.NoAuditpost = true;
    }
  }
};
</script>

<style>
</style>
