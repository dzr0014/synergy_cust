<template>
  <div id="monthSituation" style="width: 100%;height:350%;"></div>
</template>

<script>
export default {
  props: {
    lineData:{
      type:Object
    }
  },
  data() {
    return {};
  },
//   mounted() {
//     this.getCharts3();
//   },
  methods: {
    getCharts() {

      var that =this;
      var charts = [];
      var myChart = echarts.init(document.getElementById("monthSituation"));

      var option = {
        title: {
          text: "月度供需量"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["完成需求量", "发布需求量"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.lineData.months
          // [
          //   "一月",
          //   "二月",
          //   "三月",
          //   "四月",
          //   "五月",
          //   "六月",
          //   "七月",
          //   "八月",
          //   "九月",
          //   "十月",
          //   "十一月",
          //   "十二月"
          // ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "完成需求量",
            type: "line",
            stack: "总量",
            data: this.lineData.finishTaskCount
            //    data: [1,1,6]
          },
          {
            name: "发布需求量",
            type: "line",
            stack: "总量",
            data: this.lineData.taskCount
            // data: [0,0,9]
          }
        ]
      }; // 使用刚指定的配置项和数据显示图表。
      console.log(option)
      myChart.setOption(option);
      charts.push(myChart);
    }
  }
};
</script>