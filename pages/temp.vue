<template>
  <div class="container">
    <div>
      <Logo />
      <div>vuex 中 userID 为{{ userId }}</div>
      <el-button type="primary" @click="handleTestVuex">测试获取vuex</el-button>
      <el-button
        type="warning"
        @click="handleRemoveVuex"
      >测试删除vuex</el-button>
      <el-button type="info" @click="handleBack">退回</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ $axios }) {
    const mountains = await $axios.$post(
      'https://www.fastmock.site/mock/240ac3764aa8ee3963b796cfdc668a88/test/getinfo',
      { key: '123' }
    )
    return { userInfo: mountains.data }
  },
  computed: {
    ...mapGetters({
      userId: 'app/getUserId'
    })
  },
  mounted() {
    // console.dir(this.$axios);
    // console.dir(this.userInfo);
  },
  methods: {
    handleTestVuex() {
      console.log(this)
      this.$store.dispatch('app/getUserInfo')
    },
    handleRemoveVuex() {
      this.$store.dispatch('app/RemoveUserInfo')
    },
    handleBack() {
      console.log(this.$router)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}

.title {
  font-family:
    "Quicksand",
    "Source SansPro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  word-spacing: 5px;
}

.button--green {
  color: $themeTextRed;
}

.links {
  padding-top: 15px;
}
</style>
