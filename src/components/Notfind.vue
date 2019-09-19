<template>
  <div class="notfind">
    <div class="cont404">
      <img src="@/assets/img/pic/num404.png" alt="">
      <p class="engTip">Page Not Found</p>
      <p class="cnTip">所请求的页面不存在或已被删除！</p>
      <el-button type="primary" size="medium" @click="goHomeFn()">返回首页 {{ times }}s</el-button>
      <div>
        <i class="notFind" :class="`notFind_${num}`" v-for="(num, i) in statusArr" :key="i"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notfind',
  data () {
    return {
      times: 5,
      timer: null,
      statusArr: []
    }
  },
  created () {
    this.$nextTick(() => {
      this.statusArr = this.$route.query.status.split('')
    })
  },
  methods: {
    goHomeFn () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.$router.push({ path: '/index' })
    }
  },
  mounted () {
    console.log(this.$route)
    // clearInterval(this.timer)
    // this.timer = setInterval(() => {
    //   (this.times > 0 || this.$router.push({ path: '/index' })) && (this.times -= 1)
    // }, 1000)
  },
  destroyed () {
    // vue 是单页面应用，路由切换后，定时器并不会自动关闭，需要手动清除
    // clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.notfind{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: url(../assets/img/pic/bg404.png) no-repeat left top;
  background-size: 100% 100%;
  color: #fff;
  text-align: center;
  .cont404{
    position: absolute;
    right: 150px;
    top: 50%;
    transform: translateY(-50%);
  }
  .engTip{
    margin: 50px 0 20px;
    font-size: 18px;
    font-family:PingFangSC-Semibold;
    font-weight: 600;
    text-align: center;
  }
  .cnTip{
    margin-bottom: 35px;
    font-size: 24px;
    font-family:PingFangSC-Regular;
  }
}
// error_status
.notFind{
  display: inline-block;
  width: 100px;
  height: 100px;
  background: url(../assets/img/pic/notFind.png) no-repeat;
  background-size: auto 100%;
  &.notFind_0{
    width: 112px;
    background-position: -444px 0;
  }
  &.notFind_1{
    background-position: -556px 0;
  }
  &.notFind_2{
    background-position: -6px 0;
  }
  &.notFind_3{
    background-position: -116px 0;
  }
  &.notFind_4{
    background-position: -228px 0;
  }
  &.notFind_5{
    background-position: -339px 0;
  }
}
</style>
