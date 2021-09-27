<template>
  <div class="box-comtainer">
    <div class="box">
      <div class="box1">waiting~</div>
      <div class="box2">waiting~</div>
      <div class="box3">waiting~</div>
      <div class="box4">waiting~</div>
      <div class="box5">waiting~</div>
      <div class="box6">waiting~</div>
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
.box-container {
  perspective: 3000px;
}
.box {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 150px auto;
  transform-style: preserve-3d;
  animation: roll 10s linear infinite;
}

@keyframes roll {
  100% {
    transform: rotateY(360deg) rotateX(360deg);
  }
}

.box1,
.box2,
.box3,
.box4,
.box5,
.box6 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  line-height: 200px;
  font-size: 20px;
  text-align: center;
}

.box1 {
  background-color: skyblue;
  transform: translate3d(0, 0, 100px);
}

.box2 {
  background-color: pink;
  transform: translate3d(0, 100px, 0) rotateX(-90deg);
}

.box3 {
  background-color: violet;
  transform: translate3d(-100px, 0, 0) rotateY(-90deg);
}

.box4 {
  background-color: tomato;
  transform: translateZ(-100px) rotateY(180deg);
}

.box5 {
  background-color: lightsteelblue;
  transform: translate3d(0, -100px, 0) rotateX(90deg);
}

.box6 {
  background-color: springgreen;
  transform: translate3d(100px, 0, 0) rotateY(90deg);
}
</style>
