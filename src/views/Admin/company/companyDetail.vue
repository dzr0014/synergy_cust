<template>
<div>
<el-container>
    <el-main>
<el-carousel :interval="5000" arrow="always">
 <el-carousel-item v-for="item in imagesbox" :key="item">
      <img :src="item.idView" class="image">
    </el-carousel-item>
  </el-carousel>
  <el-divider></el-divider>
<h3>企业信息</h3>
&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
<div align="right" class="formYS">
    
        <el-form ref="form" :model="form" label-width="100px" > 
            <el-row>
                <el-col :span="12">
                    <el-form-item label="企业ID">
                        <el-input v-model="form.companyId" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="企业名称">
                        <el-input v-model="form.companyName" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

           <el-row>
                <el-col :span="12">
                    <el-form-item label="企业所在省份">
                        <el-input v-model="form.province" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="企业所在县市">
                        <el-input v-model="form.city" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="企业地址">
                        <el-input v-model="form.address" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="邮政编码">
                        <el-input v-model="form.postcode" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="企业成立时间">
                        <el-input v-model="form.foundingTime" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="工商注册号">
                        <el-input v-model="form.brNumber" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
               <el-col :span="12">
                    <el-form-item label="企业业务范围">
                        <el-input v-model="form.product" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电子邮箱">
                        <el-input v-model="form.email" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="企业联系人">
                        <el-input v-model="form.businessName" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="办公电话">
                        <el-input v-model="form.officeNumber" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="注册资产">
                        <el-input v-model="form.registeredCapital" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="总资本">
                        <el-input v-model="form.totalAssets" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="固定资产">
                        <el-input v-model="form.fixedAssets" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="流动资产">
                        <el-input v-model="form.currentAssets" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="法人代表">
                        <el-input v-model="form.legalPerson" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="员工人数">
                        <el-input v-model="form.workerNumber" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="开户银行">
                        <el-input v-model="form.deposit_Bank" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="银行账户">
                        <el-input v-model="form.bankNumber" :disabled=yangshi></el-input>
                    </el-form-item>
                </el-col>
            </el-row>





            <el-row>
                <el-col :span="24" class = "xiangxi">
                    <el-form-item label="详细" >
                            <el-input 
                            type="textarea"
                            :rows="3"
                            style="width:100%;"
                            placeholder="请输入内容" v-model="form.introduction" class="gongsiDetail" :disabled=yangshi ></el-input>
                    </el-form-item>
                    
                </el-col>
            </el-row>

        </el-form>
</div>
        <div align="center">
            <el-button type="primary" class="button1" @click="update" :disabled=xiugai>修改</el-button>
        </div>



  <!-- 新增弹出框 -->
        <el-dialog title="新增" :visible.sync="addVisible" width="50%">
          <el-row>
            <el-col :span="8"></el-col>
          </el-row>
          <el-form ref="form" :model="form1" label-width="120px">

             <el-row>
                <el-col :span="12">
                    <el-form-item label="企业ID">
                        <el-input  v-model="form1.companyId" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="企业名称">
                        <el-input v-model="form1.companyName" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

             <el-row>
                <el-col :span="12">
                    <el-form-item label="企业成立时间">
                        <el-input v-model="form1.foundingTime" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="工商注册号">
                        <el-input v-model="form1.brNumber" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

           <el-row>
                <el-col :span="12">
                    <el-form-item label="企业所在省份">
                        <el-input  οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.province" ></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item  label="企业所在县市">
                        <el-input  οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.city" ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="企业地址">
                        <el-input v-model="form1.address" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="邮政编码">
                        <el-input οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.postcode" ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

  

            <el-row>
               <el-col :span="12">
                    <el-form-item label="企业业务范围">
                        <el-input v-model="form1.product" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电子邮箱">
                        <el-input v-model="form1.email" ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="企业联系人">
                        <el-input v-model="form1.businessName" ></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="办公电话">
                        <el-input οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.officeNumber" ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="注册资产">
                        <el-input οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.registeredCapital" ></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="总资本">
                        <el-input οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.totalAssets" ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="固定资产">
                        <el-input οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.fixedAssets" ></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="流动资产">
                        <el-input οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.currentAssets" ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="法人代表">
                        <el-input v-model="form1.legalPerson" ></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="员工人数">
                        <el-input οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.workerNumber" ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="开户银行">
                        <el-input v-model="form1.deposit_Bank" ></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="12">
                    <el-form-item label="银行账户">
                        <el-input οninput="value=value.replace(/[^\d]/g,'')" v-model="form1.bankNumber" ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>




            <el-row>
                <el-col :span="24" class = "xiangxi">
                    <el-form-item label="详细" >
                            <el-input 
                            type="textarea"
                            :rows="3"
                            style="width:100%;"
                            placeholder="请输入内容" v-model="form1.introduction" class="gongsiDetail"  ></el-input>
                    </el-form-item>
                    
                </el-col>
            </el-row>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="addVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveAdd11">确 定</el-button>
          </span>
        </el-dialog>

    </el-main>
</el-container>
</div>
</template>
<script>     
import  Qs from 'qs';
export default {

    name:'companyDetail',
    data(){
       return {
           yangshi:true,
           wancheng:true,
           xiugai:false,
           shenhe:true,
        form: {
            businessName:'',
          companyID:'20191006066',
          companyName: '长光卫星国际有限公司',
                   Address: '吉林省长春市卫星路8848号',
          postcode: '104300',
          foundingTime: '2015-9-10',
          brNumber:'S100934',
          officeNumber:'17866625034',
          email:'34895611@163.com',
          bussessName:'李林甫',
          product:'微电子元器件制作',
          introduction:'少年的肩膀，就该这样才对嘛，什么家国仇恨，浩然正气的，都不要急，先挑起清风明月、杨柳依依和草长莺飞，少年郎的肩头，本就应当满是美好的事物啊。',
          cool:'17855555',
          province:'吉林省',
          city:'长春市绿园区',
          registeredCapital:'8.5亿',
          totalAssets:'10亿',
          currentAssets:'2.2亿',
          fixedAssets:'2亿元',
          legalPerson:'杨言',
          workerNumber:'500人',
          deposit_Bank:'中国银行',
          bankNumber:'25206589260388885222201',    
        //  @input.native="changeCode"
        },
        form1: {
            businessName:'',
          companyID:'',
          companyName: '',
            address: '',
          postcode: '',
          foundingTime: '',
          brNumber:'',
          officeNumber:'',
          email:'',
          bussessName:'',
          product:'',
          introduction:'',
          cool:'',
          province:'',
          city:'',
          registeredCapital:'',
          totalAssets:'',
          currentAssets:'',
          fixedAssets:'',
          legalPerson:'',
          workerNumber:'',
          deposit_Bank:'',
          bankNumber:'',    
        },
        companyId:'',
        companyName:'',
        foundingTime: '',
        brNumber:'',
        addVisible: false,
        imagesbox:[
            {id:0,idView:require("../company/1.png")},
            {id:1,idView:require("../company/2.jpg")},
            {id:2,idView:require("../company/3.jpg")},
        ],
                       
      }
    },
    created(){
        this.getDate();
    },
    methods:{
        getDate(){
            var that = this;
            var data = Qs.stringify({
                userName:'aaaa'
            });
            console.log(data);
            that
                .axios({
                    method:"post",
                    url:'http://127.0.0.1:8082/companyDetail/getCompanyForm',
                    data:data,
                               
                })
                .then(response =>{ 
                    console.log(response);
                   
                    this.form = response.data.allData[0];
                    this.companyId = response.data.allData[0].companyId
                    this.companyName = response.data.allData[0].companyName 
                    console.log(this.companyName);
                })
                
        },
        update() { 
            this.form1 = this.form
            this.addVisible=true
        },

        saveAdd11() {
      console.log(this.form1)
       var that = this;
      var data = Qs.stringify({
          companyId:this.form1.companyId,
          companyName: this.form1.companyName,
            address: this.form1.address,
          postcode: this.form1.postcode,
          FT: this.form1.foundingTime,
          brNumber:this.form1.brNumber,
          officeNumber:this.form1.officeNumber,
          email:this.form1.email,
          businessName:this.form1.businessName,
          product:this.form1.product,
          introduction:this.form1.introduction,
          cool:this.form1.cool,
          province:this.form1.province,
          city:this.form1.city,
          registeredCapital:this.form1.registeredCapital,
          totalAssets:this.form1.totalAssets,
          currentAssets:this.form1.currentAssets,
          fixedAssets:this.form1.fixedAssets,
          legalPerson:this.form1.legalPerson,
          workerNumber:this.form1.workerNumber,
          deposit_Bank:this.form1.deposit_Bank,
          bankNumber:this.form1.bankNumber,    
      });


      that
        .axios({
          method:"post",
          url:'http://127.0.0.1:8082/companyDetail/updateCompanyForm',
          data:data,
        })



    this.$message.success("提交成功");
    this.addList = {};
    this.addVisible = false;
    },

    changeCode() {
  this.$nextTick(() => {
    if(this.form1.province !== null){
      this.form1.province = this.form1.province.replace(/[^\d]/g,'')
    }
    if(this.form1.city !== null){
      this.form1.city = this.form1.city.replace(/[^\d]/g,'')
    }
        if(this.form1.postcode !== null){
      this.form1.postcode = this.form1.postcode.replace(/[^\d]/g,'')
    }
        if(this.form1.officeNumber !== null){
      this.form1.officeNumber = this.form1.officeNumber.replace(/[^\d]/g,'')
    }
        if(this.form1.registeredCapital !== null){
      this.form1.registeredCapital = this.form1.registeredCapital.replace(/[^\d]/g,'')
    }
        if(this.form1.totalAssets !== null){
      this.form1.totalAssets = this.form1.totalAssets.replace(/[^\d]/g,'')
    }
        if(this.form1.fixedAssets !== null){
      this.form1.fixedAssets = this.form1.fixedAssets.replace(/[^\d]/g,'')
    }
        if(this.form1.currentAssets !== null){
      this.form1.currentAssets = this.form1.currentAssets.replace(/[^\d]/g,'')
    }
        if(this.form1.workerNumber !== null){
      this.form1.workerNumber = this.form1.workerNumber.replace(/[^\d]/g,'')
    }
        if(this.form1.bankNumber !== null){
      this.form1.bankNumber = this.form1.bankNumber.replace(/[^\d]/g,'')
    }
  })
},






    }
}
</script>


<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item {
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;

    max-width: 100%;
    max-height: 100%;
  
}
.gongsiDetail{
    height: 80px;
}

</style>
