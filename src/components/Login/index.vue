<template>
  <div class='login_container'>
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="@/assets/logo.png"
             alt="">
      </div>
      <!-- 登录表单 -->
      <el-form ref="loginFormRef"
               :model="loginForm"
               :rules='loginFormRules'
               label-width="0px"
               class="login_form">
        <!-- 用户名 -->
        <el-form-item prop='username'>
          <el-input v-model="loginForm.username"
                    prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop='password'>
          <el-input v-model="loginForm.password"
                    type="password"
                    prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item class='btns'>
          <el-button type='paimary'
                     @click="login">登录</el-button>
          <el-button type='info'
                     @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则
      loginFormRules: {
        // 用户名
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        // 密码
        password: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在3到15个字符', trigger: "input" }]
      }
    }
  },
  methods: {
    // 重置
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    // 登录
    login () {
      this.$refs.loginFormRef.validate(async (isValidate) => {
        if (!isValidate) {
          return
        } else {
          // 验证成功  进行登录
          const res = await this.$axios.post('login', this.loginForm)
          if (res.meta.status !== 200) {
            this.$message.error('登录失败！');
          } else {
            this.$message.success('登录成功！')
            window.localStorage.setItem('myToken', res.data.token)
            this.$router.push('/home')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    box-shadow: 0 0 10px #ddd;
    padding: 10px;
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #fff;
    img {
      background-color: #eee;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>