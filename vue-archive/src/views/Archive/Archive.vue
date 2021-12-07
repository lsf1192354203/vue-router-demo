<template>
  <div class="arch-main">
      <aside class="arch-main-aside">
        <h4>归档目录</h4>
        <arch-aside></arch-aside>
      </aside>
      <aside class="arch-main-view">
        <h4>归档管理</h4>
        <!-- <arch-main></arch-main> -->
        <router-view></router-view>
      </aside>
  </div>
</template>

<script>
import ArchAside from '@/components/aside/ArchAside'
import Main from '@/components/main/Main'
export default {
  name: 'archive',
  components: {
    'arch-aside': ArchAside,
    'arch-main': Main
  },
  created () {},
  mounted () {}
}
</script>
<style scoped>
.arch-main {
    height: 100%;
    text-align: left;
}
.arch-main-aside {
    position: fixed;
    top: 10px;
    left: 10px;
    bottom: 20px;
    width: 200px;
    padding: 10px;
    background-color: #ebeef5;
}
.arch-main-view {
    position: fixed;
    top: 10px;
    left: 240px;
    right: 10px;
    bottom: 20px;
    padding: 10px;
    background-color: #ebeef5;
}
</style>
