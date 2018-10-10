<template>
  <v-container fluid fill-height>
    <v-layout align-start justify-center>
      <v-flex xs10>
        <v-toolbar class = "text-xs-center" dark color="#3F51B5">
          <v-toolbar-title>
            모두의 공원
          </v-toolbar-title>
        </v-toolbar>
        <v-card class="section_title text-sm-left">
          <div class="content">
            <h2 id = "title">
              <div style="width: 600px" class="recommended_title">{{ post.subject }}</div>
            </h2>
            <span id = "writer" class = "writer text-sm-right">{{post.id}} {{post.date}}</span>
            <img style = 'margin-top:25px; margin-left:25px;' :src= "post.img">
            <div id = "content">
              {{ post.content }}
            </div>
          </div>
          <v-card-actions>
            <v-btn color="blue-grey lighten-2" class ="white--text">목록으로</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary">글쓰기</v-btn>
            <v-btn color="primary">댓글달기</v-btn>
          </v-card-actions>
        </v-card>
        <v-card>
          <div id ="reply" class = "reply">
            댓글
          </div>
          <div id ="reply" class = "reply">
            댓글
          </div>
          <div id ="reply" class = "reply">
            댓글
          </div>
          <div id ="reply" class = "reply">
            댓글
          </div>
          <div id ="reply" class = "reply">
            댓글
          </div>
        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import boardApi from '../../api/board'
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 컴포넌트 생성시 데이터를 패치한다
    this.fetchData()
  },
  watch: {
    // 라우터 객체를 감시하고 있다가 fetchData() 함수를 호출
    '$route': 'fetchData'
  },
  computed: {
    // subject () {
    //   return this.$route.params.subject
    // },
    // id () {
    //   return this.$route.params.id
    // }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    fetchData () {
      this.error = this.post = null
      this.loading = true

      boardApi.getPost(this.$route.params.key, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
</script>

<style>
#title {
  padding: 10px;
  margin: 5px;
  display: block;
}
#writer {
  margin: 5px;
  display: block;
  border-bottom: 1px solid gray;
}

#content {
  padding: 25px;
  margin: 10px;
  display: block;
  border-bottom: 1px solid gray;
}

#reply {
  padding: 10px;
  margin: 5px;
  display: block;
  border-bottom: 1px solid gray;
}

</style>
