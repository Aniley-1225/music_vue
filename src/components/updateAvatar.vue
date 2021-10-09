<template>
  <div class="avatar-container">
    <el-upload
      class="avatar-uploader"
      action="#"
      :auto-upload="false"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-change="onChangeUpload"
      :limit="1"
    >
      <i class="el-icon-plus"></i>
    </el-upload>

    <el-button class="update" type="primary" size="small" @click="updateAvatar"
      >上传头像</el-button
    >
  </div>
</template>

<script>
import { editAvatar } from '@/api/userInfo'
export default {
  name: '',
  data () {
    return {
      user_pic: ''
    }
  },
  methods: {
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },

    onChangeUpload (file, fileList) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 1M!')
        fileList.splice(-1, 1) // 移除选中图片
        return false
      }
      const _this = this
      const reader = new FileReader()
      reader.onload = function (e) {
        _this.user_pic = reader.result
      }
      reader.readAsDataURL(file.raw)
    },
    async updateAvatar () {
      if (this.user_pic === '') {
        return this.$message.error('请先选择的图片')
      }
      try {
        const fd = new FormData()
        fd.append('user_pic', this.user_pic)
        const { data: res } = await editAvatar(fd)
        if (res.status !== 0) return this.$message.error(res.message)
        this.$message.success(res.message)
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
.avatar-container {
  width: 600px;
  margin: 20px 50px 0;
}
.avatar-uploader /deep/.el-upload {
  border: 1px dashed #aaaaaa;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.avatar-uploader /deep/.el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.update {
  margin: 10px;
}
</style>
