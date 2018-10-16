import apiSvc from './APIService'

export default {
  doLogin (param) {
    return apiSvc.post(`/auth/login`, {
      email: param.email,
      password: param.password
    })
  },

  setAccessToken (accessToken) {
    apiSvc.defaults.headers.common['Authorization'] = accessToken
  }
}
