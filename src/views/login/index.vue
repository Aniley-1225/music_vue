<template>
  <div class="login_container">
    <!-- 粒子特效 -->
    <vue-particles
      id="particles-js"
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="5"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <!-- 登录框 -->
    <div class="login_box" v-if="isLogin">
      <el-form :rules="loginRules" ref="loginForm" :model="loginForm">
        <el-form-item prop="username">
          <span class="iconfont icon-denglu"></span>
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span class="iconfont icon-mima"></span>
          <el-input v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="userLogin">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="toRegister" @click="transformBox">没有账号？去注册 -></div>
    </div>
    <!-- 注册框 -->
    <div class="register_box" v-else>
      <el-form :rules="loginRules" ref="registerForm" :model="registerForm">
        <el-form-item prop="username">
          <span class="iconfont icon-denglu"></span>
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span class="iconfont icon-mima"></span>
          <el-input v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="userRegister">注册</el-button>
        </el-form-item>
      </el-form>
      <div class="toRegister" @click="transformBox">已有账号？去登录 -></div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/users.js'
export default {
  name: '',
  data () {
    return {
      isLogin: true,
      loginForm: {},
      registerForm: {},
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async userLogin () {
      try {
        const { data: res } = await login(this.loginForm)
        if (res.status === 0) {
          this.$message.success('遇见音乐，遇见我的生活~ ∠( ᐛ 」∠)_')
          this.$store.commit('setUser', res)
          this.$router.push({ name: 'home' })
        } else {
          this.$message.error(res.message)
        }
      } catch (err) {
        console.log(err)
      }
    },
    transformBox () {
      this.isLogin = !this.isLogin
    },
    async userRegister () {
      try {
        const { data: res } = await register(this.registerForm)
        if (res.status === 0) {
          this.$message.success(res.message)
          this.loginForm = this.registerForm
          this.isLogin = true
        } else {
          this.$message.error(res.message)
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.login_container {
  height: 100%;
  position: relative;
  background: url('../../assets/login_bg.jpg') no-repeat;
  background-size: cover;
  .login_box,
  .register_box {
    position: absolute;
    width: 500px;
    height: 350px;
    padding: 60px 50px 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid #000;
    border-radius: 5px;
    /deep/.el-input__inner {
      position: relative;
      border: none;
      border-bottom: 1px solid #000;
      text-indent: 1em;
      background-color: transparent;
      border-radius: 0px;
      color: #000;
      font-size: 16px;
    }
    /deep/.el-input__clear {
      color: #000;
    }
    .el-button {
      width: 100%;
      background-color: transparent;
      border-color: #000;
      font-size: 18px;
      color: #000;
    }
    .el-button:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
    .toRegister {
      margin-top: 50px;
      margin-left: 240px;
      cursor: pointer;
    }
    .toRegister:hover {
      color: #fff;
    }
    .iconfont {
      position: absolute;
      top: -1px;
      left: 10px;
      z-index: 999;
      font-size: 18px;
    }
  }
}
#particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;
}
</style>
