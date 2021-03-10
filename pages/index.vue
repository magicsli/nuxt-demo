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
      {{ tesmsg || "xxx" }}
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
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
    "Source Sans Pro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  color: #35495e;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.button--green {
  color: $themeTextRed;
}

.links {
  padding-top: 15px;
}
</style>
