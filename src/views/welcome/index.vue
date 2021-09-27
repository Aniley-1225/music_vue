<template>
  <div class="welcome-container">
    <!-- 『 歌 单 推 荐 』 -->
    <div class="recom">
      <div class="carousel">
        <div class="carsouseHead">
          『 歌 单 推 荐 』
        </div>
        <div class="recomTab">
          <span
            @click="recomHandle(index)"
            v-for="(item, index) in recomTab"
            :key="index"
            :class="{ active: recomIndex == index }"
            >{{ item }}</span
          >
        </div>
        <el-carousel
          :interval="4000"
          type="card"
          height="300px"
          loop
          v-show="recomIndex === 0"
        >
          <el-carousel-item v-for="item in forU" :key="item.id">
            <img :src="item.src" alt="" />
          </el-carousel-item>
        </el-carousel>
        <el-carousel
          :interval="4000"
          type="card"
          height="300px"
          loop
          v-show="recomIndex === 1"
        >
          <el-carousel-item v-for="item in study" :key="item.id">
            <img :src="item.src" alt="" />
          </el-carousel-item>
        </el-carousel>
        <el-carousel
          :interval="4000"
          type="card"
          height="300px"
          loop
          v-show="recomIndex === 2"
        >
          <el-carousel-item v-for="item in magic" :key="item.id">
            <img :src="item.src" alt="" />
          </el-carousel-item>
        </el-carousel>
        <el-carousel
          :interval="4000"
          type="card"
          height="300px"
          loop
          v-show="recomIndex === 3"
        >
          <el-carousel-item v-for="item in zero" :key="item.id">
            <img :src="item.src" alt="" />
          </el-carousel-item>
        </el-carousel>
        <el-carousel
          :interval="4000"
          type="card"
          height="300px"
          loop
          v-show="recomIndex === 4"
        >
          <el-carousel-item v-for="item in dj" :key="item.id">
            <img :src="item.src" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 『 新 歌 首 发 』 -->
    <div class="new">
      <div class="newBox">
        <div class="header">『 新 歌 首 发 』</div>
        <el-button class="playAll" @click="palyAll"
          ><i class="el-icon-video-play"></i><span>播放全部</span></el-button
        >
        <div class="newTab">
          <span
            @click="newHandle(index)"
            v-for="(item, index) in newTab"
            :key="index"
            :class="{ active: newIndex == index }"
            >{{ item }}</span
          >
        </div>
        <!-- 轮播 -->
        <el-carousel indicator-position="outside" :autoplay="false">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="songInfo" v-for="val in 9" :key="val">
              <div class="img">{{ val }}</div>
              <div class="song">
                <div class="songName">--歌名--</div>
                <div class="singer">歌手--</div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      recomTab: ['楼楼推荐', '搞学习', '魔法！', '零点了上号', '整点电音'], // 推荐tab栏
      recomIndex: 0, // 推荐tab栏index
      forU: [
        { id: 1, src: require('../../assets/carsole/loulou/carousel1.jpg') },
        { id: 2, src: require('../../assets/carsole/loulou/carousel2.jpg') },
        { id: 3, src: require('../../assets/carsole/loulou/carousel3.jpg') },
        { id: 4, src: require('../../assets/carsole/loulou/carousel4.jpg') },
        { id: 5, src: require('../../assets/carsole/loulou/carousel5.jpg') },
        { id: 6, src: require('../../assets/carsole/loulou/carousel6.jpg') }
      ], // 楼楼推荐
      study: [
        { id: 1, src: require('../../assets/carsole/study/carousel1.jpg') },
        { id: 2, src: require('../../assets/carsole/study/carousel2.jpg') },
        { id: 3, src: require('../../assets/carsole/study/carousel3.jpg') },
        { id: 4, src: require('../../assets/carsole/study/carousel4.jpg') },
        { id: 5, src: require('../../assets/carsole/study/carousel5.jpg') },
        { id: 6, src: require('../../assets/carsole/study/carousel6.jpg') }
      ], // 搞学习
      magic: [
        { id: 1, src: require('../../assets/carsole/magic/carousel1.jpg') },
        { id: 2, src: require('../../assets/carsole/magic/carousel2.jpg') },
        { id: 3, src: require('../../assets/carsole/magic/carousel3.jpg') },
        { id: 4, src: require('../../assets/carsole/magic/carousel4.jpg') },
        { id: 5, src: require('../../assets/carsole/magic/carousel5.jpg') },
        { id: 6, src: require('../../assets/carsole/magic/carousel6.jpg') }
      ], // 魔法！
      zero: [
        { id: 1, src: require('../../assets/carsole/zero/carousel1.jpg') },
        { id: 2, src: require('../../assets/carsole/zero/carousel2.jpg') },
        { id: 3, src: require('../../assets/carsole/zero/carousel3.jpg') },
        { id: 4, src: require('../../assets/carsole/zero/carousel4.jpg') },
        { id: 5, src: require('../../assets/carsole/zero/carousel5.jpg') },
        { id: 6, src: require('../../assets/carsole/zero/carousel6.jpg') }
      ], // 零点了上号
      dj: [
        { id: 1, src: require('../../assets/carsole/dj/carousel1.jpg') },
        { id: 2, src: require('../../assets/carsole/dj/carousel2.jpg') },
        { id: 3, src: require('../../assets/carsole/dj/carousel3.jpg') },
        { id: 4, src: require('../../assets/carsole/dj/carousel4.jpg') },
        { id: 5, src: require('../../assets/carsole/dj/carousel5.jpg') },
        { id: 6, src: require('../../assets/carsole/dj/carousel6.jpg') }
      ], // 电音
      newTab: ['最新', '内地', '港台', '欧美', '韩国', '日本'], // 新歌首发
      newIndex: 0
    }
  },
  methods: {
    recomHandle (index) {
      this.recomIndex = index
    },
    newHandle (index) {
      this.newIndex = index
    },
    palyAll () {
      this.$alert('点击了也不能播放全部~', '这是假的', {
        confirmButtonText: '确定'
      })
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.recom {
  width: 100%;
  background: linear-gradient(#f2f2f2, #fafafa);
}
.carousel {
  width: 1200px;
  margin: 0 auto;
  .carsouseHead {
    padding-top: 1.16667%;
    padding-bottom: 2%;
    text-align: center;
    font-size: 30px;
  }
  .recomTab {
    height: 50px;
    text-align: center;
    span {
      font-size: 15px;
      margin: 0 24px;
      color: #333;
      cursor: pointer;
    }
    span.active {
      color: skyblue;
    }
  }
  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.new {
  background: linear-gradient(#f2f2f2, #fafafa);
  .newBox {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    .header {
      padding-top: 1.16667%;
      padding-bottom: 2%;
      text-align: center;
      font-size: 30px;
    }
    .playAll {
      position: absolute;
      margin-top: -10px;
      border: 1px solid #c9c9c9;
      padding: 10px 23px;
      .el-icon-video-play {
        font-size: 22px;
      }
      span {
        position: relative;
        top: -2px;
      }
    }
    .newTab {
      height: 50px;
      text-align: center;
      span {
        font-size: 15px;
        margin: 0 24px;
        color: #333;
        cursor: pointer;
      }
      span.active {
        color: skyblue;
      }
    }
    .el-carousel__item {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .songInfo {
        display: flex;
        width: 33.33%;
        height: 86px;
        border-top: 1px solid #f2f2f2;
        margin: -1px 0 13px 0;
        padding-top: 12px;
        padding-right: 30px;
        cursor: pointer;
        font-size: 14px;
        .img {
          width: 87px;
          height: 87px;
          background-color: lightsteelblue;
          text-align: center;
          line-height: 87px;
          font-size: 30px;
          color: #fff;
          margin-right: 14px;
        }
        .songName {
          padding: 21px 0 2px;
        }
        .singer {
          color: #999;
        }
      }
    }
    /deep/.el-carousel__button {
      background-color: skyblue;
    }
  }
}
</style>
