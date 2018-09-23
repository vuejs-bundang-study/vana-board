# Server

### 1. 의존성 설치
```
npm install
```

### 2. 환경설정
/congif 경로에 설정 파일의 샘플인 config.example.yml 파일이 있는데, development 환경이나 production 환경이 실행되려면,
각각 config.development.yml, config.production.yml 파일이 동일한 경로에 존재해야 한다.
```yaml
server:
  port: 8080 # 서버가 listen 할 포트 (default 8080)
  cors_whitelist: # CORS를 허용해줄 도메인들의 목록 (optional)
  -
  -
  -

mongodb: # Mongodb 설정 (required)
  url: mongodb://username:password@localhost:27017/my-database

redis: # Redis 설정 (optional)
  host: 127.0.0.1
  port: 6379
```

### 3. Development mode 실행
config/config.development.yml을 설정한 다음,
```
npm run dev
```

### 4. Production mode 실행
config/config.production.yml을 설정한 다음,
```
npm run build
npm start
```
