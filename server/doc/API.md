# User
### 회원가입
Request
```
POST /user
{
    email, (필수)
    password, (필수)
    nickname, (선택)
    profileImage, (선택)
}
```
Response
```
{
    success: Boolean,

    // 성공
    user: {
        _id: String,
        email: String,
    }

    // 실패
    message: String,
}
```


# Auth

### 로그인
Request
```
POST /auth/login
{
    email, (필수)
    password, (필수)
}
```
Response
```
{
    success: Boolean,
    message: String,
    accessToken: String, // 유효한 기간 1일
    refreshToken: String, // 유효한 기간 2주일.
}
```

### accessToken 검증
Request
```
GET /auth/verify?token={accessToken} (방법1)

Headers {
    Authorization: accessToken, (방법2)

    x-access-token: accessToken, (방법3)
}

방법 1, 2, 3중 한 가지를 선택하여 엑세스 토큰을 전송 (2번 권장)
```
Response
```
{
    success: Boolean,
    message: String,
    user: String, // user objectId
    iat: Number, // 토큰이 발급된 시간. 1000을 곱하면 timestamp가 된다.
    exp: Number, // 토큰이 만료될 시간. 1000을 곱하면 timestamp가 된다.
    iss: String, // 토큰 발급자
    sub: String // 토큰 타입
}
```

### 토큰 Refresh
Request
```
POST /auth/refresh?token={refreshToken} (방법1)

Headers {
    Authorization: refreshToken, (방법2)

    x-access-token: refreshToken, (방법3)
}

방법 1, 2, 3중 한 가지를 선택하여 엑세스 토큰을 전송 (2번 권장)
```
Response
```
{
    success: Boolean,
    message: String,
    accessToken: String, // 새로 발급된 accessToken
    refreshToken: String, // 새로 발급된 refreshToken
}
```

### 카테고리 조회
Request
```
GET /category
```
Response
```
{
    "_id": "5bbcaa489fe91c2410c3f9f7",
    "name": "카테고리 테스트",
    "createdBy":{
        "_id": "5bbca41dfb769a2324c35dfb",
        "nickname": "BlueCitron"
    },
    "createdAt": "2018-10-09T13:16:56.677Z",
    "updatedAt": "2018-10-09T13:16:56.678Z",
    "__v": 0
}
```

### 카테고리 등록
Request
```
POST /category
{
    name: String(필수)(유니크),
    createdBy: ObjectId(필수)
}
```
Response
```
{
    "success": Boolean,
    "name": String,
    "createdBy": ObjectId
}
```

### 카테고리 삭제
Request
```
DELETE /category/ObjectId
ex) /category/5bbcaa489fe91c2410c3f9f7
```
Response
```
{
    success: Boolean,
    _id: ObjectId
}

