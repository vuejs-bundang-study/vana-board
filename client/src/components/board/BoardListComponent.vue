<template>
  <div class="boardlist">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card class="section_list notice text-sm-left">
            <h2 id = "title" class="section_title">
              <a class="news_title black--text" title="운영알림판 바로가기">운영알림판 ></a>
            </h2>
              <div id = "list" class="list_empty">
                <span>운영알림판 내용이 없습니다.</span>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="section_list recommended text-sm-left">
              <h2 id = "title" class="section_title">
                <span class="recommended_title">오늘의 추천글</span>
              </h2>
              <div id = "list">
                <v-list
                  v-for= "item in recommendedItems"
                  :key= "item.id"
                  :item="item">
                  <a class = "black--text" @click="goPostInfo(item)">
                    {{item.subject}}
                  </a>
                  <a class = "red--text">
                    {{item.reply}}
                  </a>
                </v-list>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="section_list allinfo text-sm-left">
              <h2 id = "title" class="section_title">
                <a class="allinfo_title black--text" title="정보와 자료 바로가기">정보와 자료 ></a>
              </h2>
              <div id = "list">
                <v-list
                  v-for= "item in infoItems"
                  :key= "item.id"
                  :item="item">
                  <a class = "black--text" @click="goPostInfo(item)">
                    {{item.subject}}
                  </a>
                  <a class = "red--text">
                    {{item.reply}}
                  </a>
                </v-list>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="section_list allreview text-sm-left">
              <h2 id = "title" class="section_title">
                <a class="allreview_title black--text" title="강좌와 사용기 바로가기">강좌/사용기 ></a>
              </h2>
              <div id = "list">
                <v-list
                  v-for= "item in reviewItems"
                  :key= "item.id"
                  :item="item">
                  <a class = "black--text" @click="goPostInfo(item)">
                    {{item.subject}}
                  </a>
                  <a class = "red--text">
                    {{item.reply}}
                  </a>
                </v-list>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="section_list allsell text-sm-left">
              <h2 id = "title" class="section_title">
                <a class="allsell_title black--text" title="사고팔고 바로가기">사고팔고 ></a>
              </h2>
              <div id = "list">
                <v-list
                  v-for= "item in sellItems"
                  :key= "item.id"
                  :item="item">
                  <a class = "black--text" @click="goPostInfo(item)">
                    {{item.subject}}
                  </a>
                </v-list>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="section_list promote text-sm-left">
              <h2 id = "title" class="section_title">
                <a class="promote_title black--text" title="직접홍보 바로가기">직접홍보 ></a>
              </h2>
              <div id = "list">
                <v-list
                  v-for= "item in promoteItems"
                  :key= "item.id"
                  :item="item">
                  <a class = "black--text" @click="goPostInfo(item)">
                    {{item.subject}}
                  </a>
                </v-list>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card class="section_list gallery text-sm-left">
              <h2 id= "title" class="section_title">
                <a class="gallery_title black--text" title="갤러리 바로가기">추천 갤러리 ></a>
              </h2>
              <div id= "list"></div>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-list
                    id= "list_gallery"
                    v-for= "item in galleryItems"
                    :key= "item.id"
                    :item= "item"
                    :src= "item.url">
                    <a class= "black--text">
                      <img style = 'height:30%; width:30%;' :src= "item.url">
                    </a>
                    <a class= "black--text">
                      {{item.subject}}
                    </a>
                    <a class= "black--text">
                      {{item.date}}
                    </a>
                  </v-list>
                </v-flex>
                <v-flex xs6>
                  <v-list
                    id= "list_gallery"
                    v-for= "item in galleryItems"
                    :key= "item.id"
                    :item= "item"
                    :src= "item.url">
                    <a class= "black--text">
                      <img style = 'height:30%; width:30%;' :src= "item.url">
                    </a>
                    <a class= "black--text">
                      {{item.subject}}
                    </a>
                    <a class= "black--text">
                      {{item.date}}
                    </a>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    goPostInfo: function (id) {
      this.$router.push({path: `/board/info/${id.subject}`})
    },
    ...mapActions('post', ['getAllPosts'])
  },
  mounted () {
    this.getAllPosts()
  },
  computed: mapState({
    recommendedItems: state => state.post.posts.recommendedItems,
    infoItems: state => state.post.posts.infoItems,
    reviewItems: state => state.post.posts.reviewItems,
    sellItems: state => state.post.posts.sellItems,
    promoteItems: state => state.post.posts.promoteItems,
    galleryItems: state => state.post.posts.galleryItems
  }),
  data () {
    return {
    }
  }
}
</script>

<style>
#title {
  padding: 10px;
  margin: 5px;
  display: block;
  width: 180px;
}
#list_gallery {
  padding: 5px;
  margin: 8px;
  display: block;
  border: 1px solid #d8d8d8;
}

#list {
  padding: 10px;
  margin: 5px;
  display: block;
  border-top: 1px solid gray;
}
</style>
