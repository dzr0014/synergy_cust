
<template>
<div>
    
    <!--第一行 首页轮播图-->
    <el-row :gutter="gutterCount">
      <el-col :span="24">
        <div class="grid-content0">
          <el-carousel height="400px">

            <!--备注，需要向img_list写入图片地址-->
            <el-carousel-item v-for="item in img_list" :key="item">
              <img
                style="width: 100%; height: 100%;"
                :src="item"
                 >
            </el-carousel-item>

          </el-carousel>
        </div>
      </el-col>
    </el-row>
    

  <div class="BG">
    <!--第二行  网站访问统计数据-->
    <el-row :gutter="gutterCount" >
      <el-col :span="20"  :push="pushCount" :pull="pullCount">
        <div class="grid-content1  fontStyle0">
        <span>本月成交任务:&nbsp;&nbsp;&nbsp;<font class="fontStyle">{{taskCountMonth}}</font>&nbsp;&nbsp;项</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>需求任务:&nbsp;&nbsp;&nbsp;<font class="fontStyle">{{demandTaskCount}}</font>&nbsp;&nbsp;项</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>流通任务:&nbsp;&nbsp;&nbsp;<font class="fontStyle">{{circulationTaskCount}}</font>&nbsp;&nbsp;项</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>认证企业:&nbsp;&nbsp;&nbsp;<font class="fontStyle">{{certifiedEnterpriseCount}}</font>&nbsp;&nbsp;家</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>认证供应商:&nbsp;&nbsp;&nbsp;<font class="fontStyle">{{certifiedSupplierCount}}</font>&nbsp;&nbsp;家</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </el-col>
    </el-row>


     <!--第三行  分类门户-->
    <el-row :gutter="5">
      <el-col :span="16" :push="pushCount">
        
        
          <div class="category_wrap">
    	      <div class="category_box">
            <!----这里分类----->
              <div class="category_item"><div class="cate_ietm_title"><h3>交通运输设备</h3><p></p></div>          
                   <i class="cate_list">
                     <a href="">汽车</a>
                     <a href="">铁路运输设备</a>
                     <a href="">摩托车</a>
                     <a href="">自行车</a>
                     <a href="">船舶及浮动装置</a>
                     <a href="">航空航天器</a>
                     <a href="l">交通器材及其他交通运输设备</a>
                    </i>       
                </div>      
                    <div class="category_item">     
                      <div class="cate_ietm_title" style="background:#78bcaf;"><h3>仪器仪表及文化、<br>办公用机械</h3><p></p></div>           
                          <i class="cate_list">
                            <a href="">通用仪器仪表</a>
                            <a href="">专用仪器仪表</a>
                            <a href="">钟表与计时仪器</a>
                            <a href="">光学仪器及眼镜</a>
                            <a href="">文化、办公用机械</a>
                            <a href="">其他仪器仪表的制造及修理</a>
                          </i>       
                      </div>           
                      <div class="category_item">       	
                          <div class="cate_ietm_title" style="background:#be7fc5;"><h3>通信设备、<br>计算机及其他电子设备</h3><p>&nbsp;</p></div>       	
                            <i class="cate_list">
                              <a href="">通信设备</a>
                              <a href="">雷达及配套设备</a>
                              <a href="">广播电视设备</a>
                              <a href="">电子计算机</a>
                              <a href="">电子器件</a>
                              <a href="">电子元件</a>
                              <a href="">家用视听设备</a>
                              <a href="">其他电子设备</a>
                            </i>       
                          </div>         
                      <div class="category_item">       	
                        <div class="cate_ietm_title" style="background:#67aff9;"><h3>电气机械及器材</h3><p></p></div> 
                            <i class="cate_list">
                              <a href="">电机</a>
                              <a href="">输配电及控制设备</a>
                              <a href="">电池</a>
                              <a href="">家用电力器具</a>
                              <a href="">非电力家用器具</a>
                              <a href="">照明器具</a>
                              <a href="">其他电气机械及器材</a>
                            </i>   
                        </div> 
              </div>
            </div>
        
      </el-col>
      
      <!-- 登录模块-->
      <el-col :span="4" :push="pushCount">
        <div class="grid-content">
          <br>
          &nbsp;
          <span>HI!欢迎来到Saas应用</span>
          <br>
          &nbsp;&nbsp;&nbsp;
          <div>
              <el-button style=" left:5px; background-color:rgb(190, 127, 197); border-color:rgb(190, 127, 197); "  type="primary" round>登录</el-button>
              <el-button style="right:5px;background-color:rgb(250, 101, 105); border-color:rgb(250, 101, 105);" type="primary" round>注册</el-button>
          </div>
          <div style="float: left; width:100%; height:10px"></div>
          <el-card class="box-card" :body-style="{ padding: '5px' }">

            <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true" class="loginHeight">
              <el-tab-pane label="我有需求" name="first">
                   <el-button class="xqelbuttonleft"   style="margin-top:0px ; margin-left:0px ;" type="primary" round>协同设计</el-button>
                   <el-button class="xqelbuttonright"  style="margin-top:0px ; margin-left:0px ;" type="info" round>企业标准</el-button>
                   <el-button class="xqelbuttonleft" style="margin-top:10px ; margin-left:0px ;"  type="warning" round>综合服务</el-button>
                   <el-button class="xqelbuttonright" style="margin-top:10px ; margin-left:0px ;"  type="danger" round>产业融合</el-button>
                   <el-button class="xqelbuttonleft0"  @click="dialogVisible = true" style="margin-top:10px ; margin-left:0px ;" type="success" round>发布需求</el-button>
                   
              </el-tab-pane>
              <el-tab-pane label="我有服务" name="second">
                  <el-button class="xqelbuttonleft"   style="margin-top:0px ; margin-left:0px ;" type="primary" round>协同设计</el-button>
                   <el-button class="xqelbuttonright"  style="margin-top:0px ; margin-left:0px ;" type="info" round>企业标准</el-button>
                   <el-button class="xqelbuttonleft" style="margin-top:10px ; margin-left:0px ;"  type="warning" round>综合服务</el-button>
                   <el-button class="xqelbuttonright" style="margin-top:10px ; margin-left:0px ;"  type="danger" round>产业融合</el-button>
                   <el-button class="xqelbuttonleft0"  @click="dialogVisible = true" style="margin-top:10px ; margin-left:0px ;" type="success" round>寻找需求</el-button>
              </el-tab-pane>
            </el-tabs>

            
          </el-card>
        </div>
      </el-col>
    </el-row>

    <!--发布需求 弹出框-->
    <div class="Publishingrequirements">
    <el-dialog title="发布需求" :visible.sync="dialogVisible" style="color:white;"> 
    <el-form ref="form" :model="form" label-width="80px" class="">
    <el-form-item label="需求名称">
    <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="需求类别">
    
    <el-select v-model="form.region"  size="medium" filterable placeholder="选择/输入需求大类">
      <el-option label="交通运输设备" value="0"></el-option>
      <el-option label="仪器仪表及文化、办公用机械" value="1"></el-option>
      <el-option label="通信设备、计算机及其他电子设备" value="2"></el-option>
      <el-option label="电气机械及器材" value="3"></el-option>
    </el-select>
    <el-select v-model="form.region0"  size="medium" filterable placeholder="选择/输入需求子类">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="需求详情">
    <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item label="截止日期">
    <el-col :span="10">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    </el-form-item>
    <el-form-item label="附件">
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onSubmit" class="CreatebuttonCSS">立即发布</el-button>
    </el-form-item>
    </el-form>

      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
      </el-dialog>
    </div>           
    

    <!--第四行  需求一览，优质企业，服务成果-->
    <el-row :gutter="gutterCount">
      <!--需求任务-->
      <el-col :span="6" :push="pushCount">
        <div class="grid-content2 ">
          <el-card class="grid-content2 ">
            <div slot="header" class="titleColor">
              <span>需求一览</span>
              <el-button style="float: right; padding: 5px 0" type="text">>>更多</el-button>
            </div>
            <div class="el-card__body" style="height:500px">
            <slot>

            <div v-for="i in demandTaskList" :key="i.name" style="padding-bottom: 50px;">
              <div style="float:left; width:30%; " class="fontStyle1">{{"["+i.category+"]"}}&nbsp;&nbsp;</div>
              <div style="float:left;white-space: nowrap;text-overflow: ellipsis; overflow: hidden;width:40%">{{i.name}}</div>
              <div style="float:right;width:30%" class="fontStyle2">&nbsp;&nbsp;{{i.sTime}}</div>
            </div>
            
            </slot>
          </div>
        </el-card>
          
        </div>
      </el-col>

      <el-col :span="8"  :push="pushCount">
        <el-card class="grid-content2 ">
            <div slot="header" class="titleColor">
              <span>优质企业</span>
              <el-button style="float: right; padding: 5px 0" type="text">>>更多</el-button>
            </div>
            <div class="el-card__body" style="height:500px">
            <slot>

            <div v-for="i in supplierlist" :key="i.name" style="padding-bottom: 50px;">
              <div style="float:left; width:20%; " class="fontStyle1">{{"["+i.category+"]"}}&nbsp;&nbsp;</div>
              <div style="float:left;white-space: nowrap;text-overflow: ellipsis; overflow: hidden;width:50%">{{i.companyName}}</div>
            </div>
            
            </slot>
          </div>
        </el-card>
      </el-col>
        <el-col :span="6" :push="pushCount">
        <div class="grid-content2 ">
          <el-card class="grid-content2 ">
            <div slot="header" class="titleColor">
              <span>服务成果</span>
              <el-button style="float: right; padding: 5px 0" type="text">>>更多</el-button>
            </div>
            <div class="el-card__body" style="height:500px">
            <slot>

            <div v-for="i in completeddemandTaskList" :key="i.name" style="padding-bottom: 50px;">
              <div style="float:left; width:30%;" class="fontStyle1">{{"["+i.category+"]"}}&nbsp;&nbsp;</div>
              <div style="float:left;white-space: nowrap;text-overflow: ellipsis; overflow: hidden;width:40%">{{i.name}}</div>
              <div style="float:right;width:30%" class="fontStyle2">&nbsp;&nbsp;{{i.sTime}}</div>
            </div>
            
            </slot>
          </div>
        </el-card>
          
        </div>
      </el-col>
    </el-row>

    <!--第七行  平台数据分割线-->
    <el-row :gutter="gutterCount">
      <el-col :span="20" :push="pushCount" :pull="pullCount">
        <div class="big_bt">
            <a>平台数据</a>
        </div>
      </el-col>

    </el-row>
      <el-row :gutter="gutterCount"d >
      <el-col :span="20":push="pushCount">
        <el-card shadow="hover">
          <div class="demandTop5"></div>
          <div id="monthSituation" style="width: 100%;height:350%;"></div>
        </el-card>
      </el-col>
      <el-col :span="14":push="pushCount">
        <el-card shadow="hover" style="margin-top:5px;">
          <div id="fulfillDemandTop5" style="width: 100%;height:350%;"></div>
        </el-card>
      </el-col>
      <el-col :span="6":push="pushCount">
        <el-card shadow="hover" style="margin-top:5px;">
          <div id="quarterlySituation" style="width: 100%;height:350%;"></div>
        </el-card>
      </el-col>
    </el-row>


    
   
  </div>
</div>
</template>


<!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线-->
<!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线-->
<!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线-->
<!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线-->

<script>
export default {
  name: "Home",
  data() {
    return {

       //首页轮播图的图片地址数组
      img_list:[
          require('../../../assets/images/home/713be62978c1729c076bcebb8a3bf44a.jpg'),
          require('../../../assets/images/home/a7e942533a9e0e5056c0c67f89dcc0ae.jpeg'),
          require('../../../assets/images/home/a662f30ed18c4e6592a42747b4b412b8.jpg'),
      ],

      //判定发布需求弹出框的bool值
      dialogVisible: false,

      //发布需求弹出框内的表单信息数据
      form: {
          name: '',
          region: '',
          region0: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },

      //设定本页面中el-cow与el-col的gutter\push\pull值
      gutterCount: 5,
      pushCount:2,
      pullCount:2,
      pushCount0:3,

      //网站的近期统计简报数据
      taskCountMonth:233,
      demandTaskCount:212,
      circulationTaskCount:666,
      certifiedEnterpriseCount:231,
      certifiedSupplierCount:526,

       //登录注册发布需求模块tag页的名称绑定数据
       activeName: 'first',
       

      //需求任务数组
      demandTaskList:
      [
        {category:"交通运输",name:"危险品运输半挂车货箱采购项目",sTime:"2019-09-06"},
        {category:"仪器仪表",name:"LTE-V数据协议及性能测试设备",sTime:"2019-09-06"},
        {category:"电气机械",name:"数据中心采暖系统改造项目",sTime:"2019-09-06"},
        {category:"通信设备",name:"TNGA（2.5L）项目组装线安装工程",sTime:"2019-09-06"},
        {category:"通信设备",name:"TNGA（2.5L）项目组装线安装工程",sTime:"2019-09-06"},
        {category:"仪器仪表",name:"LTE-V数据协议及性能测试设备",sTime:"2019-09-06"},
        {category:"通信设备",name:"TNGA（2.5L）项目组装线安装工程",sTime:"2019-09-06"},
      ],
      completeddemandTaskList:
      [
        {category:"仪器仪表",companyName:"哈工",name:"绝缘用具更新及试验",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"电气机械",companyName:"一汽",name:"MKS1632数控外圆磨尾架维修",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"电气机械",companyName:"一汽",name:"厂区维修服务",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"电气机械",companyName:"哈工",name:"汽车刹车片设计",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"仪器仪表",companyName:"一汽",name:"绝缘用具更新及试验",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"仪器仪表",companyName:"一汽",name:"绝缘用具更新及试验",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"电气机械",companyName:"一汽",name:"安装B30EV-试冲板料-3",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"维修",companyName:"6666",name:"MKS1632数控外圆磨尾架维修",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"维修",companyName:"6666",name:"MKS1632数控外圆磨尾架维修",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"竞价",companyName:"6666",name:"绝缘用具更新及试验",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"竞价",companyName:"6666",name:"绝缘用具更新及试验",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"安装",companyName:"6666",name:"安装B30EV-试冲板料-3",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"安装",companyName:"6666",name:"安装B30EV-试冲板料-3",sTime:"2019-09-06",eTime:"2019-12-31"},
        
      ],
      //核心企业
      corebusinessList:
      [
        {category:"汽车",companyName:"一汽"},
        {category:"航天",companyName:"哈工"},
        {category:"航天",companyName:"哈工"},
        {category:"汽车",companyName:"一汽"},
        {category:"航天",companyName:"哈工"},
        {category:"汽车",companyName:"一汽"},
        {category:"航天",companyName:"哈工"},
        {category:"汽车",companyName:"一汽"},
        {category:"航天",companyName:"哈工"},
        {category:"汽车",companyName:"一汽"},
        {category:"航天",companyName:"哈工"},
        {category:"汽车",companyName:"一汽"},
        {category:"航天",companyName:"哈工"},
        
      ],
      //流通需求
      demandforcirculationList:
      [
        {category:"制作",companyName:"一汽",name:"外销减速器总成试制件",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"哈工",name:"拉伸垫活塞及连接螺杆修理",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"哈工",name:"卡簧槽测厚工具的制作",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"哈工",name:"卡簧槽测厚工具的制作",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"哈工",name:"卡车厂外委修理飞轮内孔",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"哈工",name:"卡车厂外委修理飞轮内孔",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"一汽",name:"中心主轴双螺旋拉刀弹簧维修",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"一汽",name:"中心主轴双螺旋拉刀弹簧维修",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"制作",companyName:"一汽",name:"中心主轴双螺旋拉刀弹簧制作",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"制作",companyName:"一汽",name:"中心主轴双螺旋拉刀弹簧制作",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"制作",companyName:"一汽",name:"中心主轴双螺旋拉刀弹簧制作",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"制作",companyName:"一汽",name:"中心主轴双螺旋拉刀弹簧制作",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"制作",companyName:"一汽",name:"中心主轴双螺旋拉刀弹簧制作",sTime:"2019-09-06",eTime:"2019-12-31"},
        
      ],
      //完成流通
      completecirculationList:
       [
        {category:"采购",companyName:"一汽",name:"车桥厂改造DMC-75H卧式加工中心过滤系统",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"制作",companyName:"哈工",name:"加强板压模和连接板压模",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"制作",companyName:"哈工",name:"加强板压模和连接板压模",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"采购",companyName:"哈工",name:"粗糙度检查仪采购",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"采购",companyName:"哈工",name:"粗糙度检查仪采购",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"采购",companyName:"哈工",name:"粗糙度检查仪采购",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"一汽",name:"修理UPS设备",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"一汽",name:"修理UPS设备",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"一汽",name:"修理UPS设备",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"一汽",name:"修理UPS设备",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"修理",companyName:"哈工",name:"车桥厂改造DMC-75H卧式加工中心过滤系统",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"采购",companyName:"哈工",name:"车桥厂改造DMC-75H卧式加工中心过滤系统",sTime:"2019-09-06",eTime:"2019-12-31"},
        {category:"采购",companyName:"哈工",name:"车桥厂改造DMC-75H卧式加工中心过滤系统",sTime:"2019-09-06",eTime:"2019-12-31"},
        
      ],
      //供应商
      supplierlist:
      [
        {category:"交通运输",companyName:"长春富晟吉通物流设备有限公司"},
        {category:"仪器仪表",companyName:"长春新产业光电技术有限公司"},
        {category:"电气机械",companyName:"吉林省长春市盛昊电子有限公司"},
        {category:"通信设备",companyName:"哈尔滨哈特信息科技有限公司"},
        {category:"仪器仪表",companyName:"北京京伟电器有限公司 "},
        {category:"交通运输",companyName:"长春沃尔特仓储设备有限公司"},
        {category:"电气机械",companyName:"合肥皖仪科技有限公司"},
        
      ],

    };
  },
  mounted(){
    this.getCharts();
    this.getCharts2();
    this.getCharts3();
  },
  methods:{
      /*
      *转跳对应任务信息页面
      */
      recordTabletender(){
      },
      //登陆注册模块点击
       handleClick(tab, event) {
        console.log(tab, event);
      },
      //免费发布界面关闭前的最后一次确认
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },

    getCharts(){
    var charts = [];
    var myChart = echarts.init(document.getElementById('quarterlySituation'));
    // 指定图表的配置项和数据
    var option = {
    title: {
        text: '季度完成量',
        subtext: ' ',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 0,
        data: ['第一季度', '第二季度', '第三季度', '第四季度']
    },
    series: [
        {
            name: '分季完成量',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '25',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '第一季度'},
                {value: 310, name: '第二季度'},
                {value: 235, name: '第三季度'},
                {value: 220, name: '第四季度'},
                // {value: 1548, name: '搜索引擎'}
            ]
        }
    ],
    

};
     myChart.setOption(option);
     charts.push(myChart);


    },

        getCharts2() {
      // 基于准备好的dom，初始化echarts实例
      var charts = [];
      var myChart = echarts.init(document.getElementById('fulfillDemandTop5'))
      var option = {
        title: {
          text: '供应商完成需求量TOP5',
          subtext: "数据来自大数据统计"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["2017年", "2018年"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['上海小糸车灯有限公司 ', '上海胜德塑料厂 ', '上海奥力得特种工具厂', '合肥皖仪科技有限公司', '北京京伟电器有限公司 ']
        },
        series: [
        {
            name: '2017年',
            type: 'bar',
            data: [ 1245, 1523, 1587, 1689, 2567]
        },
        {
            name: '2018年',
            type: 'bar',
            data: [ 1389, 1530, 1750, 1890, 2899]
        }
        ]
      }; // 使用刚指定的配置项和数据显示图表。

      myChart.setOption(option);
      charts.push(myChart);
    },


            getCharts3() {
      // 基于准备好的dom，初始化echarts实例
      var charts = [];
      var myChart = echarts.init(document.getElementById('monthSituation'))
      var option = {
    title: {
        text: '月度供需量'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['完成需求量', '发布需求量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '完成需求量',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210,122,331,444,312,112]
        },
        {
            name: '发布需求量',
            type: 'line',
            stack: '总量',
            data: [120, 182, 191, 234, 290, 330, 310,123,344,354,123,123]
        },

    ]
}; // 使用刚指定的配置项和数据显示图表。

      myChart.setOption(option);
      charts.push(myChart);
    },




    


  }
};


</script>

<!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线-->
<!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线-->
<!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线-->
<!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线--><!--分割线-->


<style>


/**中间的div块   给gutter留padding*/
.BG {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
  padding:25px;
  font-size: 18px;
}
.BG0 {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
  padding: -2.5px;
  font-size: 18px;
}


.grid-content
{
  text-align: center;
  background-color: #ece9e9
}
/**第一行用css样式*/
.grid-content0
{
  border-radius: 4px;
  height: 400px;
  
}
/**第二行用css样式 网站访问统计数据块*/
.grid-content1
{
  border-radius: 4px;
  height: 50px;
  /**文字显示居中 */
  text-align: center;
  line-height: 50px;
}
.grid-content2
{
  border-radius: 4px;
  height: 400px;
  padding-bottom: 50px;
}
.grid-content3
{
  border-radius: 4px;
  height: 400px;
}
.grid-content4
{
  border-radius: 4px;
  height: 100px;
}
.grid-content6
{
  padding-bottom: 20px;
  width: 30%;
  float: left;
}

/**需求一览 服务成果字体样式*/
.fontStyle1
{
  color: rgb(230, 158, 24);
}
.fontStyle2
{
  color:rgb(150, 144, 144);
  font-size: 15px;
}

/**各个任务标题背景色 */
.titleColor0
{
  background-color:rgb(230, 123, 133);
}


/**网站统计数据字体样式 */
.fontStyle0
{
  font-size: 20px;
  color:rgb(167, 165, 165);
}
.fontStyle
{
  font-size: 24px;
  color:orangered;
}

/**划分页面标识*/
.big_bt {
    width: 370px;
    margin: 0 auto;
    border-bottom: solid 3px #000;
    margin-bottom: 40px;
}
.big_bt a {
    display: block;
    font-size: 26px;
    color: #000;
    font-family: "微软雅黑";
    width: 180px;
    background: #fff;
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: 18px;
}

/*我有需求下按钮展示的CSS*/
.xqelbuttonleft
{
  float: left; position:relative;left:20px;
}
.xqelbuttonleft:hover
{
  background-color: rgb(192, 189, 189);
  border-color:  rgb(192, 189, 189);
}

.xqelbuttonleft0
{
  float: left; position:relative;left:30%;
}

.xqelbuttonright
{
  float: right; position:relative;right:20px;
}

.xqelbuttonright:hover
{
  background-color: rgb(192, 189, 189);
   border-color:  rgb(192, 189, 189);
}

/**发布需求的弹出窗口的CSS */
 .Publishingrequirements .el-input
{
  width: 300px;
}
.Publishingrequirements .el-dialog__title
{
  font-size: 18px;
    color: #303133;
}
.CreatebuttonCSS
{
  width: 200px;
  height: 60px;
  position: relative;
  left: 33%;
}


/** 登录模块核心企业与供应商用CSS*/
.loginHeight
{
  height: 210px;
}

/**布局测试用css*/
.el-row {
    margin-bottom: 10px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  

.box-card {
    width: 100%;
  }

/** */



/**服务入口跳转用CSS*/
.category_wrap {
    width: 100%;
    margin: 0px;
    float: left;
    overflow: hidden;
}
.category_box {
    width: 1300px;
}
.category_item {
    width: 24%;
    height: 323px;
    float: left;
    background: #f5f5f5;
    margin: 0 2px 0 0;
}
.cate_ietm_title {
    width: 100%;
    height: 70px;
    background: #fa6569;
    color: #fff;
}
.cate_list {
    line-height: 30px;
    margin: 20px;
    display: block;
}
.cate_list a {
    margin: 0 20px 0 0;
    display: inline-block;
    font-size: 16px;
     font-style:normal;
}
a {
    color: #333;
    text-decoration: none;
}





.index-user-panel .user-panel-tab-content .tab-content-customer.active .user-panel-tab-content .tab-content-seller.active {
    display: block;
}
 .tab-content-title {
    font-size: 12px;
    color: #333;
    margin-bottom: 6px;
    margin-top: 7px;
    font-weight: 600;
}
.tab-content-locate.customer-locate {
    background: transparent;
    padding-left: 0;
    color: #333;
}
 .tab-content-locate.customer-locate {
    background: transparent;
    padding-left: 0;
    color: #333;
}
.clearfix0
{
  text-align: center;
}


































ul li {
  list-style: none;
  margin-bottom: 5px;
  overflow: hidden;
}
.some-show{
  white-space: nowrap;/* 规定段落中的文本不进行换行 */
  text-overflow: ellipsis; /*文字段在容器内超宽时，截断该文字段并且续以省略号*/
  overflow: hidden;
}
.tender-notice{
border:1px solid #d3d7d4;
}
.tender-header{
    padding:15px;
    border-bottom: 1px solid #d3d7d4;
}
.tender-header span{
    font-size: 800;
    font-size: 18px;
}
.tender-header-some{
    padding:20px;
    font-size: 15px;
    color: #a1a3a6;
}
.charts{
  text-align:"center";
  align-self: auto;
  align-content: center;
  align-items: center;
  
}
.demandTop5 {
  font-size: 1.2rem;
}
/* .tender-header-some ul li{
    margin-bottom: 15px;
} */
</style>