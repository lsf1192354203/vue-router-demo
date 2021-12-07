<template>
  <div class="arch-main">
      <!-- <h3>main</h3> -->
      <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: 'arch-main',
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    }
  },
  created () {},
  mounted () {}
}
</script>
<style scoped></style>
