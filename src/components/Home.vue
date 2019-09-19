<template>
  <div class="home">
    <el-container>
      <el-header
        style="width: 100%;height: 48px;position: reactive;z-index: 2;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)"
      >
        <lkw-header :drawerVisible="drawerVisible" @isDrawerVisible="isDrawerVisible"></lkw-header>
      </el-header>
      <el-main style="height:calc(100vh - 48px);padding: 0;position: relative;">
        <transition :name="transitionName">
          <router-view />
        </transition>
        <lkw-drawer :drawerVisible="drawerVisible" @isDrawerVisible="isDrawerVisible"></lkw-drawer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LkwHeader from "./container/Header.vue";
import LkwDrawer from "./container/Drawer.vue";
export default {
  name: "Home",
  components: {
    LkwHeader,
    LkwDrawer
  },
  data() {
    return {
      table: false,
      drawerVisible: false,
      transitionName: "slide-fade"
    };
  },
  methods: {
    isDrawerVisible(val) {
      this.drawerVisible = val;
    }
  },
  mounted() {
    this.bus.$on("table", msg => {
      this.table = msg;
    });
    // this.$axios.get({
    //   url: 'https://py.datahoop.cn/files/course_search',
    //   urlType: 2,
    //   data: { asd: '' }
    // }).then(res => {})
  }
  // vue监听路由对象$route的方法
  // watch: {
  //   // watch $route 决定使用哪种过渡
  //   '$route' (to, from) {
  //     console.log(from); // '/'
  //     console.log(to); // '/next1'
  //     this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right';
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: #000;
}
.el-header {
  position: reactive;
  z-index: 2;
  width: 100%;
  height: 48px !important;
  background: $lkw-black;
}
</style>
<style lang="scss" scoped>
.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: 0.3s;
}
.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: 0.3s;
}
@keyframes fold-left-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-left-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: hidden; */
  }
}

.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: 0.3s;
}
.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: 0.3s;
}
@keyframes fold-right-in {
  0% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-right-out {
  0% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: hidden; */
  }
}
</style>
<style lang="scss" scoped>
.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateY(50px);
  opacity: 0;
}
</style>