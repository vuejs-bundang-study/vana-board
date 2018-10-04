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
