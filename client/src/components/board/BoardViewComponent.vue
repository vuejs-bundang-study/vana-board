<template>
  <v-container fluid fill-height>
    <v-layout align-start justify-center>
      <v-flex xs10>
        <v-toolbar class = "text-xs-center" dark color="#3F51B5">
          <v-toolbar-title>
            모두의 공원
          </v-toolbar-title>
        </v-toolbar>
        <v-card class="section_list recommended text-sm-left">
          <h2 id = "title" class="section_title">
            <span class="recommended_title">이재용 레전드.jpg</span>
          </h2>
          <span id = "writer" class = "writer text-sm-right">
            어읏썸 2018-09-26 11:24:47
          </span>
          <div class = "date">

          </div>
          <div id = "content">
            ㅋㅋㅋㅋㅋㅋ
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <v-card-actions>
            <v-btn color="blue-grey lighten-2" class ="white--text">목록으로</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary">글쓰기</v-btn>
            <v-btn color="primary">댓글달기</v-btn>
          </v-card-actions>
        </v-card>
        </br>
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
  padding: 10px;
  margin: 5px;
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
