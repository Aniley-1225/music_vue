<template>
  <div class="myMusic-container">
    <div class="header">
      <div class="section_inner">
        <!-- 头像 -->
        <div class="avatar">
          <img
            v-if="userInfo.user_pic !== 'null'"
            :src="userInfo.user_pic"
            alt=""
          />
          <span class="text" v-if="userInfo.nickname !== 'null'">{{
            userInfo.nickname | getFirst
          }}</span>
          <span class="text" v-else>{{ userInfo.username | getFirst }}</span>
        </div>
        <!-- 用户名 -->
        <div class="user_tit">
          <span class="username" v-if="userInfo.nickname !== 'null'">{{
            userInfo.nickname
          }}</span>
          <span class="username" v-else>{{ userInfo.username }}</span>
          <img
            src="//y.qq.com/music/icon/v1/mac/nsvip6@2x.png?max_age=2592000"
          />
          <img
            src="//y.qq.com/music/icon/v1/mac/nsui6@2x.png?max_age=2592000"
          />
        </div>
        <!-- 关注、粉丝 -->
        <div class="user_statistic">
          <div class="item">
            <div class="number" @click="$router.push('/follow')">
              {{ userInfo.follow }}
            </div>
            <div class="text">关注</div>
          </div>
          <div class="item">
            <div class="number" @click="$router.push('/follower')">
              {{ userInfo.follower }}
            </div>
            <div class="text">粉丝</div>
          </div>
        </div>
      </div>
      <!-- 三级路由 -->
      <div class="nav">
        <ul>
          <li>
            <router-link :to="'/iLike'" active-class="active"
              >我喜欢</router-link
            >
          </li>
          <li>
            <router-link :to="'/iBought'" active-class="active"
              >我的已购</router-link
            >
          </li>
          <li>
            <router-link :to="'/myList'" active-class="active"
              >我创建的歌单</router-link
            >
          </li>
          <li>
            <router-link :to="'/follow'" active-class="active"
              >关注</router-link
            >
          </li>
          <li>
            <router-link :to="'/follower'" active-class="active"
              >粉丝</router-link
            >
          </li>
          <li>
            <router-link :to="'/myVideo'" active-class="active"
              >我上传的视频</router-link
            >
          </li>
          <li>
            <router-link :to="'/myRadio'" active-class="active"
              >主播电台</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- 路由 -->
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  filters: {
    getFirst (val) {
      return val.substring(0, 1)
    }
  },
  methods: {},
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  watch: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.header {
  position: relative;
  padding-top: 65px;
  background: linear-gradient(
    to bottom right,
    rgba(135, 207, 235, 0.63),
    #fafafa,
    rgba(135, 207, 235, 0.63)
  );
  background-size: cover;
  text-align: center;
  color: #fff;
  .section_inner {
    height: 315px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    .avatar {
      width: 110px;
      height: 110px;
      margin: 0 auto;
      border-radius: 50%;
      border: 3px solid #fff;
      background-color: lightgreen;
      img {
        width: 100%;
        height: 100%;
      }
      .text {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 104px;
        font-size: 40px;
        color: #fff;
      }
    }
    .user_tit {
      font-size: 30px;
      font-weight: 400;
      line-height: 64px;
      margin-right: 4px;
      margin-top: -7px;
      color: #bbb;
      overflow: hidden;
      img {
        vertical-align: text-top;
      }
      .username {
        margin-right: 6px;
      }
    }
    .user_statistic {
      display: flex;
      color: #bbb;
      justify-content: center;
      .item {
        &:first-child {
          border-right: 1px solid #aaa;
        }
        width: auto;
        text-align: center;
        padding: 0 25px;
        .number {
          font-size: 22px;
          cursor: pointer;
        }
        .number:hover {
          color: lightgreen;
        }
      }
    }
  }
  .nav {
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #f7f7f7;
    height: 56px;
    line-height: 56px;
    background-color: rgba(0, 0, 0, 0.2);
    ul {
      display: flex;
      width: 1200px;
      margin: 0 auto;
      li {
        margin-right: 40px;
        a {
          color: #fff;
        }
        .active {
          color: slateblue;
        }
      }
    }
  }
}
.router {
  width: 1200px;
  margin: 0 auto;
}
</style>
