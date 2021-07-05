# 📚 Inflearn-Clone-Backend

## 📖 개요(Summary)

인프런 웹앱을 만들어보는 팀프로젝트

---

<br />

## 🎯 목표(Objectives)

- 팀프로젝트 및 협업 경험
- Hard skill 및 Soft skill 향상

---

<br />

## 📆 개발기간(Develop period)

2021.07.05 ~ 진행중

---

<br />

## 💻 라이브러리 및 기술 스택(Library & Stack)

- Language : Typescript
- Server : Express
- DB : MySQL
- ORM : Sequelize
- Auth : Passport
- Etc : multer, bcrypt, env, CORS, ...

---

<br />

## 📑 할 일 (Things to do)

- [ ] 백엔드 세팅 : Typescript, Express, MySQL, Sequelize, ...
  - [ ] tsconfig.json 파일의 옵션들 공부하기
- [ ] 테이블 및 관계 구상하기
- [ ] 라우팅
- [ ] CI / CD 툴 적용
  - ex) Jenkins
- [ ] AWS 배포
- [ ] 문서 정리
  - ex) Swagger

---

<br />

## ✨ 주요 기능

- 로그인
- 강의 CRUD

---

<br />

## 📗 작업 내용

<details>
<summary>2021.07.05(Tony)</summary>

github repository 생성

- collaborator 초대
- branch protect rule 설정

Readme 작성

package 다운
npm install -g typescript : typescript 설치
tsc --init : typescript 설정파일 생성(tsconfig.json)
tsconfig.json 수정

npm install --save-dev nodemon ts-node<br />
npm install @types/express<br />
npm i -D @types/node<br />
npm i typescript<br />
npm i express // 이것 때문에 한시간 날림, Javascript 버전이 왜 필요한거지?

git checkout -b dev

- dev라는 브랜치를 만들고 그 브랜치로 스위칭

참고문헌

- [typescript을 사용해 express 세팅](https://hckcksrl.medium.com/typescript-%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-express-node-js-%EC%84%B8%ED%8C%85-12bbdd62513f)
- [Typescript-express-nojs설정](https://velog.io/@y1andyu/TypeScript-Express-node.js-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [ts-node 관련 에러](https://stackoverflow.com/questions/44764004/ts-node-is-not-recognized-as-an-internal-or-external-command-operable-program)

</details>
