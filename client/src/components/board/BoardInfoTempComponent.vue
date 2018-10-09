<template>
  <div>
    게시판 상세화면 {{id}}
    <a class="news_title black--text" @click="goBack()" title="운영알림판 바로가기">뒤로가기 ></a>
  </div>
</template>
<script>
export default {
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>
