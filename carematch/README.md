# CareMatch

간병 서비스 운영 전 과정을 다루는 실행형 플랫폼 모노레포입니다.

## 포함 범위 (v0 스캐폴드)
- `backend`: Express + TypeScript + Prisma 기반 API 서버 골격
- `web`: Guardian/Caregiver 웹 대시보드 자리
- `admin`: 관리자 SPA 자리
- `app-patient`: 보호자 앱 자리 (Expo)
- `app-caregiver`: 간병인 앱 자리 (Expo)

## 빠른 시작
```bash
cd carematch
npm install
npm run dev:backend
```

## 디렉토리
```text
carematch/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middlewares/
│   │   └── utils/
│   └── tests/
├── web/
├── admin/
├── app-patient/
└── app-caregiver/
```

## 다음 단계
1. Prisma 스키마 상세화 (User/Patient/CareRequest/Match/Contract/Payment/Dispute/Notification)
2. 인증(JWT access/refresh) 및 권한(Role) 미들웨어 적용
3. 토스페이먼츠/FCM/소셜 로그인 연동
4. Cron 기반 자동화(만료/정산/리마인더/배지)
5. 웹/어드민/앱 화면 및 API 통합
