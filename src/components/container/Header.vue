<template>
  <div class="header">
    <h1>
      <img src="../../assets/img/icon/ninja_white.png" alt="">
      <div class="fl">
        <p>{{ $store.state.userInfo.username || '半岛铁盒' }}</p>
        <p>BAN DAO TIE HE</p>
      </div>
    </h1>
    <div class="header-nav">
      <p class="nav-list" v-for="(navListData, i) in navListDatas" :key="i" @click="navListClickFn(navListData.id)">{{navListData.title}}</p>
      <i class="nav-list-active" :style="{'left': 100 * navListClickId + 'px'}"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: [
    'drawerVisible'
  ],
  data () {
    return {
      navListDatas: [
        // {id: 0, title: '首页', url: 'index'},
        // {id: 1, title: '那时', url: 'memory'},
        // {id: 2, title: '后来', url: 'now'},
        // {id: 3, title: '来生', url: 'afterlife'},
        // {id: 4, title: '消息'},
        // {id: 5, title: '个人中心', url: 'mine'}
        {id: 0, title: '导航一', url: 'index'},
        {id: 1, title: '导航二', url: 'memory'},
        {id: 2, title: '导航三', url: 'now'},
        {id: 3, title: '导航四', url: 'afterlife'},
        {id: 4, title: '消息'},
        {id: 5, title: '导航六', url: 'mine'}
      ],
      navListClickId: 0,
      table: false
    }
  },
  computed: {
    
  },
  created () {},
  methods: {
    navListClickFn (id) {
      if (id === 4) {
        this.$emit('isDrawerVisible', !this.drawerVisible)
      } else {
        this.navListClickId = id
        this.table = true
        this.bus.$emit('table', this.table)
        this.$router.push('/' + this.navListDatas[id]['url'])
      }
    }
  },
  mounted () {},
  watch: {
    $route: {
      handler: function(val, oldVal){
        this.$nextTick(()=>{
          this.navListClickId = this.navListDatas.findIndex((item) => item.url === val.path.split('/')[1])
          console.log(this.navListClickId)
        })
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
  color: $lkw-white;
  h1{
    float: left;
    height: 100%;
    cursor: pointer;
    img{
      float: left;
      width: 32px;
      height: 32px;
      margin: 8px 8px 0 0;
    }
    div{
      box-sizing: border-box;
      padding-top: 10px;
      p{
        line-height: 15px;
      }
    }
  }
  .header-nav{
    position: relative;
    float: right;
    height: 100%;
    .nav-list{
      float: left;
      width: 100px;
      height: 48px;
      font-size: 14px;
      line-height: 46px;
      text-align: center;
      cursor: pointer;
    }
    .nav-list-active{
      position: absolute;
      bottom: 0;
      transition: all .15s;
      width: 100px;
      height: 2px;
      background: $lkw-white;
    }
  }
}
</style>
