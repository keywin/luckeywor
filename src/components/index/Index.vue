<template>
  <div class="index">
    <lkw-banner></lkw-banner>
    <div class="BANXIN">
      <lkw-datalist></lkw-datalist>
    </div>
  </div>
</template>

<script>
import lkwBanner from './Banner.vue'
import lkwDatalist from './Datalist.vue'
import {mapState} from 'vuex'
export default {
  name: 'Index',
  components: {
    lkwBanner,
    lkwDatalist
  },
  data () {
    return {
      msg: 'index',
      datalist: []
    }
  },
  computed: {
    userinfo () {
      return this.$store.state.userInfo
    },
    // 辅助函数 获取state数据
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created () {
    // this.$store.dispatch('GET_GLOBALDATALIST').then(() => {
    //   this.datalist = this.$store.state.datalist
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
