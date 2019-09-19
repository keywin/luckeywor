<template>
  <div class="getters">
      <el-col v-for="(item, i) in tableData" :key="i">
        <el-card :body-style="{ padding: '0' }">
          <img :src="item.cover" class="image" style="width: 100%;height: 400px; ">
          <div style="padding: 14px;">
            <span>{{ item.title }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.id }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'getters',
  data () {
    return {
      tableData: [],
      currentDate: new Date()
    }
  },
  computed: {
    ...mapGetters({
      _filterUserList: 'filterUserList'
    })
  },
  created () {
    // this.getUserList().then(() => {
    //   this.tableData = this.$store.getters.filterUserList
    // })
    this.getUserList().then(() => {
      this.tableData = this._filterUserList
    })
  },
  methods: {
    ...mapActions({
      getUserList: 'GET_USERLIST'
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
/deep/ {
  .el-col{
    width: 293px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .el-col:nth-child(4n){
    margin-right: 0;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
}

</style>
