<template>
  <div class="login">
    <div class="login_mu">
      <div class="loginBox">
        <div class="loginL fl">
          <div>
            <h3>Miss, please</h3>
            <h3>有没有卖半岛铁盒</h3>
            <p>YES, YOU HAVE IT ON THE SECOND ROW OF SHELVES THAT TURN RIGHT IN FRONT OF YOU.</p>
          </div>
        </div>
        <div class="loginCont fl">
          <div class="login_titl">为什么这样子</div>
          <el-form :model="ruleForm2" status-icon ref="ruleForm2" class="demo-ruleForm">
            <el-form-item prop="username" class="mb30">
              <el-input size="medium" prefix-icon="el-icon-user" type="text" v-model="ruleForm2.username" autocomplete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password" class="mb30">
              <el-input size="medium" prefix-icon="el-icon-unlock" type="password" v-model="ruleForm2.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="medium" type="primary" class="submitBtn" @click="submitBtnFn()">登 录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      ruleForm2: {
        username: 'wowsay',
        password: '123456'
      }
    }
  },
  methods: {
    submitBtnFn () {
      this.$axios.post('/api/login', {
        username: this.ruleForm2.username,
        password: this.ruleForm2.password
      }).then(res => {
        if (res.data.status) {
          this.$store.commit('SAVE_USERINFO', res.data.data)
          this.$router.push('/index')
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login{
  width: 100vw;
  height: 100vh;
  background: url(../assets/img/pic/login.jpg) no-repeat left top;
  background-size: 100% 100%;
  .login_mu{
    height: 100%;
    .loginBox{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      height: 400px;
      .loginL{
        width: 330px;
        height: 100%;
        padding: 120px 0 0 30px;
        box-sizing: border-box;
        background-color: rgba(27, 32, 37, .8);
        color: $lkw-white;
        h3{
          height: 50px;
          font-size: 32px;
        }
        p{
          line-height: 24px;
          font-size: 14px;
        }
      }
      .loginCont{
        box-sizing: border-box;
        width: 470px;
        height: 100%;
        padding: 50px 40px;
        background-color: $lkw-white;
        .login_titl{
          height: 72px;
          color: $lkw-black;
          font: {
            size: 32px;
            weight: 400;
          }
        }
        .mb30{
          margin-bottom: 30px;
          & /deep/ .el-input__icon{
            color: $lkw-black;
          }
        }
        .submitBtn{
          width: 100%;
        }
      }
    }
  }
}
</style>
