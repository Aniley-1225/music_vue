<template>
  <div class="home-container">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item index="/welcome">
            <i class="el-icon-headset"></i>
            首页
          </el-menu-item>
          <el-menu-item index="/music">
            <i class="el-icon-magic-stick"></i>
            我的音乐
          </el-menu-item>
          <el-submenu index="/todo">
            <template slot="title">
              <i class="el-icon-loading"></i>
              未开发
            </template>
            <el-menu-item index="3-1">我也</el-menu-item>
            <el-menu-item index="3-2">不知道</el-menu-item>
            <el-menu-item index="3-3">这里</el-menu-item>
            <el-submenu index="3-4">
              <template slot="title">要放啥</template>
              <el-menu-item index="2-4-1">以后</el-menu-item>
              <el-menu-item index="2-4-2">可能</el-menu-item>
              <el-menu-item index="2-4-3">会想到</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/my">
            <i class="el-icon-brush"></i>
            个人中心
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-mouse"></i>
            <a href="https://y.qq.com/?ADTAG=myqq#type=index" target="_blank">
              来点音乐bro
            </a>
          </el-menu-item>
        </el-menu>
        <div class="infoBox">
          <el-tooltip content="个人中心" placement="bottom" effect="light">
            <div class="avatar" @click="skipToMy">
              <span v-if="userInfo.user_pic === 'null'" class="text">
                {{ getAvatarText() }}
              </span>
              <span v-else class="pic">
                <img :src="userInfo.user_pic" alt="" />
              </span>
            </div>
          </el-tooltip>
          <div class="logout" @click="logout">
            <el-tooltip content="退出" placement="bottom" effect="light">
              <i class="el-icon-switch-button"></i>
            </el-tooltip>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/userInfo'
export default {
  name: '',
  data () {
    return {
      user: { id: localStorage.getItem('userId') },
      activeIndex: '/welcome',
      userInfo: {}
    }
  },
  methods: {
    async getUserInfo () {
      const { data: res } = await getUserInfo(this.user)
      this.userInfo = res.data
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    getAvatarText () {
      if (this.userInfo.nickname !== 'null') {
        return this.userInfo?.nickname.substring(0, 1)
      }
      return this.userInfo?.username.substring(0, 1)
    },
    logout () {
      this.$confirm('您确认退出登录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        callback: action => {
          if (action === 'confirm') {
            sessionStorage.removeItem('tokenKey')
            sessionStorage.removeItem('userId')
            this.$router.push('/login')
          }
        }
      })
    },
    skipToMy () {
      this.$router.push({ name: 'my' })
      this.activeIndex = '/my'
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getUserInfo()
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.infoBox {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 120px;
  height: 50px;
  .avatar {
    float: left;
    margin-top: 2px;
    .text {
      width: 45px;
      height: 45px;
      display: block;
      background-color: skyblue;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      font-size: 24px;
      color: #fff;
      cursor: pointer;
    }
    .pic {
      width: 45px;
      height: 45px;
      line-height: 45px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .logout {
    float: right;
    margin-right: 20px;
    margin-top: 5px;
    line-height: 50px;
    i {
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
