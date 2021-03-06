import Vue from 'vue'
import Router from 'vue-router'

import login from '@/Layout/template page/login'

//前台界面
import Front from '@/Layout/template page/Front'
import Home from '@/views/Front/Home/Home'
import twoMenu from '@/views/Front/Home/twoMenu'
import excellentCompany from '@/views/Front/company/excellentCompany'//优秀企业
import excellentCompanyDesigin from '@/views/Front/company/excellentCompanyDesigin'//优秀企业

//后台界面
import adminPage from '@/Layout/template page/adminPage'
import Dashboard from '@/views/admin/Home/Dashboard' //后台系统首页
//核心企业
import newStaff from '@/views/admin/staff/newStaff'//新增人员
import newTask from '@/views/admin/Task/newTask'//新增任务
import mainStaskShow from '@/views/admin/maintask/mainStaskShow'//主任务显示
import substaskDetail from '@/views/admin/maintask/substaskDetail'//子任务详情
import mainStaskDetail from '@/views/admin/maintask/mainStaskDetail'//主任务详情
import review from '@/views/admin/check/review'

import companyDetail from '@/views/admin/company/companyDetail'//企业详情
import supplyBussess from '@/views/admin/company/supplyBussess'//供应商名录
import supplyDetail from '@/views/admin/company/supplyDetail'//供应商详情

import designTask from '@/views/admin/design/designTask'//设计任务
import circulationTask from '@/views/admin/circulation/circulationTask'//流通任务

import designTaskEvaluation from '@/views/admin/projectManagement/designTaskEvaluation'//设计任务评价
import designTaskEvaluationDetils from '@/views/admin/projectManagement/designTaskEvaluationDetils'//设计任务评价详情
import circulationTaskEvaluation from '@/views/admin/circulationRemark/circulationTaskEvaluation' //流通任务评价
import circulationTaskEvaluationDetils from '@/views/admin/circulationRemark/circulationTaskEvaluationDetils'//流通任务评价详情
import staffingTenderManagement from '@/views/admin/projectManagement/staffingTenderManagement'


import circulation from '@/views/admin/personnel_allotment/circulation'
import desinger from '@/views/admin/personnel_allotment/desinger'
import virtualMachine from '@/Layout/template page/virtualMachine'
import evaluate from '@/views/admin/Enterprise_Evaluation/evaluate'

 import supplyContract from '@/views/admin/company/supplyContract'  //合同详情
 import userManagement from '@/views/admin/company/userManagement'  //用户管理


//供应商市场部门

import acceptDesignDetailsTask from '@/views/admin/supplier/supplierMarket/acceptDesignDetailsTask'
import accceptCirculationtask from '@/views/admin/supplier/supplierMarket/accceptCirculationtask'
import circulationTaskq from '@/views/admin/supplier/supplierMarket/circulationTaskq'
import designResult from '@/views/admin/supplier/supplierMarket/designResult'
import designResultDesigin from '@/views/admin/supplier/supplierMarket/designResultDesigin'//任务已完成详情页面
import designTaskq from '@/views/admin/supplier/supplierMarket/designTaskq'//设计任务列表
import designTaskqDesigin from '@/views/admin/supplier/supplierMarket/designTaskqDesigin'//设计任务详情
import designTaskabolishDe from '@/views/admin/supplier/supplierMarket/designTaskabolishDe'//设计任务废除详情
import designTaskqing from '@/views/admin/supplier/supplierMarket/designTaskqing'//设计任务进行时详情
import designTaskreD from '@/views/admin/supplier/supplierMarket/designTaskreD'//设计任务审核详情页面


import accceptCirculationDetailsTask from '@/views/admin/supplier/supplierMarket/accceptCirculationDetailsTask'
import circulationTaskfinish from '@/views/admin/supplier/supplierMarket/circulationTaskfinish'
import circulationTaskfinishDesign from '@/views/admin/supplier/supplierMarket/circulationTaskfinishDesign'
import circulationTaskqDesign from '@/views/admin/supplier/supplierMarket/circulationTaskqDesign'//流通任务详情

import circulationTaskreD from '@/views/admin/supplier/supplierMarket/circulationTaskreD'//流通任务审核详情


import circulationTaskabolishDe from '@/views/admin/supplier/supplierMarket/circulationTaskabolishDe'//流通任务废除详情

import circulationTaskqing from '@/views/admin/supplier/supplierMarket/circulationTaskqing'//流通任务进行中详情


import managerBusiness from '@/views/admin/manager/managerBusiness'
import businessDetail from '@/views/admin/manager/businessDetail'
import xuqiuyilan from '@/views/admin/company/xuqiuyilan'//需求一览
import xuqiuyilanDetail from '@/views/admin/company/xuqiuyilanDetail'//需求一览



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Front',
      name: 'Front',
      component: Front,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path:"/twoMenu",
          name:"twoMenu",
          component:twoMenu
        },
        {
          path: '/admin/xuqiuyilan',
          name: 'xuqiuyilan',
          component: xuqiuyilan,
        },
//优秀企业
        {
          path: '/company/excellentCompany',
          name: 'excellentCompany',
          component: excellentCompany,
        },
        {
          path: '/admin/xuqiuyilanDetail',
          name: 'xuqiuyilanDetail',
          component: xuqiuyilanDetail,
        },

        //优秀企业详情
        {
          path: '/company/excellentCompanyDesigin',
          name: 'excellentCompanyDesigin',
          component: excellentCompanyDesigin,
        },

      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: adminPage,
      children: [
        //系统首页
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            title: '系统首页'
          }
        },
        //新增任务
        {
          path: '/admin/newTask',
          name: 'newTask',
          component: newTask,
          meta: {
            requireAuth: true    // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        //查看所有主任务
        {
          path: '/admin/mainStaskShow',
          name: 'mainStaskShow',
          component: mainStaskShow,
        },
        //主任务详情及查看所属子任务部分信息
        {
          path: '/admin/substaskDetail',
          name: 'substaskDetail',
          component: substaskDetail,
        },
        //查看主任务所属子任务的全部信息
        {
          path: '/admin/mainStaskDetail',
          name: 'mainStaskDetail',
          component: mainStaskDetail,
          meta: {
            title: "查看主任务所属子任务的全部信息"
          }
        },
        //企业信息详情
        {
          path: '/admin/companyDetail',
          name: 'companyDetail',
          component: companyDetail,
          meta: {
            title: "企业信息详情"
          }
        },
        //查看所有供应商的信息
        {
          path: '/admin/supplyBussess',
          name: 'supplyBussess',
          component: supplyBussess,
          meta: {
            title: "所有供应商的信息"
          }
        },
        //单个供应商的详细信息
        {
          path: '/admin/supplyDetail',
          name: 'supplyDetail',
          component: supplyDetail,
          meta: {
            title: "供应商的详细信息"
          }
        },
        //供应商信息审核（将供应商添加到所属供应商名录中）
        {
          path: '/admin/check/review',
          name: 'review',
          component: review,
          meta: {
            title: "供应信息审核"
          }
        },
        //新增人员
        {
          path: '/admin/newStaff',
          name: 'newStaff',
          component: newStaff,
          meta: {
            title: "新增人员"
          }
        },
        //设计任务评价
        {
          path: '/admin/designTaskEvaluation',
          name: 'designTaskEvaluation',
          component: designTaskEvaluation
        },
        //任务计划
       {
          path: '/admin/supplyContract',
          name: 'supplyContract',
          component: supplyContract,
        

        },  
        //用户管理
        {
          path: '/admin/userManagement',
          name: 'userManagement',
          component: userManagement,
        

        },  
        {
          path: '/admin/circulationTaskEvaluation',
          name: 'circulationTaskEvaluation',
          component: circulationTaskEvaluation,
        

        },  
        {
          path: '/admin/circulationTaskEvaluationDetils',
          name: 'circulationTaskEvaluationDetils',
          component: circulationTaskEvaluationDetils,
        

        },  

        {
          path: '/admin/designTaskEvaluationDetils',
          name: 'designTaskEvaluationDetils',
          component: designTaskEvaluationDetils
        },
        //流通任务评价详情
        {
          path: '/admin/circulationTaskEvaluationDetils',
          name: 'circulationTaskEvaluationDetils',
          component: circulationTaskEvaluationDetils
        },
        //流通任务评价
        {
          path: '/admin/circulationTaskEvaluation',
          name: 'circulationTaskEvaluation',
          component: circulationTaskEvaluation
        },
        {
          path: '/admin/staffingTenderManagement',
          name: 'staffingTenderManagement',
          component: staffingTenderManagement
        },
        //核心企业设计任务列表
        {
          path: '/admin/designTask',
          name: 'designTask',
          component: designTask,

        },

        //核心企业流通任务详情列表
        {
          path: '/admin/circulationTask',
          name: 'circulationTask',
          component: circulationTask,

        },
        //流通人员
        {
          path: '/admin/personnel_allotment/circulation',
          name: 'circulation',
          component: circulation,
        },
        //设计人员
        {
          path: '/admin/personnel_allotment/desinger',
          name: 'desinger',
          component: desinger,
        },
        //企业评价
        {
          path:'/admin/Enterprise_Evaluation/evaluate',
          name:'evaluate',
          component:evaluate,
        },

         //供应商设计任务列表
        {
          path: '/admin/designTaskq',
          name: 'designTaskq',
          component: designTaskq,
          
        },
         //供应商设计任务详情
        {
          path: '/admin/designTaskqDesigin',
          name: 'designTaskqDesigin',
          component: designTaskqDesigin,
          
        },
        //供应商接受设计任务详情
        {
          path: '/admin/acceptDesignDetailsTask',
          name: 'acceptDesignDetailsTask',
          component: acceptDesignDetailsTask,
          
        },
        //供应商设计任务进行中详情
        {
          path: '/admin/designTaskqing',
          name: 'designTaskqing',
          component: designTaskqing,
          
        },
        //供应商设计任务进行中详情
        {
          path: '/admin/circulationTaskqing',
          name: 'circulationTaskqing',
          component: circulationTaskqing,
          
        },
        
        //供应商设计任务审核详情页面
        {
          path: '/admin/designTaskreD',
          name: 'designTaskreD',
          component: designTaskreD,
          
        },
        //供应商设计任务审核详情页面
        {
          path: '/admin/circulationTaskreD',
          name: 'circulationTaskreD',
          component: circulationTaskreD,
          
        },
       
         //供应商设计任务完成详情页面
         {
          path: '/admin/designResultDesigin',
          name: 'designResultDesigin',
          component: designResultDesigin,
          meta: {
            title: "接受设计任务详情"
          }
        },

        //供应商接受流通任务
        {
          path: '/admin/accceptCirculationtask',
          name: 'accceptCirculationtask',
          component: accceptCirculationtask,
          
        },

        //供应商接受流通任务详情
        {
          path: '/admin/accceptCirculationDetailsTask',
          name: 'accceptCirculationDetailsTask',
          component: accceptCirculationDetailsTask,
          
        },

        //供应商流通任务
        {
          path: '/admin/circulationTaskq',
          name: 'circulationTaskq',
          component: circulationTaskq,
          
        },
        //供应商流通任务详情
        {
          path: '/admin/circulationTaskqDesign',
          name: 'circulationTaskqDesign',
          component: circulationTaskqDesign,
          
        },
        
        //供应商设计成果
        {
          path: '/admin/designResult',
          name: 'designResult',
          component: designResult,
          
        },

        //供应商接受任务详情
        {
          path: '/admin/acceptDesignDetailsTask',
          name: 'acceptDesignDetailsTask',
          component: acceptDesignDetailsTask,
          meta:{
            title:"接受任务详情"
          }

        },
        //供应商完成任务列表
        {
          path: '/admin/circulationTaskfinish',
          name: 'circulationTaskfinish',
          component: circulationTaskfinish,
          meta:{
            title:"完成任务列表"
          }
        },
        //供应商完成任务详情
        {
          path: '/admin/circulationTaskfinishDesign',
          name: 'circulationTaskfinishDesign',
          component: circulationTaskfinishDesign,
          meta:{
            title:"完成任务详情"
          }
        },
        //供应商任务废除详情
        {
          path: '/admin/designTaskabolishDe',
          name: 'designTaskabolishDe',
          component: designTaskabolishDe,
          
        },
        //供应商任务废除详情
        {
          path: '/admin/circulationTaskabolishDe',
          name: 'circulationTaskabolishDe',
          component: circulationTaskabolishDe,
          
        },
        

        //企业管理
        {
          path: '/admin/manager_business',
          name: 'managerBusiness',
          component: managerBusiness,
        },
        //企业详情
        {
          path: '/admin/businessDetail',
          name: 'businessDetail',
          component: businessDetail,
          meta: {
            title: "企业详情"
          }
        },

        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
            //虚拟机
            {
              path: '/admin/personnel_allotment/virtualMachine',
              name: 'virtualMachine',
              component: virtualMachine,
            },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
