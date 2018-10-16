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
          label="이메일"
          required
        ></v-text-field>
        <v-text-field
          type="password"
          v-model="password"
          :rules="emailRules"
          label="비밀번호"
          required
        ></v-text-field>
        <v-btn
          large
          @click="submit"
          color="primary"
        >
          로그인
        </v-btn>
      </v-form>
      <a>회원가입</a>

      <a>찾기</a>
    </div>
    <div class="login-footer">
      <div class="footer-sign-in">
        New to Vana Blog? <a href="#">Create an account.</a>
      </div>
    </div>
  </div>

</template>
<script>
import { mapActions, mapState } from 'vuex'
/* login */
export default {
  data () {
    return {
      valid: true,
      id: '',
      nameRules: [
        v => !!v || '이메일을 입력하세요',
        v => /.+@.+/.test(v) || '이메일 형식이 올바르지 않습니다'
      ],
      password: '',
      emailRules: [
        v => !!v || '비밀번호를 입력하세요'
      ]
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('login/LOGIN', {
        id: this.id,
        password: this.password
      })
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
