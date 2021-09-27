<template>
  <div class="my-container">
    <el-card class="box-card">
      <el-tabs v-model="activeName">
        <!-- 修改基本信息 -->
        <el-tab-pane label="修改基本信息" name="first">
          <el-form
            :model="baseInfoForm"
            :rules="rules"
            ref="baseInfoForm"
            label-width="100px"
          >
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="baseInfoForm.nickname"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="baseInfoForm.eamil"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="second">修改密码</el-tab-pane>
        <el-tab-pane label="上传头像" name="third">上传头像</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    var validatemail = (rule, value, callback) => {
      var reg = new RegExp(
        '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
      )
      if (!reg.test(value)) {
        callback(new Error('邮箱格式不正确'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'first',
      baseInfoForm: {},
      rules: {
        nickname: [
          { min: 3, max: 5, message: '长度在 1 到 8 个字符', trigger: 'blur' }
        ],
        email: [{ validator: validatemail, trigger: 'blur' }]
      }
    }
  },
  methods: {},
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.$store.userInfo.nickname === 'null'
      ? (this.baseInfoForm.nickname = '')
      : (this.baseInfoForm.nickname = this.$store.userInfo.nickname)
    this.$store.userInfo.email === 'null'
      ? (this.baseInfoForm.email = '')
      : (this.baseInfoForm.email = this.$store.userInfo.email)
  }
}
</script>
<style lang="less" scoped>
.my-container {
  padding: 20px 20px 0;
  .el-form {
    width: 600px;
    margin: 20px 50px 0;
  }
}
</style>
