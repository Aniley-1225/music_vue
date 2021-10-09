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
              <el-input v-model="baseInfoForm.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitBaseInfoForm('baseInfoForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('baseInfoForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- 修改密码 -->
        <el-tab-pane label="修改密码" name="second">
          <el-form
            :model="passForm"
            status-icon
            :rules="passRules"
            ref="passForm"
            label-width="100px"
          >
            <el-form-item label="原密码" prop="oldPwd">
              <el-input
                type="password"
                v-model="passForm.oldPwd"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPwd">
              <el-input
                type="password"
                v-model="passForm.newPwd"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="passForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitPassForm('passForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('passForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- 上传头像 -->
        <el-tab-pane label="上传头像" name="third">
          <update-avatar></update-avatar>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { editUserInfo, editPassword } from '@/api/userInfo'
import updateAvatar from '@/components/updateAvatar'
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

    var validatePass = (rule, value, callback) => {
      if (value !== this.passForm.newPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'first',
      baseInfoForm: {
        nickname: '',
        email: ''
      },
      userInfo: {},
      rules: {
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: validatemail, trigger: 'blur' }
        ]
      },
      passForm: {},
      passRules: {
        oldPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        newPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitBaseInfoForm (form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
          try {
            const { data: res } = await editUserInfo({
              nickname: this.baseInfoForm.nickname,
              email: this.baseInfoForm.email
            })
            if (res.status !== 0) {
              return this.$message.error(res.message)
            }
            this.$message.success(res.message)
          } catch (err) {
            console.log(err)
          }
        } else {
          return false
        }
      })
    },
    submitPassForm (form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
          try {
            const { data: res } = await editPassword(this.passForm)
            if (res.status !== 0) {
              return this.$message.error(res.message)
            }
            this.$message.success(res.message)
            this.passForm = {}
          } catch (err) {
            console.log(err)
          }
        } else {
          return false
        }
      })
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    }
  },
  components: {
    updateAvatar
  },
  computed: {},
  watch: {},
  created () {
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    this.baseInfoForm = this.userInfo
    if (this.baseInfoForm.nickname === null) {
      this.baseInfoForm.nickname = ''
    }
    if (this.baseInfoForm.email === null) {
      this.baseInfoForm.email = ''
    }
  },
  mounted () {}
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
