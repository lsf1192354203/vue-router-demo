<template>
  <div class="arch-main">
      <h3>Table1内容</h3>
      <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: 'comp-table1',
  data () {
    return {}
  },
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
