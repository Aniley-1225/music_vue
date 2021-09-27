<template>
  <div>
    <transition name="transitionComponent">
      <component :is="currentView"></component>
    </transition>
  </div>
</template>

<script>
import rotate from '@/components/rotate'
import myMusic from '@/views/music/myMusic'
export default {
  name: '',
  data () {
    return {
      currentView: rotate
    }
  },
  components: {
    rotate,
    myMusic
  },
  methods: {
    loadingFalse () {
      setTimeout(() => {
        this.currentView = myMusic
      }, 2000)
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.loadingFalse()
  }
}
</script>
<style lang="less" scoped>
.transitionComponent-enter-active,
.transitionComponent-leave-active {
  transition: opacity 0.5s;
}
.transitionComponent-enter,
.transitionComponent-leave-to {
  opacity: 0;
}
</style>
