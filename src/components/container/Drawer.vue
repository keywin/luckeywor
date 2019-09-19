<template>
  <div class="drawer" :class="drawerVisible ? '' : 'hideDrawer'">
    <div class="drawer-head">
      <h3>消息中心</h3>
      <a href="javascropt:;">查看更多</a>
      <i class="el-icon-close" @click="closeMsgDrawer"></i>
    </div>
    <div class="drawer-body">
      <div class="body-list" v-for="(msgData, i) in msgDatas" :key="i">
        <div class="list-t">
          <span>产品消息</span>
          <a href="javascript:;" class="cBlue fr" v-show="msgData.isRead != 0 && isRead === 0">标记已读</a>
          <i class="fr" v-show="isRead !== 0">{{msgData.msgDate}}</i>
        </div>
        <a href="javascript:;" class="list-cont ellipsis">{{msgData.msg}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import msgDatas from '../../assets/json/msg.json'
export default {
  name: 'Drawer',
  props: [
    'drawerVisible'
  ],
  data () {
    return {
      msgDatas,
      isRead: -1
    }
  },
  created () {},
  methods: {
    closeMsgDrawer () {
      this.$emit('isDrawerVisible', false)
    }
  },
  mounted () {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.drawer{
  position: fixed;
  right: 0;
  top: 48px;
  transition: right .3s;
  width: 300px;
  height: calc(100% - 48px);
  background: $lkw-white;
  color: $lkw-black;
  &.hideDrawer{
    right: -300px;
  }
  *{
    color: $lkw-black;
  }
  .drawer-head{
    display: table;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 51px;
    border-bottom: 1px solid $lkw-gray;
    line-height: 48px;
    text-align: center;
    h3{
      display: table-cell;
      padding-left: 20px;
      font-size: 16px;
      font-weight: 700;
      text-align: left;
    }
    a{
      display: table-cell;
      width: 70px;
      color: $lkw-blue;
      text-align: right;
    }
    i{
      display: table-cell;
      width: 35px;
      padding-right: 20px;
      font-size: 16px;
      text-align: right;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .drawer-body{
    max-height: calc(100% - 52px);
    margin-top: 52px;
    overflow-y: auto;
    .body-list{
      padding: 15px 0 7px;
      border-bottom: 1px solid $lkw-gray;
      transition: background .2s;
      &:hover{
        background: $lkw-gray;
      }
      .list-t{
        padding: 0 15px;
        line-height: 20px;
        span, i{
          color: $lkw-dark-gray;
        }
        a{
          color: $lkw-blue;
        }
      }
      .list-cont{
        display: block;
        padding: 4px 15px 0;
        color: $lkw-black;
        font-size: 12px;
        line-height: 21px;
      }
    }
  }
}
</style>
