<template>
  <div>
    <el-button @click="logout">退出</el-button>
    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      window.localStorage.removeItem('token')
      this.$router.push('login')
    }
  }
}
</script>

<style>
</style>