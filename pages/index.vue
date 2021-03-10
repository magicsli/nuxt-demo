<template>
  <div class="container">
    <div>
      <Logo />
      <!-- <el-avatar
        class="avatar"
        size="medium"
        fit="cover"
        :src="userInfo.avatar"
      ></el-avatar> -->
      <h1 class="title">nuxt-demo</h1>

      <h4>{{ userInfo.desc || userInfo }}</h4>
      {{ "xxx" }}
      <div class="links">
        <el-button type="primary" @click="handleGetInfo">request</el-button>
        <nuxt-link to="/temp">go Temp</nuxt-link>

        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getInfo } from '@/api/app'
import asyncData from '@/mixins/asyncData'
export default {
  mixins: [asyncData],
  asyncData() {
    return { pageText: '这是本地页面调用的' }
  },
  data() {
    return {
      userInfo: {}
    }
  },
  watchQuery: ['a'],
  mounted() {
    // console.dir(this.$axios);
    console.dir(asyncData)
    console.dir(this)
  },
  methods: {
    async handleGetInfo() {
      try {
        const { data: a } = await getInfo()
        this.userInfo = a
        this.$router.push({
          path: this.$route.path,
          query: {
            a: this.$route.query.a === 500 ? 12 : 500
          }
        })
      } catch (error) {
        console.log(error.message)
      }
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
  display: block;
  font-family:
    "Quicksand",
    "Source Sans Pro",
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
