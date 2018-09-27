<template>
  <div id="login">
    <div class="login-header">
      <a href="#" class="header-logo">logo</a>
      <h1>Sign in vana-blog</h1>
    </div>
    <div class="login-form">
      <v-form v-model="valid">
        <v-text-field
          v-model="id"
          :rules="nameRules"
          label="Username or email address"
          required
        ></v-text-field>
        <v-text-field
          type="password"
          v-model="pwd"
          :rules="emailRules"
          label="Password"
          required
        ></v-text-field>
        <v-btn
          large
          @click="submit"
          color="primary"
        >
          Sign in
        </v-btn>
      </v-form>

    </div>
    <div class="login-footer">
      <div class="footer-sign-in">
        New to Vana Blog? <a href="#">Create an account.</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      valid: true,
      id: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      pwd: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ]
    }
  },
  methods: {

    submit () {
      var id = this.id
      var pwd = this.pwd
      console.log(id)
      console.log(pwd)
      console.log(this.$store.state.login.test)

      this.$store.commit('login/TEST', id)
    }
  }
}
</script>
<style>
  #login {
    display: block;
    height:100%;
    text-align: center;
    padding : 100px 0px;
    background-color:rgb(249, 249, 249);
  }
  .login-header > h1 {
    font-size: 24px;
    font-weight: 300; /* 폰트 굵기 */
    letter-spacing: -0.5px; /* 글자사이 간격 */
    padding: 20px;
  }
  .login-header > .header-logo {

  }
  .login-form {
    display:inline-block;;
    width: 308px;
    height: 230px;
    border: 1px solid #ababab;
    background-color:white;
  }
  .login-footer {
    padding:20px;
  }
  .footer-sign-in {
    display:inline-block;
    width: 308px;
    padding:20px;
    border: 0.5px solid #ababab;
  }

</style>
