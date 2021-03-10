export default {
  async getUserInfo({ commit, state }) {
    const {
      data
    } = await this.$axios.$post(
      'https://www.fastmock.site/mock/240ac3764aa8ee3963b796cfdc668a88/test/getinfo',
      { key: '123' }
    )
    return commit('SET_USERID', data.age)
  },

  RemoveUserInfo({ commit }) {
    return commit('REMOVE_USERID')
  }
}
