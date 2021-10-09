<template>
  <div class="iLike-container">
    <div class="iLike-button">
      <el-button icon="el-icon-caret-right">播放全部</el-button>
      <el-button icon="el-icon-circle-plus-outline">添加到</el-button>
      <el-button icon="el-icon-download">下载</el-button>
      <el-button icon="el-icon-edit-outline">批量操作</el-button>
    </div>
    <div class="song_info">
      <el-table :data="song_info" style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="name" label="歌曲" width="550">
        </el-table-column>
        <el-table-column prop="singer" label="歌手"> </el-table-column>
        <el-table-column prop="album" label="专辑"> </el-table-column>
        <el-table-column prop="time" label="时长"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getILikeInfo } from '@/api/music'
export default {
  name: '',
  data () {
    return {
      song_info: []
    }
  },
  methods: {
    async getILikeInfo () {
      const { data: res } = await getILikeInfo()
      this.song_info = res.data
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getILikeInfo()
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.iLike-button {
  margin: 20px 0;
}
</style>
