<template>
  <div>
      <h2>登录页面</h2>
      <el-button type="primary" @click="login">进入归档主页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push({name: 'archive'})
    }
  },
  created () {},
  mounted () {}
}
</script>
<style scoped></style>
