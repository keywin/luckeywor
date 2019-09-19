<template>
  <div>
    <div class="banner">
      <ul class="banner-cont">
        <li class="banner-cont-list" :style="{'marginTop': '-' + tabClickId * 450 + 'px'}"><img src="../../assets/img/pic/bailu/1920x1200.png" alt=""></li>
        <li class="banner-cont-list"><img src="../../assets/img/pic/hanlu/1920x1080.png" alt=""></li>
        <li class="banner-cont-list"><img src="../../assets/img/pic/qiufen/1920x1200.png" alt=""></li>
      </ul>
      <ul class="banner-tab">
        <li class="banner-tab-list" @click="tabClickFn(0)"><img src="../../assets/img/pic/bailu/1920x1200.png" alt=""></li>
        <li class="banner-tab-list" @click="tabClickFn(1)"><img src="../../assets/img/pic/hanlu/1920x1080.png" alt=""></li>
        <li class="banner-tab-list" @click="tabClickFn(2)"><img src="../../assets/img/pic/qiufen/1920x1200.png" alt=""></li>
        <i class="banner-tab-list-active-icon" :style="{'top': tabClickId * 150 + 'px'}" @mouseenter="tabMouseFn(1)" @mouseleave="tabMouseFn(2)"></i>
      </ul>
    </div>
    <div class="progressFoo">
      <el-progress :percentage="percentage" :color="customColors" :show-text=false></el-progress>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bnaner',
  data () {
    return {
      times: 5000,
      timer: null,
      tabClickId: 0,
      customColors: [
        {color: '#708aff', percentage: 34},
        {color: '#26989d', percentage: 66},
        {color: '#a493f2', percentage: 100}
      ]
    }
  },
  computed: {
    percentage () {
      return 100 / ( 3 - this.tabClickId)
    }
  },
  methods: {
    tabClickFn (id) {
      this.tabClickId = id
    },
    setIntervalFn () {
      this.timer = setInterval(() => {
        if (this.tabClickId < 0 || this.tabClickId >= 2) {
          this.tabClickId = 0
        } else {
          this.tabClickId += 1
        }
      }, this.times)
    },
    tabMouseFn (type) {
      type === 1 ? clearInterval(this.timer) : this.setIntervalFn()
    },
    // 进度条
    increase () {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    }
  },
  mounted () {
    clearInterval(this.timer)
    this.setIntervalFn()
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner{
  position: relative;
  height: 450px;
  overflow: hidden;
  .banner-cont{
    width: calc(100% - 250px);
    height: 100%;
    .banner-cont-list{
      transition: margin .3s;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: $lkw-orange;
    }
  }
  .banner-tab{
    position: absolute;
    right: 0;
    top: 0;
    width: 250px;
    .banner-tab-list{
      width: 100%;
      height: 150px;
      background: $lkw-green;
      cursor: pointer;
      &:nth-child(2){
        background: $lkw-gray;
      }
      &:nth-child(3){
        background: $lkw-red;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .banner-tab-list-active-icon{
      position: absolute;
      left: 0;
      top: 0;
      box-sizing: border-box;
      transition: top .3s;
      width: 100%;
      height: 150px;
      border: 3px solid $lkw-white;
      cursor: pointer;
    }
  }
  .progressFoo{
    clear: both;
  }
}
</style>
