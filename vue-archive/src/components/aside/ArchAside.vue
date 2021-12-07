<template>
  <div class="arch-side">
    <!-- <h3>aside</h3> -->
    <!-- <ul>
          <li @click="jump(1)">凭证</li>
          <li @click="jump(2)">账页</li>
      </ul> -->
    <el-menu router background-color="#475669" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">账务数据</template>
        <el-menu-item route="/archive/zwdata/pzInfo" index="1-1">凭证</el-menu-item>
        <el-menu-item route="/archive/zwdata/zyInfo" index="1-2">账页</el-menu-item>
        <el-menu-item route="/archive/zwdata/kmhzInfo" index="1-3">科目汇总</el-menu-item>
        <el-menu-item route="/archive/zwdata/zzInfo" index="1-4">总账</el-menu-item>
        <el-menu-item route="/archive/zwdata/wlInfo" index="1-5">往来账</el-menu-item>
        <el-menu-item route="/archive/zwdata/zxhsInfo" index="1-6">专项核算</el-menu-item>
        <el-menu-item route="/archive/zwdata/zhhzInfo" index="1-7">综合汇总</el-menu-item>
      </el-submenu>
      <el-menu-item route="/archive/bbData" index="2">报表数据</el-menu-item>
      <el-submenu index="3">
        <template slot="title">资产数据</template>
        <el-menu-item route="/archive/assetdata/assetInfo" index="3-1">资产卡片</el-menu-item>
        <el-menu-item route="/archive/assetdata/cardInfo" index="3-2">卡片明细</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'arch-aside',
  methods: {
    // jump (id) {
    //   if (id === 1) {
    //     console.log(this.$router.history.current.fullPath)
    //     this.$router.push({name: 'pzInfo'})
    //   } else {
    //     if (id === 2) {
    //       console.log(this.$router.history.current.fullPath)
    //       this.$router.push({name: 'zyInfo'})
    //     }
    //   }
    // }
  },
  created() {},
  mounted() {}
}

</script>
<style scoped>
.arch-side ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.el-menu{border:none}
</style>
