<template>
  <div class="register">
    <div>
      <el-button @click="submitUpload">测试</el-button>
    </div>
    <el-card>
      <el-row>
        <el-col :span="17">
          <div class="register-title">
            企业营业基本信息
            <div slot="tip" class="el-upload__tip">上传企业营业执照及税务登记证位置不要弄反！</div>
          </div>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="11">
              <el-upload
                :action="serverUrl"
                :file-list="businessLicenseImageUrl"
                list-type="picture"
                :auto-upload="false"
                accept=".jpg, .png"
                :on-preview="businessLicensePictureCardPreview"
                :http-request="businessLicenseUpload"
              >
                <el-button size="small" type="primary">上传营业执照</el-button>
              </el-upload>
            </el-col>
            <el-col :span="2" class="inside">
              <el-divider direction="vertical" style="height:8em;"></el-divider>
            </el-col>
            <el-col :span="11">
              <el-upload
                :action="serverUrl"
                :file-list="taxImageUrl"
                list-type="picture"
                :auto-upload="false"
                accept=".jpg, .png"
                :on-preview="taxPictureCardPreview"
                :http-request="taxUpload"
              >
                <el-button size="small" type="primary">上传税务证书</el-button>
              </el-upload>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="1" class="outside">
          <el-divider direction="vertical"></el-divider>
        </el-col>
        <el-col :span="6" class="logo">
          <div class="register-title">
            企业Logo
            <div slot="tip" class="el-upload__tip">(建议使用宽高比1：1图片进行上传)</div>
          </div>
          <!-- <el-upload
            class="avatar-uploader"
            :action="serverUrl"
            :show-file-list="false"
            :auto-upload="false"
            :on-preview="logoPictureCardPreview"
            :http-request="logoUpload"
          >
            <img v-if="logoImageUrl" :src="logoImageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>-->
          <el-upload
            :action="serverUrl"
            list-type="picture-card"
            ref="upload"
            :class="{hide:hideLogoUpload}"
            :auto-upload="false"
            accept=".jpg, .png"
            :on-preview="logoPictureCardPreview"
            :on-change="logoChange"
            :on-remove="logoRemove"
            :http-request="logoUpload"
          >
            <el-button size="small" type="primary">点击添加图片</el-button>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible2">
            <img width="100%" :src="logoImageUrl" alt />
          </el-dialog>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row id="carousel">
        <div class="register-title">
          企业介绍
          <div slot="tip" class="el-upload__tip">(建议使用宽高比2：1图片如4928*2772进行上传)</div>
        </div>
        <!-- <el-divider></el-divider> -->
        <el-upload
          :action="serverUrl"
          list-type="picture-card"
          ref="upload"
          :class="{hide:hideUpload}"
          :auto-upload="false"
          accept=".jpg, .png"
          :on-preview="handlePictureCardPreview"
          :on-change="onChange"
          :on-remove="onRemove"
          :http-request="companyProfileUpload"
        >
          <el-button size="small" type="primary">点击添加图片</el-button>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="companyProfileImageUrl" alt />
        </el-dialog>
        <!-- <el-button class="carousel-verify" size="small" type="success" @click="submitUpload">保存</el-button> -->
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "registerPicture",
  data() {
    return {
      serverUrl: "/api/api/pictureUpload",
      companyProfileImageUrl: [], //企业介绍图片
      businessLicenseImageUrl: [], //企业营业执照
      taxImageUrl: [], //税务证书
      logoImageUrl: [], //企业logo
      // companyProfileImageUrl:[],
      formDate:"",
      businessLicense_formDate: "",
      tax_formDate: "",
      companyProfileUpload_formDate: "",
      logo_formDate: "",
      dialogVisible: false,
      dialogVisible2: false,
      hideUpload: false,
      hideLogoUpload: false,
      value1: "",
      value2: ""
    };
  },

  props: {
    enterpriseName: {
      type: String,
      default: "cust"
    }
  },

  created() {
    this.carouselShow();
  },
  // computed: {
  //   sequence: function() {
  //     let params = {
  //       eventCategory: this.selectedCategorySpe.categoryId,
  //       priority: this.serviceForm.priority,
  //       title: this.serviceForm.title,
  //       dsc: this.serviceForm.desc,
  //       occurDate: this.serviceForm.occurDate
  //     };
  //     return params;
  //   }
  // },
  mounted: function() {},
  methods: {
    //请求展示的图片
    carouselShow() {
      this.hideUpload = this.companyProfileImageUrl.length >= 3;
    },
    // limitLength(file) {
    //   var fileList;
    // },
    //企业介绍图片入fromDate
    companyProfileUpload(file) {
      this.formDatee.append(
        "companyProfileFile",
        file.file
      );
    },
    //企业基本信息营业执照图片入fromDate
    taxUpload(file) {
      this.formDate.append("taxFile", file.file);
    },
    //企业基本信息营业执照图片入fromDate
    businessLicenseUpload(file) {
      this.formDate.append("businessLicenseFile", file.file);
    },
    //企业logo图片入fromDate
    logoUpload(file) {
      this.formDate.append("logoFile", file.file);
    },
    submitUpload() {
      // console.log(this.companyProfileImageUrl.length < 3);
      // if (this.taxImageUrl.length < 1) {
      //   this.$message({
      //     type: "warning",
      //     message: "请添加税务证书"
      //   });
      //   return false;
      // } else {
      //   if (this.businessLicenseImageUrl.length < 1) {
      //     this.$message({
      //       type: "warning",
      //       message: "请添加企业营业执照"
      //     });
      //     return false;
      //   } else {
        this.$emit("checkPicture",true);
        console.log("执行了图片上传");
          var that = this;
          that.formDate=new FormData();
          // this.businessLicense_formDate = new FormData();
          // this.tax_formDate = new FormData();
          // this.companyProfileUpload_formDate = new FormData();
          // this.logo_formDate = new FormData();
          // var rowData = Object.assign(
          //   this.businessLicense_formDate,
          //   this.tax_formDate,
          //   this.companyProfileUpload_formDate,
          //   this.logo_formDate
          // );
          that.formDate.append("enterpriseName","CUST");
          console.log(that.formDate)
          let config = {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          };
          that.axios
            .post("http://127.0.0.1:8081/register/setPicture", this.formDate, config)
            .then(response => {
              console.log(response);
              if (response.data.success) {
                this.$message({
                  message: response.data.file,
                  type: "success"
                });
              } else {
                this.$message({
                  message: response.data.file,
                  type: "alert"
                });
              }
            })
            .catch(response => {
              console.log(response);
            });
        // }
      // }
    },
    //企业基本信息-营业执照图片回调
    businessLicensePictureCardPreview(file) {
      this.businessLicenseImageUrl = file.url;
    },
    //企业基本信息-税务证书图片回调
    taxPictureCardPreview(file) {
      this.taxImageUrl = file.url;
    },
    //企业介绍图片上传
    handlePictureCardPreview(file) {
      this.companyProfileImageUrl = file.url;
      this.dialogVisible = true;
    },
    //企业logo图片上传
    logoPictureCardPreview(file) {
      this.logoImageUrl = file.url;
      // this.logoImageUrl = URL.createObjectURL(file.raw);;
      this.dialogVisible2 = true;
    },
    // 限制上传三张图片
    onChange(file, fileList) {
      // this.sequence = fileList;
      this.hideUpload = fileList.length >= 3;
    },
    onRemove(file, fileList) {
      this.hideUpload = fileList.length >= 3;
    },
    logoChange(file, fileList) {
      this.hideLogoUpload = fileList.length >= 1;
    },
    logoRemove(file, fileList) {
      this.hideLogoUpload = fileList.length >= 1;
    }
  }
};
</script>

<style>
.register {
  width: 1200px;
  margin: 0 auto;
}
.register-title {
  font-size: 25px;
  margin-bottom: 10px;
}
.register .el-upload__tip {
  color: red;
}
.register #carousel .el-upload {
  height: 300px;
  width: 320px;
}
.outside {
  text-align: center;
}
.outside .el-divider--vertical {
  height: 220px;
}
.inside {
  text-align: center;
}
.inside .el-divider--vertical {
  height: 140px;
}
#carousel ul li {
  height: 300px;
  width: 320px;
  margin-right: 30px;
  margin-left: 20px;
}
/* #carousel span{
  margin: 25px;
} */
.carousel-verify {
  margin: 20px;
  float: right;
}
.hide .el-upload--picture-card {
  display: none;
}
.line {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  height: 4px;
  color: #f5f5f5;
  background-color: #f5f5f5;
}
.block {
  margin-bottom: 15px;
}
.logo .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.logo .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.logo .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 250px;
  height: 250px;
  line-height: 230px;
  text-align: center;
}
.logo .avatar {
  width: 320px;
  height: 320px;
  display: block;
}
.logo .el-upload--text {
  width: 320px;
  height: 320px;
}
</style>


