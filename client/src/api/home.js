const _user = [{ id: 1, userName: '유저1' }]

export default {
  getUser (cb) {
    setTimeout(() => cb(_user), 100)
  }
}
