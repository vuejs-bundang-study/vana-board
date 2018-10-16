const _users = [
  { email: 'admin', password: 'admin' },
  { email: 'test1', password: 'test1' },
  { email: 'test2', password: 'test2' }
]

export default {
  login (cb) {
    setTimeout(() => cb(_users), 100)
  }
}
