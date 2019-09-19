<template>
  <div class="datalist">
      <el-card class="box-card">
        <p class="text item">账号: {{ userinfo.username }}</p>
        <p class="text item">姓名: {{ realname }}</p>
        <p class="text item">密码: {{ password }}</p>
        <p class="text item">全局state: {{ this.$store.state.userList }}</p>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="cover"
            label="封面">
            <template slot-scope="scope">
              <el-image :src="scope.row.cover" :preview-src-list="[scope.row.cover]" style="width: 135px;height: 195px;"></el-image>
              <!-- <img :src="scope.row.cover" alt=""> -->
            </template>
          </el-table-column>
          <el-table-column
            prop="id"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="title"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="cover"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="rate"
            label="评分"
            width="100">
          </el-table-column>
        </el-table>
      </el-card>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Datalist',
  data () {
    return {
      tableData: [],
      bbb: []
    }
  },
  computed: {
    realname () {
      return this.$store.state.userInfo.realname
    },
    // 辅助函数, 获取值
    ...mapState({
      userinfo: state => state.userInfo,
      password: state => state.userInfo.password
    })
  },
  created () {
    // this.GET_USERLIST().then(() => {
    //   this.tableData = this.$store.state.userList
    // })
    this.get_USERLIST().then(() => {
      this.tableData = this.$store.state.userList
    })
    // this.$store.dispatch('GET_USERLIST').then(() => {
    //   this.tableData = this.$store.state.userList
    // })
  },
  methods: {
    // ...mapActions(['GET_USERLIST'])
    ...mapActions({
      get_USERLIST: 'GET_USERLIST'
    })
  },
  mounted () {
    
  },
  destroyed () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.datalist .datalist_li{
  float: left;
  box-sizing: border-box;
  width: 290px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
</style>
