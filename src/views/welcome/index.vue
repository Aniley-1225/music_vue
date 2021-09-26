<template>
  <div class="welcome-container">
    <div class="carousel">
      <div class="carsouseHead">
        歌 单 推 荐
      </div>
      <el-carousel :interval="4000" type="card" height="300px" loop>
        <el-carousel-item>
          <img src="@/assets/carousel1.jpg" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/carousel2.jpg" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/carousel3.jpg" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/carousel4.jpg" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/carousel5.jpg" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/carousel6.jpg" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.carousel {
  width: 1000px;
  margin: 0 auto;
  .carsouseHead {
    padding-top: 1.16667%;
    padding-bottom: 2%;
    text-align: center;
    font-size: 30px;
  }
  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
