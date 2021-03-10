export default {
  async asyncData({ $axios, query }) {
    var params = {
      order_no: '',
      user_phone: '',
      user_name: '',
      pay_time: '',
      pay_at: '',
      created_start_time: '',
      created_end_time: '',
      q: ''

    }
    try {
      const mountains = await $axios.$post(
        'https://www.fastmock.site/mock/240ac3764aa8ee3963b796cfdc668a88/test/getinfo',
        params
      )
      return { userInfo: mountains, tesmsg: '通过minxin调取query' + query.a, params }
    } catch (err) {
      // error({ statusCode: 404, message: "Post not found" });
      return { userInfo: err.message }
    }
  },

  methods: {
    // 关闭验证弹框
    handleClose() {
      this.captchaCode = ''
    }
  }
}
