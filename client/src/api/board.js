// const _posts = [
//   { id: 1, title: '게시글1', writer: '작성자1', content: 'test' },
//   { id: 2, title: '게시글2', writer: '작성자2', content: 'test' },
//   { id: 3, title: '게시글2', writer: '작성자2', content: 'test' }
// ]
const recommendedItems = [
  {
    subject: '이재용 레전드.jpg',
    reply: 65
  },
  {
    subject: '뉴욕에서 벌어진 일본의 졸렬함.jpg',
    reply: 61
  },
  {
    subject: '어지간하면 야동 지우지마세요',
    reply: 67
  },
  {
    subject: '벌써 질투받는 97년생 SBS신입 아나운서.jpg',
    reply: 102
  },
  {
    subject: '문통 워딩도 강하고 시원시원졌네요 ㅋㅋㅋㅋㅋㅋㅋㅋ.gisa',
    reply: 40
  },
  {
    subject: '(펌) 곧 다가올 그날.jpg',
    reply: 66
  },
  {
    subject: '문재인 대통령, 미국 Fox News ‘스페셜리포트’ 와 인터뷰',
    reply: 44
  },
  {
    subject: 'SBS 김수민 아나운서의 과거.jpg',
    reply: 21
  },
  {
    subject: '통일위해 북한 편? 文대통령 "정권 바뀌니 정반대 비난',
    reply: 22
  },
  {
    subject: '퀄컴 "애플이 모뎀칩 기밀 빼돌려 인텔에 줬다"',
    reply: 76
  },
  {
    subject: '에어팟 왼쪽만 팝니다',
    reply: 7
  },
  {
    subject: '노무현재단 신임 이사장에 유시민 내정(종합)',
    reply: 23
  },
  {
    subject: '릴레이413일)장충기 삼성공화국과 적폐청산 그날까지!!!',
    reply: 16
  }
]

const infoItems = [
  {
    subject: '엑셀, 모바일 사진 촬영만으로 스프레드시트 변환기능 발표',
    reply: 4
  },
  {
    subject: '닌텐도 스위치, 클라우드 구독 종료시 데이터 최대 6개월 보존',
    reply: 42
  },
  {
    subject: '정부, 단속 사각 HTTPS 음란사이트 접속 차단 논의',
    reply: 27
  },
  {
    subject: '루머) LG, \'V40 ThinQ\' 공식 렌더링 포착',
    reply: 9
  },
  {
    subject: 'Rtings.com 최고의 TV, 모니터, 헤드폰 리뷰 사이트',
    reply: 2
  },
  {
    subject: '루머) 구글 \'픽셀 3\' 시리즈, 카메라에 실시간 렌즈 분석 지원',
    reply: 8
  },
  {
    subject: 'Oracle, Java 11 릴리즈',
    reply: 17
  },
  {
    subject: 'Apple, macOS Mojave 10.14.1 beta 1 릴리즈',
    reply: 1
  }
]

const reviewItems = [
  {
    subject: '아이폰 메모리 리셋? 방법 미립자팁..',
    reply: 3
  },
  {
    subject: '일본식 갈라지는 오므라이스 만들기.',
    reply: 20
  },
  {
    subject: '영등포 신세계 올반 너무 짜네요',
    reply: 8
  },
  {
    subject: '화웨이 프리버드 5일 사용기',
    reply: 9
  },
  {
    subject: 'light for your moments, 필립스 휴 55개 시공 + 3주 사용기',
    reply: 13
  },
  {
    subject: '기어 -> 핏빕 -> 기어 -> 핏빕 사용기',
    reply: 15
  },
  {
    subject: '영알못이 원더풀 고스트 봤습니다. (스포多多)',
    reply: 4
  },
  {
    subject: '무료로 철학 공부 입문 및 팁?',
    reply: 20
  }
]

const sellItems = [
  {
    subject: 'USB C HUB 8-in-1'
  },
  {
    subject: '(삽니다) 티모바일 공유기 ac1900'
  },
  {
    subject: 'BMW e90 320i Lci 엔진보링완료'
  },
  {
    subject: '애플 번들 라이트닝 케이블'
  },
  {
    subject: '애플 번들 이이팟 3.5파이'
  },
  {
    subject: 'G7 SKT 블랙 가개통 팝니다'
  },
  {
    subject: '2017년형 맥북프로 13인치 기본형(논터치) 스페이스 그레이 팝니다'
  },
  {
    subject: '이케아 사무의자, 두닷 책상 판매'
  }
]

const promoteItems = [
  {
    subject: ' [스피드통신]SK/LG/KT [긴급설치가능]/[최대 95만원]/[주야상담가능]/[ai 스피커무상]'
  },
  {
    subject: '[SK/KT/LG 최고사은품 지급 ]-[ * 9월 최대 99만 ] [긴급접수][긴급입금][사후관리]'
  },
  {
    subject: '단열벽지 (a-10393) 겨울을 따뜻하게 보내세요~ ^^ 간편시공 보온 결로방지 됩니다'
  },
  {
    subject: '흩어져 있던 내보험.. 한손에 한번에 관리하는 똑똑한 앱!!'
  },
  {
    subject: '9월 롯데카드 풍성한 신규발급 혜택, 각종제휴-통신사, 항공, 포인트, 해외결제등'
  },
  {
    subject: '[9월 오토캐시백 최대 2.6%할인][신차 할부최저금리 3.3%][120개월 할부가능][신차금융'
  },
  {
    subject: '[대림케어] 제휴카드 할인, 스페셜 사은품 증정, 비데, 정수기, 연수기, 양변기+세면'
  },
  {
    subject: '[아우통신] 9월 3사 이벤트 , 최대 [74만원] [개통 당일지급] [Iot사은품 15만원][빠'
  }
]

const galleryItems = [
  {
    // url: '../../assets/1e38666606e43.jpg',
    url: require('@/assets/1e38666606e43.jpg'),
    subject: '요즘 날씨 너무 좋네요!',
    date: '10-05'
  },
  {
    // url: '../../assets/1de6675d4622b.jpg',
    url: require('@/assets/1de6675d4622b.jpg'),
    subject: '우리집 강쥐',
    date: '10-06'
  },
  {
    // url: '../../assets/1d12bc9f5ccf9.jpg',
    url: require('@/assets/1d12bc9f5ccf9.jpg'),
    subject: '미패드4 플러스 질렀습니다.',
    date: '10-07'
  },
  {
    // url: '../../assets/1da0d5a6d751a.jpg',
    url: require('@/assets/1da0d5a6d751a.jpg'),
    subject: '비오는 날 태화루',
    date: '10-08'
  }
]

const Items = {
  'recommendedItems': recommendedItems,
  'infoItems': infoItems,
  'reviewItems': reviewItems,
  'sellItems': sellItems,
  'promoteItems': promoteItems,
  'galleryItems': galleryItems
}
export default {
  getPosts (cb) {
    setTimeout(() => cb(Items), 100)
  }
}
